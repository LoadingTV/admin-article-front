import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex flex-col items-center px-20 pb-11 w-full bg-gray-900 max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col items-start ml-36 max-w-full w-[1320px]">
        <div className="self-end px-3.5 py-1 text-sm font-medium leading-7 text-center uppercase bg-green-500 rounded shadow-[0px_2px_2px_rgba(0,0,0,0.2)]">
          Northern California
        </div>
        <h1 className="mx-16 mt-3.5 text-5xl font-semibold leading-snug uppercase max-md:mr-2.5 max-md:max-w-full max-md:text-4xl">
          Spray Foam Insulation
        </h1>
        <p className="mt-5 text-4xl font-medium leading-10 text-center max-md:max-w-full">
          USA Spray ME is your trusted partner for all your insulation needs in
          the Northern California.
        </p>
      </div>
    </header>
  );
};

export default Header;
