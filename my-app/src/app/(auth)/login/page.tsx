// src/app/(auth)/login/page.tsx
"use client";

import { useState } from "react";
import {
  RegisterOptions,
  useForm,
  UseFormRegisterReturn,
} from "react-hook-form";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

interface LoginFormData {
  email: string;
  password: string;
  access_token: string;
}

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      setLoading(true);
      await login(data.email, data.password);
      router.push("/profile");
    } catch (error) {
      console.error(error);
      alert(
        "Ошибка входа: " +
          (error instanceof Error ? error.message : "Неизвестная ошибка")
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Войти в аккаунт
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register("email", {
              required: "Обязательное поле",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Wrong email",
              },
            })}
            label="Email"
            type="email"
            name="name"
            error={errors.email?.message}
          />

          <Input
            register={register("password", {
              required: "Обязательное поле",
              minLength: {
                value: 8,
                message: "Пароль должен содержать минимум 8 символов",
              },
            })}
            label="Password"
            type="password"
            name="password"
            error={errors.password?.message}
          />
          <Button type="submit" loading={loading}>
            Войти
          </Button>
          <div className="text-center mt-4">
            <Link
              href="/register"
              className="text-blue-600 hover:text-blue-700"
            >
              New to Loading? Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
