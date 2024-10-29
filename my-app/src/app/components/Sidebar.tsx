// src/app/components/Sidebar.tsx
"use client"; // Убедитесь, что это первая строка

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Импортируем usePathname
import { FaBars, FaTimes } from "react-icons/fa";

// Список услуг
const services = [
  { name: "Spray Foam Insulation", path: "/" },
  { name: "Spray Foam Roofing System", path: "/" },
  { name: "Closed-Cell Insulation", path: "/" },
  { name: "Fiberglass Insulation", path: "/" },
  { name: "Blown-In Insulation", path: "/" },
  { name: "Soundproofing Insulation", path: "/" },
  { name: "Insulation Removal", path: "/" },
  { name: "Concrete Leveling", path: "/" },
  { name: "Polyurea Coating", path: "/" },
  { name: "About Us", path: "/" },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Получаем текущий путь

  // Определяем стиль сайдбара в зависимости от текущей страницы
  const isBlogPage = pathname.startsWith("/blog");
  const sidebarBg = isBlogPage
    ? "bg-gray-800 text-white"
    : "bg-white text-gray-800";
  const linkHover = isBlogPage ? "hover:bg-gray-700" : "hover:bg-gray-200";
  const activeLink = isBlogPage ? "bg-gray-700" : "bg-gray-100";

  return (
    <>
      {/* Кнопка для переключения мобильного меню */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-4 text-xl focus:outline-none"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Сайдбар */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-[300px] p-6 ${sidebarBg} z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
      >
        <div className="flex items-center mb-8">
          <span className="text-xl font-semibold">USA Spray Me</span>
        </div>

        <nav>
          {services.map((service) => (
            <Link href={service.path} key={service.name}>
              <span
                className={`block px-4 py-2 rounded-lg mb-2 ${
                  pathname === service.path ? activeLink : ""
                } ${linkHover}`}
              >
                {service.name}
              </span>
            </Link>
          ))}

          <Link href="/blog">
            <span
              className={`block px-4 py-2 rounded-lg mb-2 ${
                pathname === "/blog" ? activeLink : ""
              } ${linkHover}`}
            >
              Blog
            </span>
          </Link>

          <Link href="/faq">
            <span
              className={`block px-4 py-2 rounded-lg mb-2 ${
                pathname === "/faq" ? activeLink : ""
              } ${linkHover}`}
            >
              FAQ
            </span>
          </Link>
        </nav>

        <div className="mt-8">
          {/* Контакты */}
          <button className="block w-full py-2 text-center font-semibold border rounded-lg">
            GET A QUOTE
          </button>
          <p className="text-sm mt-4">(855) 566-5340</p>
          <p className="text-xs mt-1">800 Avenue H, San Francisco, CA 94130</p>
          <p className="text-xs mt-1">Monday – Saturday 7 AM – 6 PM</p>
        </div>
      </aside>

      {/* Overlay для мобильного меню */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
