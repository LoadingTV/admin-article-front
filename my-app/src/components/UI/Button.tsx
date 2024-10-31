// src/components/ui/Button.tsx
import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = "button",
  loading,
  children,
  onClick,
}) => (
  <button
    type={type}
    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
      loading ? "opacity-50 cursor-not-allowed" : ""
    }`}
    onClick={loading ? undefined : onClick}
    disabled={loading}
  >
    {loading ? "Загрузка..." : children}
  </button>
);

export default Button;
