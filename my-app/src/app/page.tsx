import Image from "next/image";
import OurServices from "@/components/OurServices";
import Banner from "@/components/Banner";
import AboutUsComponent from "@/components/AboutUsComponent";

export default function Home() {
  return (
    <>
      <div className="z-10 w-full flex flex-col max-w-[1140px] items-center justify-between font-mono text-sm lg:flex">
        <Banner />
      </div>
      <section className="flex flex-col items-center justify-center mx-auto max-w-[1140px] px-4 py-10">
        <AboutUsComponent />
        <OurServices />
      </section>
    </>
  );
}
