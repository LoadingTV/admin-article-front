// src/components/ui/Input.tsx
import React from "react";
import { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  error?: string;
  type?: string;
  register: ReturnType<UseFormRegister<any>>; // Обновляем тип
  name: string;
  validation?: RegisterOptions;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  type = "text",
  register,
  name,
  validation = {},
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700">{label}</label>
    <input
      {...register} // Используем register напрямую
      type={type}
      className={`mt-1 block w-full border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
  </div>
);

export default Input;
