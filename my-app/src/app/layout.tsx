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
        <head></head>
        <body>
          <div className="flex">
            <Sidebar />
            <main className="w-full ml-0 lg:ml-[300px] flex flex-col items-center   ">
              {children}
              <Footer />
            </main>
          </div>
        </body>
      </html>
    </AuthProvider>
  );
};

export default Layout;
