import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Virtual
} from "swiper/core";

import "swiper/swiper-bundle.css";


SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

import "./Carousel.css";
import Prev from "../../../public/prev.svg";


const Carousel = ({
  children,
  loop = true,
  autoPlay = true,
  spaceBetween = 40,
  slidesPerView = 3,
  showButtons = true,
  pagination = true,
  
  ...otherProps
}) => {
  const [activeBtn, setActiveBtn]=useState(false)
  const navigationPrevRef = useRef(null);

  const navigationNextRef = useRef(null);
  const handelActiveClick = () => {
  
    setActiveBtn(!activeBtn)
  }

  return (
    <div
    className="swiper-container"
    style={{ position: "relative", minWidth: 0 }}
  >
    <Swiper
    
      id="swiper"
      virtual
      slidesPerView={3}
      spaceBetween={30}
      navigation ={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current
      }}
      pagination
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
    >
      {children}
      <div style={!showButtons ? { display: "none" } : {}}>
          <button
            type="button"
            className={activeBtn ? 'swiper-btn-prev' : 'swiper-btn-next__active'}
            ref={navigationPrevRef}
            onClick={handelActiveClick}
          >
            <Prev/>
          </button>

          <button
            type="button"
     
            ref={navigationNextRef}
            className={!activeBtn ? 'swiper-btn-next' : 'swiper-btn-next__active'}
            onClick={handelActiveClick}
          >
                <Prev/>
          </button>
        </div>
    </Swiper>
    </div>
  );
}

export default Carousel;