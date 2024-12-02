"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { User } from "@/types/user";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (userData: UpdateProfileData) => Promise<void>;
}

interface RegisterData {
  name: string;
  surname: string;
  email: string;
  password: string;
}

interface UpdateProfileData {
  name?: string;
  surname?: string;
  email?: string;
  password?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      console.log("Проверка аутентификации...");
      const access_token = localStorage.getItem("access_token");
      if (access_token) {
        console.log("Токен найден, отправка запроса на проверку...");
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/me`,
          {
            headers: { Authorization: `Bearer ${access_token}` },
          }
        );
        if (response.ok) {
          const userData = await response.json();
          console.log("Данные пользователя получены:", userData);
          setUser(userData.user);
        } else {
          console.error(
            "Ошибка проверки аутентификации:",
            response.statusText,
            response.status
          );
          throw new Error("Authentication check failed");
        }
      } else {
        console.warn("Токен не найден.");
      }
    } catch (error) {
      console.error("Ошибка при проверке аутентификации:", error);
    } finally {
      setLoading(false);
      console.log("Проверка аутентификации завершена.");
    }
  };

  const fetchWithAuth = async (url: string, options: RequestInit) => {
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${access_token}`,
      };
    }
    console.log(`Отправка запроса на ${url} с параметрами:`, options);
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Ошибка запроса:", errorData.message || "Request failed");
        throw new Error(errorData.message || "Request failed");
      }
      return response;
    } catch (error) {
      console.error("Ошибка при выполнении запроса:", error);
      throw error;
    }
  };

  const login = async (email: string, password: string) => {
    console.log("Попытка входа с email:", email);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Ошибка входа:", errorData.message || "Login failed");
        throw new Error(errorData.message || "Login failed");
      }

      const { accessToken, user: loggedInUser } = await response.json();
      console.log("Полученный токен:", accessToken.access_token);
      localStorage.setItem("access_token", accessToken.access_token);
      setUser(loggedInUser);
    } catch (error) {
      console.error("Ошибка при попытке входа:", error);
      throw error;
    }
  };

  const register = async (userData: RegisterData) => {
    const { name, surname, email, password } = userData;
    console.log("Попытка регистрации с данными:", userData);
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, surname, email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(
        "Ошибка регистрации:",
        errorData.message || "Registration failed"
      );
      throw new Error(errorData.message || "Registration failed");
    }

    const { user: newUser, access_token } = await response.json();
    console.log("Register success!  Данные нового пользователя:", newUser);
    localStorage.setItem("access_token", access_token);
    setUser(newUser);
  };

  const logout = async () => {
    console.log("Выход из системы...");
    localStorage.removeItem("access_token");
    setUser(null);
    console.log("Выход успешен.");
  };

  const updateProfile = async (userData: UpdateProfileData) => {
    console.log("Обновление профиля с данными:", userData);
    const response = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_API_URL}/users/profile`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );

    const updatedUser = await response.json();
    console.log("Профильуспешно обновлен. Данные пользователя:", updatedUser);
    setUser(updatedUser);
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, login, register, logout, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
