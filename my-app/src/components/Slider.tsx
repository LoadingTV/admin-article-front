import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

interface SliderProps {
  images: string[];
}

const Slider: React.FC<SliderProps> = ({ images }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <img src={img} alt={`Slide ${index}`} className="slider-image" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
