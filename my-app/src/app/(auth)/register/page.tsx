// src/app/(auth)/register/page.tsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const { register: registerUser } = useAuth();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setLoading(true);
      await registerUser(data);
      router.push("/profile");
    } catch (error) {
      console.error("Ошибка регистрации:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Создать аккаунт
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Имя"
            name="firstName"
            register={register}
            error={errors.firstName?.message}
          />
          <Input
            label="Фамилия"
            name="lastName"
            register={register}
            error={errors.lastName?.message}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            register={register}
            validation={{
              required: "Обязательное поле",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Неверный формат email",
              },
            }}
            error={errors.email?.message}
          />
          <Input
            label="Пароль"
            type="password"
            name="password"
            register={register}
            validation={{
              required: "Обязательное поле",
              minLength: {
                value: 8,
                message: "Пароль должен содержать минимум 8 символов",
              },
            }}
            error={errors.password?.message}
          />
          <Button type="submit" loading={loading}>
            Зарегистрироваться
          </Button>
          <div className="text-center mt-4">
            <Link href="/login" className="text-blue-600 hover:text-blue-700">
              Уже есть аккаунт? Войти
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
