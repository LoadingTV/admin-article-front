import React from "react";
import Image from "next/image";
import ContactButtons from "./ContactButtons";

const SanFranciscoCompany = () => {
  return (
    <section className="flex flex-col justify-center mx-auto max-w-[1050px] px-[15px] py-[10px]">
      <article className="flex flex-col md:flex-row justify-between gap-[15px] border border-[#e8e8e8] rounded-[6px] p-[24px] lg:max-w-[1140px]">
        {/* Text block first */}
        <div className="flex flex-col justify-start items-start pt-0 md:w-[50%] p-4 md:p-[25px]">
          <h2
            className="text-[27px] leading-[25px] text-left mt-[20px] mb-[10px] w-full 
            md:text-[40px] md:font-semibold md:leading-[40px] md:tracking-[0.5px]"
          >
            A San Francisco-Based Company
          </h2>
          <p className="mb-4 leading-[25px] mt-[10px]">
            A San Francisco-based company with a highly experienced team, each
            with many years of experience in the insulation industry.
          </p>
          <p className="mb-4 leading-[25px]">
            For more than ten years our aim has remained the same, to provide
            our services with the highest standards and quality for our
            customers.
          </p>

          {/* Buttons component */}
          <div className="mt-[25px]">
            <ContactButtons />
          </div>
        </div>

        {/* Image block second */}
        <div className="md:w-1/2 w-full mb-4 md:mb-0">
          <div className="relative w-full h-0 pb-[75%] md:pb-[100%] rounded-[6px] overflow-hidden">
            <Image
              src="/images/pictures/img__about-us.webp"
              alt="San Francisco company"
              layout="fill"
              objectFit="cover"
              className="rounded-[6px]"
              loading="eager"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default SanFranciscoCompany;
