import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./styles.scss";
import { Navigation } from "swiper/modules";

const SliderHero = () => {
  return (
    <div className="mainSlider">
      <div className="info">
        <h1>HELLO WE'RE BizPro</h1>
        <h6>Sub Head, Motto or Mission subtitle</h6>
        <a class="project-button hvr-bounce-to-right">See Our Projects</a>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/bizpro/images/home/slide-1.jpg.webp"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://preview.colorlib.com/theme/bizpro/images/home/slide-2.jpg.webp"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SliderHero;
