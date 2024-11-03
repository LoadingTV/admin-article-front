// components/Banner.tsx
import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="banner white banner-img_home bg-white relative">
      <div className="banner-North">
        <h5 className="text-xl font-bold">Northern California</h5>
      </div>
      <h1 className="banner-h1 text-4xl font-bold mt-4">
        SPRAY FOAM INSULATION
      </h1>
      <h2 className="banner-h2 text-lg text-gray-700 mt-2">
        USA Spray ME is your trusted partner for all your insulation needs in
        Northern California.
      </h2>
      <div className="check-container mt-4">
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
      <div className="banner-text mt-4">
        <div className="banner-content">
          <p>From installation to removal to upgrades, we offer a wide</p>
          <p>range of services to help you improve energy efficiency,</p>
          <p>enhance comfort, and reduce utility costs.</p>
        </div>
      </div>

      <div className="banner-estimate mt-6">
        <h3 className="text-2xl font-semibold">Get a free quote today!</h3>
        <div className="sale-estimate-btn mt-4 flex space-x-2">
          <a href="tel:8555665340">
            <button className="button-blue bg-blue-500 text-white py-2 px-4 rounded flex items-center">
              <img src="/images/icons/phone.svg" alt="" className="mr-2" />
              (855) 566-5340
            </button>
          </a>
          <button className="button-yellow bg-yellow-500 text-white py-2 px-4 rounded">
            GET A QUOTE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
