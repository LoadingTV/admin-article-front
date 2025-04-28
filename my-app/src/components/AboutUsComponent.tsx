import React from "react";
import Image from "next/image";
import ContactButtons from "./ContactButtons";

const AboutUsComponent = () => {
  return (
    <section className="flex flex-col justify-center mx-auto max-w-[1050px] px-[15px] py-[10px]">
      <article className="flex flex-col md:flex-row justify-between gap-[15px] border border-[#e8e8e8] rounded-[6px] p-[24px] lg:max-w-[1140px]">
        <div className="md:w-1/2 w-full mb-4 md:mb-0">
          <div className="relative w-full h-0 pb-[75%] md:pb-[100%] rounded-[6px] overflow-hidden">
            <Image
              src="/images/pictures/home_about-us.webp"
              alt="about-us"
              layout="fill"
              objectFit="cover"
              className="rounded-[6px]"
              loading="eager"
            />
          </div>
        </div>

        <div className="flex flex-col justify-start items-start pt-0 md:w-[50%] p-4 md:p-[25px]">
          <h2
            className="text-[27px] leading-[25px] text-left mt-[20px] mb-[10px] w-full 
            md:text-[40px] md:font-semibold md:leading-[40px] md:tracking-[0.5px]"
          >
            About Us
          </h2>
          <p className="mb-4 leading-[25px] mt-[10px] ">
            USASPRAYME offers a huge range of services for insulation and
            waterproofing. Using materials from leading suppliers and proven
            technology we can provide effective insulation of any turnkey
            objects at competitive prices.
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-[10px] mb-[25px] max-md:grid-cols-1 max-md:justify-items-start">
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/452561b3d861070c57dd340c1daa2ca5047054eb2e2526b319280993fbc50deb?placeholderIfAbsent=true&apiKey=208070de9cc240bbbe54f76d4345b390"
                alt=""
                width={20}
                height={20}
              />
              <p className="m-0 p-0">Energy efficiency</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/452561b3d861070c57dd340c1daa2ca5047054eb2e2526b319280993fbc50deb?placeholderIfAbsent=true&apiKey=208070de9cc240bbbe54f76d4345b390"
                alt=""
                width={20}
                height={20}
              />
              <p className="m-0 p-0">Cost savings</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/452561b3d861070c57dd340c1daa2ca5047054eb2e2526b319280993fbc50deb?placeholderIfAbsent=true&apiKey=208070de9cc240bbbe54f76d4345b390"
                alt=""
                width={20}
                height={20}
              />
              <p className="m-0 p-0">Comfort improvement</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/452561b3d861070c57dd340c1daa2ca5047054eb2e2526b319280993fbc50deb?placeholderIfAbsent=true&apiKey=208070de9cc240bbbe54f76d4345b390"
                alt=""
                width={20}
                height={20}
              />
              <p className="m-0 p-0">Cost savings</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/452561b3d861070c57dd340c1daa2ca5047054eb2e2526b319280993fbc50deb?placeholderIfAbsent=true&apiKey=208070de9cc240bbbe54f76d4345b390"
                alt=""
                width={20}
                height={20}
              />
              <p className="m-0 p-0">Noise reduction</p>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/452561b3d861070c57dd340c1daa2ca5047054eb2e2526b319280993fbc50deb?placeholderIfAbsent=true&apiKey=208070de9cc240bbbe54f76d4345b390"
                alt=""
                width={20}
                height={20}
              />
              <p className="m-0 p-0">Environmental impact</p>
            </div>
          </div>
          <ContactButtons />
        </div>
      </article>
    </section>
  );
};

export default AboutUsComponent;
