import React from "react";
import Image from "next/image";

const Page: React.FC = () => {
  return (
    <div className="main">
      <section className="main-1 container main-border">
        <div>
          <div>
            <h2 className="services-title">Make it with Spray Me</h2>
            <article className="main__item1 row-revers">
              <div className="main__item-picture img-top pl-50 pt-10">
                <Image
                  className="main__item-img service-img_pc-only"
                  src="/images/pictures/spray-foam-insulation-4.webp"
                  alt="Spray Foam Insulation 4"
                  width={600} // Укажите нужную ширину
                  height={400} // Укажите нужную высоту
                />
                <Image
                  className="main__item-img service-img_pc-only"
                  src="/images/pictures/spray-foam-insulation-5.webp"
                  alt="Spray Foam Insulation 5"
                  width={600}
                  height={400}
                />
                <Image
                  className="main__item-img service-img_pc-only"
                  src="/images/pictures/spray-foam-insulation-6.webp"
                  alt="Spray Foam Insulation 6"
                  width={600}
                  height={400}
                />
                <Image
                  className="main__item-img service-img_pc-only"
                  src="/images/pictures/spray-foam-insulation-7.webp"
                  alt="Spray Foam Insulation 7"
                  width={600}
                  height={400}
                />
              </div>
              <div className="main__item-text">
                <Image
                  className="main__item-img service-img_mobi-only"
                  src="/images/pictures/spray-foam-insulation-4.webp"
                  alt="Spray Foam Insulation 4"
                  width={600}
                  height={400}
                />
                <p>
                  If you&apos;re looking for spray foam insulation services in
                  the Bay Area, welcome to USA Spray Me, your premier
                  destination for top-notch spray foam insulation. We understand
                  the importance of creating a comfortable environment for your
                  home or business; that&apos;s why we offer a comprehensive
                  range of foam insulation services aimed at best spray foam
                  insulation performance.
                </p>
                <h3>Our Services</h3>
                <p>
                  We provide various services: From initial consultation to
                  professional installation, we&apos;re here to meet all your
                  insulation needs. Our spray foam contractors understand your
                  insulation requirements. We take into account factors such as
                  building size, construction materials, existing insulation,
                  and specific comfort concerns. Based on our assessment, we
                  provide personalized recommendations tailored to your unique
                  needs and budget.
                </p>
                <h3>Foam Roof Insulation and Roofing Contractors</h3>
                <p>
                  Improve the energy efficiency and durability of your property
                  with our foam roof insulation services, provided by
                  experienced roofing contractors and foam roofing companies.
                </p>
                <Image
                  className="main__item-img service-img_mobi-only"
                  src="/images/pictures/spray-foam-insulation-5.webp"
                  alt="Spray Foam Insulation 5"
                  width={600}
                  height={400}
                />
                <h3>Spray Foam Attic Insulation and Spray Foam Contractors</h3>
                <p>
                  Enhance the comfort and energy efficiency of your home with
                  our spray foam attic insulation services, expertly installed
                  by our qualified contractors. We offer comprehensive attic
                  insulation solutions to maintain a comfortable indoor
                  environment year-round. It also helps you minimize insulation
                  spray foam price.
                </p>
                <h3>Foam Insulation in Existing Walls</h3>
                <p>
                  Upgrade the insulation in your existing walls with our expert
                  foam insulation services, enhancing energy efficiency and
                  comfort throughout your property. Our innovative techniques
                  and specialized equipment allow for seamless installation,
                  minimizing disruption to your home or business.
                </p>
                <Image
                  className="main__item-img service-img_mobi-only"
                  src="/images/pictures/spray-foam-insulation-6.webp"
                  alt="Spray Foam Insulation 6"
                  width={600}
                  height={400}
                />
                <h3>Spray Foam Insulation Near Me</h3>
                <p>
                  Conveniently located in the Bay Area, we provide prompt and
                  reliable spray foam insulation services to residential and
                  commercial clients throughout the region. With our extensive
                  network of trained professionals, we&apos;re able to serve
                  customers in your area efficiently and effectively.
                </p>
                <h2>Foam Insulation Contractors Near Me</h2>
                <p>
                  Our team of licensed and insured foam insulation contractors
                  is dedicated to delivering top-quality service and
                  craftsmanship on every project. We prioritize professionalism,
                  reliability, and attention to detail to ensure your complete
                  satisfaction with our work.
                </p>
                <Image
                  className="main__item-img service-img_mobi-only"
                  src="/images/pictures/spray-foam-insulation-7.webp"
                  alt="Spray Foam Insulation 7"
                  width={600}
                  height={400}
                />
                <h3>Foam Polyurethane</h3>
                <p>
                  We specialize in the application of high-quality foam
                  polyurethane insulation, known for its superior thermal
                  performance and air sealing properties. Our expert technicians
                  ensure precise installation, effectively sealing cracks, gaps,
                  and voids to minimize air leakage and heat transfer.
                </p>
                <p>
                  We offer the best spray foam insulation prices and flexible
                  financing options to make top-quality insulation accessible to
                  all customers. Transform your property with superior
                  insulation solutions from USA Spray Me. Contact us today to
                  schedule a consultation and take the first step toward a more
                  comfortable, energy-efficient environment.
                </p>
                <div className="main__item-btn"></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <div className="advantages">
        <div className="field__name semi-bold-40">Advantages & Benefits</div>
        <div className="field__all-items">
          <div className="field__text">Lower energy cost</div>
          <div className="field__text">
            Stops drafts, allergens, and condensation
          </div>
          <div className="field__text">Does not settle or shrink</div>
          <div className="field__text">Quieter indoor environment</div>
          <div className="field__text">Adds structural strength</div>
          <div className="field__text">Seals cracks and voids</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
