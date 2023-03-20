import React from "react";

export const HeroSection = ({ data }: any) => {
  return (
    <div className="pt-[157px] relative h-[1130px] overflow-x-hidden tablet:h-[100vh]">
      <div className="relative max-w-[1175px] m-auto ">
        <h1 className="relative bigHeader text-center shadowBorder z-20">
          {data?.FirstText} <br />{" "}
          <span className="bigHeraderGradient">{data?.ColorText}</span> <br />{" "}
          {data?.SecondText}
        </h1>
        <h1 className="bigHeader text-center gradentTexBottom absolute m-auto left-0 right-0 top-[2px] z-10">
          {data?.FirstText} <br />{" "}
          <span className="bigHeraderGradient">{data?.ColorText}</span> <br />{" "}
          {data?.SecondText}
        </h1>
      </div>

      <div className="absolute right-0 bottom-0">
        <img src="/assets/images/hero-right-shape.svg" alt="" />
      </div>
      <div className="absolute left-0 bottom-0  tablet:hidden">
        <img src="/assets/images/hero-shape.svg" alt="" />
      </div>
    </div>
  );
};
