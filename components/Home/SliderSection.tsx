import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { showImage } from "@/helper/helper";

export const SliderSection = ({ data }: any) => {
  return (
    <div className="py-[50px] container m-auto overflow-x-hidden">
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
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1279: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1366: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        spaceBetween={30}
        slidesPerView={4}
      >
        {data?.Image?.data?.map((item: any, index: number) => (
          <SwiperSlide className="">
            <div className="relative">
              <Image
                className="tablet:m-auto"
                src={showImage(item, true) || ""}
                height={677.72}
                width={416.79}
                alt="Instagram"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
