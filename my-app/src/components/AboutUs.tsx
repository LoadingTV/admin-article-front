import React from "react";
import Image from "next/image";
import QuoteButtons from "../elements/quoteButtons";

const AboutUs = () => {
  return (
    <section className="border border-gray-300 rounded-md p-6 max-w-1080 m-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* картинка */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/about-us.jpg"
            alt="About Us Image"
            width={490}
            height={450}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* остальное*/}
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-3xl font-semibold text-gray-800">About Us</h2>
          <p className="text-gray-600">
            USASPRAYME offers a huge range of services for insulation and
            waterproofing. Using materials from leading suppliers and proven
            technology we can provide effective insulation of any turnkey
            objects at competitive prices.
          </p>

          {/* список в галочками */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <p className="flex items-center">
              <img
                src="/images/icons/check_icn.svg"
                alt=""
                loading="lazy"
                className="mr-2"
              />
              Energy efficiency
            </p>
            <p className="flex items-center">
              <img
                src="/images/icons/check_icn.svg"
                alt=""
                loading="lazy"
                className="mr-2"
              />
              Cost savings
            </p>
            <p className="flex items-center">
              <img
                src="/images/icons/check_icn.svg"
                alt=""
                loading="lazy"
                className="mr-2"
              />
              Comfort improvement
            </p>
            <p className="flex items-center">
              <img
                src="/images/icons/check_icn.svg"
                alt=""
                loading="lazy"
                className="mr-2"
              />
              Noise reduction
            </p>
            <p className="flex items-center">
              <img
                src="/images/icons/check_icn.svg"
                alt=""
                loading="lazy"
                className="mr-2"
              />
              Environmental impact
            </p>
          </div>

          {/* кнопки щвонок и нечто */}
          <div className="flex gap-4 pt-4">
            <QuoteButtons />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
