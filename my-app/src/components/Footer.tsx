import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex flex-row flex-nowrap items-center justify-between left-0 h-[90px] bg-gray-800 p-5">
      <div className="logo mb-4 lg:mb-0">
        <Image
          src="/images/icons/logo.svg"
          alt="UsaSprayMe Logo"
          width={100}
          height={100}
        />
      </div>
      <div className="text-center mb-4 lg:mb-0">
        <p>© 2005-2024 All rights reserved.</p>
        <p>800 Avenue H, San Francisco, CA 94130 | (855) 566-5340</p>
      </div>
      <div>
        <Link href="#" aria-label="Scroll to top" className="scroll-to-top">
          <Image
            src="/images/icons/arrow_top.svg"
            alt="Scroll to top"
            width={24}
            height={24}
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
