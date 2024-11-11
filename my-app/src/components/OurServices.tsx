import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    name: "Spray Foam Insulation",
    href: "/services/spray-foam-insulation",
    imgSrc: "/images/pictures/service1.webp",
    imgAlt: "Service 1",
  },
  {
    name: "Spray Foam Roofing System",
    href: "/services/spray-foam-roofing-system",
    imgSrc: "/images/pictures/service2.webp",
    imgAlt: "Service 2",
  },
  {
    name: "Closed Cell Insulation",
    href: "/services/closed-cell-insulation",
    imgSrc: "/images/pictures/service3.webp",
    imgAlt: "Service 3",
  },
  {
    name: "Fiberglass Insulation",
    href: "/services/fiberglass-insulation",
    imgSrc: "/images/pictures/service4.webp",
    imgAlt: "Service 4",
  },
  {
    name: "Blow-in Insulation",
    href: "/services/blown-insulation",
    imgSrc: "/images/pictures/service5.webp",
    imgAlt: "Service 5",
  },
  {
    name: "Soundproofing Insulation",
    href: "/services/sound-insulation-by-spraying-foaming-polymers",
    imgSrc: "/images/pictures/service6.webp",
    imgAlt: "Service 6",
  },
  {
    name: "Insulation Removal",
    href: "/services/foam-insulation-removal",
    imgSrc: "/images/pictures/service7.webp",
    imgAlt: "Service 7",
  },
  {
    name: "Concrete Leveling",
    href: "/services/concrete-leveling",
    imgSrc: "/images/pictures/service8.webp",
    imgAlt: "Service 8",
  },
  {
    name: "Polyurea Coating",
    href: "/services/polyurea-coating",
    imgSrc: "/images/pictures/service9.webp",
    imgAlt: "Service 9",
  },
];

const OurServices = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        <h1>Our Services</h1>
        <div className="services-grid pt-6">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <Image
                src={service.imgSrc}
                alt={service.imgAlt}
                width={300}
                height={200}
                className="service-image"
              />
              <Link href={service.href} passHref>
                <button className="service-btn">{service.name}</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
