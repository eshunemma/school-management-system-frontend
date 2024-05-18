import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./HomeSwiper.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/sch-imgs/img-1.jpg" alt="ima" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sch-imgs/img-1.jpg" alt="ima" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sch-imgs/img-2.jpg" alt="img2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sch-imgs/img-3.jpg" alt="img2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/sch-imgs/img-4.jpg" alt="img2" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
