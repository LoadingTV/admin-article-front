import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="main">
      <section className="main-1 container">
        <article className="main__item row mobi-column-revers">
          <div className="main__item-picture">
            <picture className="img__optima">
              <Image
                className="main__item-img"
                src="/images/pictures/home_about-us.webp"
                alt="about-us"
                width={500} // Указываем ширину
                height={300} // Указываем высоту
                loading="eager"
              />
            </picture>
          </div>
          <div className="main__item-text">
            <h2>About Us</h2>
            <p>
              USASPRAYME offers a huge range of services for insulation and
              waterproofing. Using materials from leading suppliers and proven
              technology we can provide effective insulation of any turnkey
              objects at competitive prices.
            </p>
            <div className="about-us-check-container">
              <p>
                <Image
                  src="/images/icons/check_icn.svg"
                  alt="check icon"
                  width={16}
                  height={16}
                />{" "}
                Energy efficiency
              </p>
              <p>
                <Image
                  src="/images/icons/check_icn.svg"
                  alt="check icon"
                  width={16}
                  height={16}
                />{" "}
                Cost savings
              </p>
              <p>
                <Image
                  src="/images/icons/check_icn.svg"
                  alt="check icon"
                  width={16}
                  height={16}
                />{" "}
                Comfort improvement
              </p>
              <p>
                <Image
                  src="/images/icons/check_icn.svg"
                  alt="check icon"
                  width={16}
                  height={16}
                />{" "}
                Noise reduction
              </p>
              <p>
                <Image
                  src="/images/icons/check_icn.svg"
                  alt="check icon"
                  width={16}
                  height={16}
                />{" "}
                Environmental impact
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* A San Francisco-Based Company */}
      <section className="main-1 container">
        <article className="main__item row-revers mobi-column-revers">
          <div className="main__item-picture">
            <picture className="img__optima">
              <Image
                className="main__item-img"
                src="/images/pictures/img__about-us.webp"
                alt="about-us"
                width={500} // Указываем ширину
                height={300} // Указываем высоту
                loading="eager"
              />
            </picture>
          </div>
          <div className="main__item-text">
            <h2>A San Francisco-Based Company</h2>
            <p>
              A San Francisco-based company with a highly experienced team, each
              with many years of experience in the insulation industry.
            </p>
            <p>
              For more than ten years our aim has remained the same, to provide
              our services with the highest standards and quality for our
              customers.
            </p>

            <div className="banner-estimate-btn pt-10">
              <a href="tel:8555665340">
                <button className="button-blue">
                  <Image
                    src="/images/icons/phone.svg"
                    alt="phone icon"
                    width={16}
                    height={16}
                  />
                  (855) 566-5340
                </button>
              </a>
              <button className="button-yellow">GET A QUOTE</button>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default AboutUs;
