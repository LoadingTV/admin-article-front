import Image from "next/image";

import Banner from "../components/Banner";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-1140 items-center justify-between font-mono text-sm lg:flex">
        <Banner />
      </div>
      <div className="z-10 w-full max-width: 1140px mx-auto font-mono text-sm flex justify-center">
          <AboutUs />
      </div>
    </>
  );
}