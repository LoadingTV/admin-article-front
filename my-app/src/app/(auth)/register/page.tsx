"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "@/components/UI/Input";
import Button from "@/components/UI/Button";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface RegisterFormData {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      setLoading(true);

      await register({
        name: data.name,
        surname: data.surname,
        email: data.email,
        password: data.password,
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
            Register
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={formRegister("name", {
              required: "Required field",
            })}
            label="Name"
            name="name"
            error={errors.name?.message}
          />
          <Input
            register={formRegister("surname", {
              required: "Required field",
            })}
            label="Surname"
            name="surname"
            error={errors.surname?.message}
          />
          <Input
            register={formRegister("email", {
              required: "Required field",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email format",
              },
            })}
            label="Email"
            name="email"
            error={errors.email?.message}
          />
          <Input
            register={formRegister("password", {
              required: "Required field",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long",
              },
            })}
            label="Password"
            type="password"
            name="password"
            error={errors.password?.message}
          />
          <Input
            register={formRegister("confirmPassword", {
              required: "Required field",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            error={errors.confirmPassword?.message}
          />
          <Button type="submit" loading={loading}>
            Register
          </Button>
          <div className="text-center mt-4">
            <Link href="/login" className="text-blue-600 hover:text-blue-700">
              Already have an account? Log in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
