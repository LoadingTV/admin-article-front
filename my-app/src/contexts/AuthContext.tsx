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
      const token = localStorage.getItem("token");
      if (token) {
        console.log("Токен найден, отправка запроса на проверку...");
        const response = await fetch("http://localhost:3001/api/auth/me", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        if (response.ok) {
          const userData = await response.json();
          console.log("Данные пользователя получены:", userData);
          setUser(userData);
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
    const token = localStorage.getItem("token");
    if (token) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    console.log(`Отправка запроса на ${url} с параметрами:`, options);
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorData = await response.json();
      console.error("Ошибка запроса:", errorData.message || "Request failed");
      throw new Error(errorData.message || "Request failed");
    }
    return response;
  };
  const login = async (email: string, password: string) => {
    console.log("Попытка входа с email:", email);
    const response = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Ошибка входа:", errorData.message || "Login failed");
      throw new Error(errorData.message || "Login failed");
    }

    const { user: userData, token } = await response.json();
    console.log("Успешный вход. Данные пользователя:", userData);
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const register = async (userData: RegisterData) => {
    const { name, surname, email, password } = userData;
    console.log("Попытка регистрации с данными:", userData);
    const response = await fetch("http://localhost:3001/users", {
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

    const { user: newUser, token } = await response.json();
    console.log("Регистрация успешна. Данные нового пользователя:", newUser); // Логируем данные нового пользователя
    localStorage.setItem("token", token);
    setUser(newUser);
  };

  const logout = async () => {
    console.log("Выход из системы..."); // Логируем начало выхода
    localStorage.removeItem("token");
    setUser(null);
    console.log("Выход успешен."); // Логируем успешный выход
  };

  const updateProfile = async (userData: UpdateProfileData) => {
    console.log("Обновление профиля с данными:", userData); // Логируем данные для обновления профиля
    const response = await fetchWithAuth(
      "http://localhost:3000/api/users/profile",
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      }
    );

    const updatedUser = await response.json();
    console.log("Профиль успешно обновлен. Данные пользователя:", updatedUser); // Логируем обновленные данные пользователя
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
