// src/app/(auth)/register/page.tsx
"use client";

import { useState } from "react";
import { useForm, RegisterOptions } from "react-hook-form";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setLoading(true);

      await register({
        name: data.name,
        email: data.email,
        password: data.password,
        surname: "",
      });
      router.push("/profile");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Зарегистрироваться
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={formRegister("name", {
              required: "Обязательное поле",
            })}
            label="Имя"
            name="name"
            error={errors.name?.message}
          />
          <Input
            register={formRegister("email", {
              required: "Обязательное поле",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Неверный формат email",
              },
            })}
            label="Email"
            name="email"
            error={errors.email?.message}
          />
          <Input
            register={formRegister("password", {
              required: "Обязательное поле",
              minLength: {
                value: 8,
                message: "Пароль должен содержать минимум 8 символов",
              },
            })}
            label="Пароль"
            type="password"
            name="password"
            error={errors.password?.message}
          />
          <Button type="submit" loading={loading}>
            Зарегистрироваться
          </Button>
          <div className="text-center mt-4">
            <Link href="/login" className="text-blue-600 hover:text-blue-700">
              Есть аккаунт? Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
