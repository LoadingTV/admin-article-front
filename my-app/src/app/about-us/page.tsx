import Image from "next/image";
import AboutUsComponent from "../../components/AboutUsComponent";
import SanFranciscoCompany from "@/components/SanFranciscoCompany";

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <AboutUsComponent />   
      <SanFranciscoCompany />     
    </div>

  );
};

export default AboutUs;
