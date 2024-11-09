import React from "react";
import Image from "next/image";
import BenefitItem from "./BenefitItem";
import ContactButtons from "./ContactButtons";

interface SprayFoamInsulationProps {}

const SprayFoamInsulation: React.FC<SprayFoamInsulationProps> = () => {
  const benefits = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/452561b3d861070c57dd340c1daa2ca5047054eb2e2526b319280993fbc50deb?placeholderIfAbsent=true&apiKey=208070de9cc240bbbe54f76d4345b390",
      text: "Energy efficiency",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/452561b3d861070c57dd340c1daa2ca5047054eb2e2526b319280993fbc50deb?placeholderIfAbsent=true&apiKey=208070de9cc240bbbe54f76d4345b390",
      text: "Cost savings",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/452561b3d861070c57dd340c1daa2ca5047054eb2e2526b319280993fbc50deb?placeholderIfAbsent=true&apiKey=208070de9cc240bbbe54f76d4345b390",
      text: "Comfort improvement",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/452561b3d861070c57dd340c1daa2ca5047054eb2e2526b319280993fbc50deb?placeholderIfAbsent=true&apiKey=208070de9cc240bbbe54f76d4345b390",
      text: "Noise reduction",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/452561b3d861070c57dd340c1daa2ca5047054eb2e2526b319280993fbc50deb?placeholderIfAbsent=true&apiKey=208070de9cc240bbbe54f76d4345b390",
      text: "Environmental impact",
    },
  ];

  return (
    <div className="banner white banner-img_home">
      <div className="banner-North">
        <h5>Northern California</h5>
      </div>
      <h1 className="banner-h1">SPRAY FOAM INSULATION</h1>
      <h2 className="banner-h2">
        USA Spray ME is your trusted partner for all your insulation needs in
        Northern California.
      </h2>
      <div className="check-container">
        {benefits.map((benefit, index) => (
          <p key={index}>
            <Image
              src="/images/icons/check_icn.svg"
              alt=""
              width={20}
              height={20}
              loading="lazy"
            />
            {benefit.text}
          </p>
        ))}
      </div>
      <div className="banner-text">
        <div className="banner-content w-full">
          <p className="whitespace-nowrap">
            From installation to removal to upgrades, we offer a wide
          </p>
          <p className="whitespace-nowrap">
            range of services to help you improve energy efficiency,
          </p>
          <p className="whitespace-nowrap">
            enhance comfort, and reduce utility costs.
          </p>
        </div>
      </div>

      <div className="banner-estimate">
        <h3>Get a free quote today!</h3>
        <div className="sale-estimate-btn">
          <a href="tel:8555665340">
            <button className="button-blue">(855) 566-5340</button>
          </a>
          <button className="button-yellow">GET A QUOTE</button>
        </div>
      </div>
    </div>
  );
};

export default SprayFoamInsulation;
