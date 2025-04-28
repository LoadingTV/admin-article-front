import React from "react";

interface ContactButtonsProps {}
const ContactButtons: React.FC<ContactButtonsProps> = () => {
  return (
    <div className="flex flex-col md:flex-row items-center w-full sm:w-auto gap-2">
      <a href="tel:8555665340">
        <button
          className="w-[192px] h-[42px] bg-[#1c92ff] text-white text-[18px] 
            rounded-[223px] uppercase cursor-pointer 
            hover:bg-[#f9b000] hover:text-white whitespace-nowrap"
        >
          (855) 566-5340
        </button>
      </a>

      <button
        className="w-[192px] h-[42px] bg-[#f9b000] text-white text-[18px]
          rounded-[223px] uppercase cursor-pointer 
          hover:bg-[#1c92ff] hover:text-white whitespace-nowrap"
      >
        GET A QUOTE
      </button>
    </div>
  );
};


export default ContactButtons;
