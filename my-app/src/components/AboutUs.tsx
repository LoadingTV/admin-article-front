import React from "react";
import Image from "next/image";
import QuoteButtons from "../elements/quoteButtons";

const AboutUs = () => {
  return (
    <section className="main-1 container">
      <article className="main__item row mobi-column-revers">
        <div className="main__item-picture">
          <picture className="img__optima">
            <img
              className="main__item-img"
              src="images/pictures/home_about-us.webp"
              alt="about-us"
              loading="eager"
            />
          </picture>
        </div>
        <div className="main__item-text">
          <h2 className="">About Us</h2>
          <p>
            USASPRAYME offers a huge range of services for insulation and
            waterproofing. Using materials from leading suppliers and proven
            technology we can provide effective insulation of any turnkey
            objects at competitive prices.
          </p>
          <div className="about-us-check-container">
            <p>Energy efficiency</p>
            <p>Cost savings</p>
            <p>Comfort improvement</p>
            <p>Noise reduction</p>
            <p>Environmental impact</p>
          </div>
          <div className="sale-estimate-btn pt-10">
            <a>
              <button className="button-blue">(855) 566-5340</button>
            </a>
            <button className="button-yellow">GET A QUOTE</button>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutUs;
