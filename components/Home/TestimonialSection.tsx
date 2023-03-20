import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import useFetch from "@/hooks/useFetch";

export const TestimonialSection = () => {
  const {
    loading,
    error,
    data: home,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials?populate=deep`);
  const data: any = home;
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
            spaceBetween: 16,
          },
          425: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          1025: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1278: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
        spaceBetween={16}
        slidesPerView={3}
      >
        {data?.data?.map((item: any, index: number) => (
          <SwiperSlide key={`testimonial${index}`} className="">
            <div className="relative py-[55px] px-[34px] testimonialBorder tablet:px-[10px] min-h-[520px]">
              <Image
                src={"/assets/images/testimonial-shap.svg"}
                height={25.47}
                width={42.6}
                alt="Instagram"
                className="mb-[38px]"
              />
              <p className="text-[26px] text-white font-normal tablet:text-center">
                {item?.attributes?.Description}
              </p>

              <div className="mt-[60px] flex justify-between items-center">
                <div className="flex gap-[25px] items-center tablet:gap-4 flex-1">
                  <Image
                    src={"/assets/images/RipImage.jpg"}
                    alt="testimonial image"
                    width={63.9}
                    height={63.9}
                    className="rounded-full width={63.9}
                  h-[63.9px] w-[63.9px] object-cover testimonialBorderGrediant"
                  />
                  <div>
                    <h3 className="text-white text-[20px] font-extrabold leading-[159.1%]">
                      {item?.attributes?.Name}
                    </h3>
                    <p className="text-[14px] text-white font-thin">
                      {item?.attributes?.Designation}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[5.63px] flex-1">
                  {[...Array(item?.attributes?.Rating)].map(
                    (item: any, index: number) => (
                      <Image
                        src={"/assets/images/start.svg"}
                        width={23.21}
                        height={22}
                        alt="start"
                      />
                    )
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
