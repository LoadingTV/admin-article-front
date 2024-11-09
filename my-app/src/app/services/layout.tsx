import React, { ReactNode } from "react";
import Image from "next/image";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full">
      <div className="banner banner-img_spray-foam-insulation">
        <div className="text-overlay">
          <h1 className="banner-service-h1 center">Spray Foam Insulation</h1>
          <div className="banner-estimate">
            <h3>Get a free quote today!</h3>
            <div className="banner-estimate-btn">
              <a href="tel:8555665340">
                <button className="button-blue">
                  <Image
                    src="/images/icons/phone.svg"
                    alt="Phone Icon"
                    width={24}
                    height={24}
                  />
                  (855) 566-5340
                </button>
              </a>
              <button className="button-yellow">GET A QUOTE</button>
            </div>
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
