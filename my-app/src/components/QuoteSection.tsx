import React from "react";

interface QuoteSectionProps {}

const QuoteSection: React.FC<QuoteSectionProps> = () => {
  return (
    <section className="flex flex-col items-center mt-9 ml-52 max-w-full text-2xl w-[628px]">
      <p className="self-stretch leading-10 text-center max-md:max-w-full">
        From installation to removal to upgrades, we offer a wide range of
        services to help you improve energy efficiency, enhance comfort, and
        reduce utility costs.
      </p>
      <h2 className="mt-7 leading-10">Get a free quote today!</h2>
      <div className="flex gap-4 mt-3 max-w-full text-lg font-medium leading-8 text-center w-[411px]">
        <a
          href="tel:8555665340"
          className="flex gap-4 px-3 py-1.5 bg-sky-500 rounded-[100px]"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34fc322f9306482259f882941e7969b562bf877b844690dc78135679b026bb65?placeholderIfAbsent=true&apiKey=208070de9cc240bbbe54f76d4345b390"
            alt=""
            className="object-contain shrink-0 my-auto w-5 aspect-square"
          />
          <span>(855) 566-5340</span>
        </a>
        <button className="px-10 py-1.5 bg-yellow-500 rounded-[100px] max-md:px-5">
          GET A QUOTE
        </button>
      </div>
    </section>
  );
};

export default QuoteSection;
