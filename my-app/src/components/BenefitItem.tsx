import React from "react";

interface BenefitItemProps {
  icon: string;
  text: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, text }) => {
  return (
    <div className="flex gap-1">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain shrink-0 w-8 aspect-square"
      />
      <div className="basis-auto">{text}</div>
    </div>
  );
};

export default BenefitItem;
