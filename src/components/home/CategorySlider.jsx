import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/autoplay";
import "../../styles/CategorySlider.css";

const bannerImages = [
  "/CategorySlider/Banner.webp",
  "/CategorySlider/Floor-Lamps.webp",
  "/CategorySlider/Table_Lamps_Web_Banner.webp",
  "/CategorySlider/Table-Lamps.webp",
  "/CategorySlider/Table_Lamps_Web_Banner.webp"
];

const categoryItems = [
  { image: "/CategorySlider/Banner.webp", title: "Table Lamps" },
  { image: "/CategorySlider/Floor-Lamps.webp", title: "Floor Lamps" },
  { image: "/CategorySlider/Table_Lamps_Web_Banner.webp", title: "Study Lamps" },
  { image: "/CategorySlider/Table-Lamps.webp", title: "Crystal Lamps" },
  { image: "/CategorySlider/Table_Lamps_Web_Banner.webp", title: "Lamp Shades" },
];

const CategorySlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full">
      {/* Top Banner Slider */}
      <Swiper
        modules={[Autoplay, Thumbs]}
        thumbs={{ swiper: thumbsSwiper }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-[350px] rounded-xl"
      >
        {bannerImages.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Banner ${index}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Thumbnail Navigation */}
      <div className="mt-3 mb-2 flex justify-center">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          watchSlidesProgress
          slidesPerView={categoryItems.length}
          spaceBetween={12}
          className="w-auto my-thumb-slider"
        >
          {categoryItems.map((item, index) => (
            <SwiperSlide key={index} className="!w-auto text-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-7 h-7 rounded-full object-cover transition-all duration-200"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CategorySlider;
