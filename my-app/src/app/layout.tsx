// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      {" "}
      <body className={inter.className}>
        {" "}
        <div className="flex">
          <Sidebar />
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
