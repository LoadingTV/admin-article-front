import Image from "next/image";
import OurServices from "@/components/OurServices";
import Banner from "@/components/Banner";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <>
      <div className="z-10 w-full flex flex-col max-w-1140 items-center justify-between font-mono text-sm lg:flex">
        <Banner />
      </div>
      <div className="z-10 w-full flex flex-col max-width: 1140px mx-auto font-mono text-sm  items-center justify-center">
        <AboutUs />
        <OurServices />
      </div>
    </>
  );
}
