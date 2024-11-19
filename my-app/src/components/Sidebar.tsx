"use client"; // Убедитесь, что это первая строка

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Импортируем usePathname
import { FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image"; // Импортируем Image из next/image

const services = [
  { name: "Spray Foam Insulation", path: "/services/spray-foam-insulation" },
  {
    name: "Spray Foam Roofing System",
    path: "/services/spray-foam-roofing-system",
  },
  { name: "Closed-Cell Insulation", path: "/services/closed-cell-insulation" },
  { name: "Fiberglass Insulation", path: "/services/fiberglass-insulation" },
  { name: "Blown-In Insulation", path: "/services/blown-insulation" },
  {
    name: "Soundproofing Insulation",
    path: "/services/sound-insulation-by-spraying-foaming-polymers",
  },
  { name: "Insulation Removal", path: "/services/foam-insulation-removal" },
  { name: "Concrete Leveling", path: "/services/concrete-leveling" },
  { name: "Polyurea Coating", path: "/services/polyurea-coating" },
  { name: "About Us", path: "/about-us" },
];

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isBlogPage = pathname.startsWith("/blog");
  const sidebarBg = isBlogPage
    ? "bg-gray-800 text-white"
    : "bg-white text-gray-800";
  const linkHover = isBlogPage ? "hover:bg-gray-700" : "hover:bg-gray-200";
  const activeLink = isBlogPage ? "bg-gray-700" : "bg-gray-100";

  const callPhoneNumber = () => {
    window.location.href = "tel:8555665340";
  };

  return (
    <>
      {/* Toggle button for mobile */}
      {/* <button
    
        className="lg:hidden p-4 text-xl focus:outline-none"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button> */}
      <div className="side-mobi ">
        <div className="side-fix">
          <div className="side-header">
            <div className="side-burger" onClick={() => setIsOpen(!isOpen)}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>

            <div className="side-logo">
              <Link href="/">
                <Image
                  src="/images/icons/logo.svg"
                  alt="UsaSprayMe Logo"
                  width={300}
                  height={300}
                />
              </Link>
            </div>

            <div className="side-phone">
              <a href="tel:8555665340" aria-label="Call Us">
                <Image
                  src="/images/icons/phone-black.svg"
                  alt="Phone Icon"
                  width={32}
                  height={32}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Сайдбар */}
      <aside
        className={` fixed top-0 left-0   shadow-md h-full w-[300px] p-6        ${sidebarBg} z-50 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:block`}
      >
        <div className="flex items-center mb-8 lg:justify-center">
          {/* <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-4 text-xl focus:outline-none"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button> */}
          <div className="side-logo">
            <Link href="/">
              <Image
                src="/images/icons/logo_vector_outline.svg"
                alt="UsaSprayMe Logo"
                width={300}
                height={300}
              />
            </Link>
          </div>
          <div
            className="ml cursor-pointer lg:hidden"
            onClick={callPhoneNumber}
          >
            <Image
              src="/images/icons/phone-black.svg"
              alt="Phone Icon"
              width={32}
              height={32}
            />
          </div>
        </div>

        <nav className={` ${sidebarBg}`}>
          {services.map((service) => (
            <Link href={service.path} key={service.name}>
              <span
                className={`block ${sidebarBg} px-4 py-2 rounded-lg mb-2  ${
                  pathname === service.path ? activeLink : ""
                } ${linkHover}`}
              >
                {service.name}
              </span>
            </Link>
          ))}

          <Link href="/blog">
            <span
              className={`block px-4 py-2 rounded-lg mb-2 text-black${
                pathname === "/blog" ? activeLink : ""
              } ${linkHover}`}
            >
              Blog
            </span>
          </Link>

          <Link href="/faq">
            <span
              className={`block px-4 py-2 rounded-lg mb-2 ${sidebarBg} ${
                pathname === "/faq" ? activeLink : ""
              } ${linkHover}`}
            >
              FAQ
            </span>
          </Link>
        </nav>
        {/* Социальные иконки */}
        <div className="mt-4 flex space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=100063656786704&mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons/facebook-black-orange.svg"
              alt="Facebook"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.yelp.com/biz/usa-spray-me-san-francisco?uid=VmTM6BGkDSCxDJvSYdRVAA&utm_source=ishare"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons/yelp-black-orange.svg"
              alt="Yelp"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.instagram.com/usasprayme/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons/instagram-black-orange.svg"
              alt="Instagram"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.youtube.com/@UsaSprayme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons/youtube-black-orange.svg"
              alt="YouTube"
              width={24}
              height={24}
            />
          </a>
          <a
            href="https://www.google.com/search?q=usasprayme"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons/google-black-orange.svg"
              alt="Google"
              width={24}
              height={24}
            />
          </a>
        </div>

        <div className="mt-8">
          {/* Контакты */}
          <button className="get-quote-btn3 get-quote-btn3-blog light-18">
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
