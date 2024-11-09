import React from "react";

interface FeatureProps {
  icon: string;
  text: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, text }) => (
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

interface FeatureListProps {}

const FeatureList: React.FC<FeatureListProps> = () => {
  const features: FeatureProps[] = [
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
    <div className="flex flex-wrap gap-6 mt-7 text-lg font-medium leading-8">
      {features.map((feature, index) => (
        <Feature key={index} icon={feature.icon} text={feature.text} />
      ))}
    </div>
  );
};

export default FeatureList;
