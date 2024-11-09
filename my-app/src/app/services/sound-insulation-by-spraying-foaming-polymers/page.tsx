import React from "react";
import Image from "next/image"; // Import the Image component from Next.js

const page = () => {
  return (
    <div className="main">
      <section className="main-1 container main-border">
        <div>
          <div>
            <h2 className="services-title">
              We believe in the best Sound Insulation by Spraying Foaming
              Polymers
            </h2>
            <article className="main__item1 row-revers">
              <div className="main__item-picture img-top pl-50 pt-10">
                <Image
                  className="main__item-img service-img_pc-only"
                  src="/images/pictures/sound-insulation-1.webp"
                  alt=""
                  width={500} // Specify the width and height for the image
                  height={300} // Adjust as per your image aspect ratio
                />
                <Image
                  className="main__item-img service-img_pc-only"
                  src="/images/pictures/sound-insulation-2.webp"
                  alt=""
                  width={500}
                  height={300}
                />
                <Image
                  className="main__item-img service-img_pc-only"
                  src="/images/pictures/sound-insulation-3.webp"
                  alt=""
                  width={500}
                  height={300}
                />
                <Image
                  className="main__item-img service-img_pc-only"
                  src="/images/pictures/sound-insulation-4.webp"
                  alt=""
                  width={500}
                  height={300}
                />
              </div>
              <div className="main__item-text">
                <p>
                  Sound garage plays a crucial position with regards to creating
                  peaceful and relaxing surroundings in your own home, workplace
                  or anywhere else. Excessive noise can distract you and affect
                  your attention, rest and typical health. If you&apos;re in the
                  Bay Area and searching near me the best option for Sound
                  dampening spray foam, there is no one is better than USA Spray
                  Me and our innovative Polyurethane foam soundproofing service.
                </p>
                <Image
                  className="main__item-img service-img_mobi-only"
                  src="/images/pictures/sound-insulation-1.webp"
                  alt=""
                  width={500}
                  height={300}
                />
                <h2>Why our service is more beneficial than others?</h2>
                <p>
                  We believe in the best service with the best qualities of
                  product. We know for our best service every time you want to
                  take our service. Our thinking is the customer is the original
                  part of our workplace.
                </p>
                <Image
                  className="main__item-img service-img_mobi-only"
                  src="/images/pictures/sound-insulation-2.webp"
                  alt=""
                  width={500}
                  height={300}
                />
                <ol>
                  <li>
                    Outdoor sound protection: Imagine an area wherein outdoor
                    sounds live out, conversations continue to be personal, and
                    you could revel in peace and quiet uninterruptedly. This is
                    exactly the purpose of our noise reduction spray foam
                    service. Using modern technology and extraordinary
                    materials, we offer a complete way to successfully combat
                    noise pollution.
                  </li>
                  <li>
                    Soundproofing foam: Our Spray foam for soundproofing is
                    designed to attract, block, and decrease noise pollution by
                    preventing undesirable noise. By using spray foam for sound
                    insulation, we create a seamless barrier that effectively
                    reduces airborne noise and vibration, providing quiet and
                    cozy surroundings.
                  </li>
                  <li>
                    Acoustic spray for sound reduction: Acoustic spray foam is
                    versatile. Unlike conventional soundproofing that requires a
                    variety of upkeep or changes, our spray solution can be
                    applied quickly and effectively to any surface. Whether
                    walls, ceilings, floors, or specialty surfaces, our team has
                    the expertise to deliver precise solutions.
                  </li>
                  <li>
                    Durability: In addition to performance, our sound-reducing
                    spray foam guarantees durability. It is made from high
                    quality polyurethane and provides exceptional thermal
                    insulation, allowing you to save energy and reduce energy
                    costs. Plus, the robust construction ensures long-lasting
                    performance, so you can enjoy the benefits of a quiet space
                    for years to come.
                  </li>
                  <li>
                    Final installation: We understand that each project is
                    unique, which is why we bring a customized approach to each
                    job. From the initial quote to the final installation, our
                    team will work with you to assess your needs and tailor our
                    services for this reason. Whether you&apos;re looking for
                    audio for the home, business building, or industry,
                    we&apos;ve got the knowledge and capability to provide the
                    best solutions.
                  </li>
                </ol>
                <p>
                  Opportunity is also a priority for us, that&apos;s why we
                  provide our best soundproofing foam insulation. Whether you
                  are in San Francisco, Oakland, San Jose, or anywhere else
                  nearby, we&apos;re here to assist. Our team does everything we
                  can to provide fast and reliable service and to disrupt your
                  planning and daily activities as little as possible.
                </p>
                <Image
                  className="main__item-img service-img_mobi-only"
                  src="/images/pictures/sound-insulation-3.webp"
                  alt=""
                  width={500}
                  height={300}
                />
                <h3>
                  There are many reasons to take our soundproofing foam service:
                </h3>
                <p>
                  Now, you are probably realizing that we are offering the best
                  Spray on soundproofing foam service with all kinds of
                  qualities for reserve fiberglass insulation from us
                  especially. Well, allow me to give you the best choice for all
                  your insulation needs. Audio needs? The answer is
                  straightforward: We offer unrivaled quality, sophistication,
                  and comfort. Many innovative Spray foam noise insulation
                  solutions allow you to enjoy quiet and peaceful surroundings
                  without using or relying on traditional soundproofing methods.
                </p>
                <p>
                  Contact us today to learn more and schedule your consultation.
                  Experience the difference USA Spray Me can make in your home!
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
          <div className="field__text">INSIGNIFICANT COATING THICKNESS</div>
          <div className="field__text">STRENGTH</div>
          <div className="field__text">HIDES CONSTRUCTION DEFECTS</div>
          <div className="field__text">HEAT INSULATION</div>
          <div className="field__text">MOISTURE INSULATION</div>
          <div className="field__text">DURABILITY</div>
        </div>
      </div>
    </div>
  );
};

export default page;
