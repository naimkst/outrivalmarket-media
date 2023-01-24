import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export const SliderSection = () => {
  return (
    <div className="py-[50px] container m-auto">
      <Swiper
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active",
          bulletElement: "span",
        }}
        navigation={{}}
        modules={[Navigation, Pagination]}
        className="mySwiper instagram-slider"
        autoHeight={true}
        freeMode={true}
        onActiveIndexChange={(e) => console.log(e)}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        slidesPerView={4}
      >
        <SwiperSlide className="">
          <div className="relative">
            <Image
              src={"/assets/images/instagram/instagram01.svg"}
              height={677.72}
              width={416.79}
              alt="Instagram"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="relative">
            <Image
              src={"/assets/images/instagram/instagram02.svg"}
              height={677.72}
              width={416.79}
              alt="Instagram"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="relative">
            <Image
              src={"/assets/images/instagram/instagram03.svg"}
              height={677.72}
              width={416.79}
              alt="Instagram"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="relative">
            <Image
              src={"/assets/images/instagram/instagram04.svg"}
              height={677.72}
              width={416.79}
              alt="Instagram"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide className="">
          <div className="relative">
            <Image
              src={"/assets/images/instagram/instagram01.svg"}
              height={677.72}
              width={416.79}
              alt="Instagram"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
