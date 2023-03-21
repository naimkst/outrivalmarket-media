import Link from "next/link";
import React from "react";
import { SlArrowDown } from "react-icons/sl";

export const HeroSection = ({ data }: any) => {
  return (
    <div className="pt-[157px] relative pb-[190px] tablet:pb-[80px] z-0">
      <div className="relative m-auto max-w-[1440px] mb-[200px] tablet:mb-[60px]">
        <h1 className="relative bigHeader text-center shadowBorder z-20  mb-[40px]">
          {data?.Title}
        </h1>
        <h1 className="bigHeader text-center gradentTexBottom absolute m-auto left-0 right-0 top-[2px] z-10">
          {data?.Title}
        </h1>
      </div>
      <div className="w-[140px] h-[140px] bg-[#1B242B] m-auto flex items-center justify-center rounded-full cursor-pointer">
        <a href="#platform">
          <SlArrowDown size={46} color="#fff" />
        </a>
      </div>

      <div className="tablet:hidden">
        <div className="absolute left-0 bottom-[-215px]">
          <img src="/assets/images/portfolio/hero-section-shape.svg" alt="" />
        </div>
        <div className="absolute right-0 bottom-[-650px]">
          <img src="/assets/images/portfolio/hero-section-shape2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
