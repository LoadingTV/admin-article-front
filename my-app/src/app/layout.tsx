// src/app/layout.tsx
import type { Metadata } from "next";

import "./globals.css";
import Sidebar from "../components/Sidebar";
import { AuthProvider } from "@/contexts/AuthContext";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Create by Mark Nesterenko",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <head>
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <div className="flex">
            <Sidebar />
            <main className=" ml-0 lg:ml-[300px] flex flex-col items-center   ">
              {children}
            </main>
            {/* <Footer /> */}
          </div>
        </body>
      </html>
    </AuthProvider>
  );
};

export default Layout;
