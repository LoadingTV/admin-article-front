import React from "react";

interface ContactButtonsProps {}

const ContactButtons: React.FC<ContactButtonsProps> = () => {
  return (
    <div className="text-lg font-medium leading-8 text-center items-center justify-center flex-row">
      <button className="button-yellow bg-yellow-600 rounded-full py-1 px-3">
        GET A QUOTE
      </button>
    </div>
  );
};

export default ContactButtons;
