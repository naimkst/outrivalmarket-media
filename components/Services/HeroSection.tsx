import React from "react";

export const HeroSection = () => {
  return (
    <div className="pt-[157px] relative h-[850px] tablet:h-auto">
      <div className="relative m-auto max-w-[70%] tablet:max-w-full">
        <h1 className="relative bigHeader text-center shadowBorder z-20  mb-[40px]">
          YOUR LOCAL MONTRÉAL UGC CREATIVE AGENCY
        </h1>
        <h1 className="bigHeader text-center gradentTexBottom absolute m-auto left-0 right-0 top-[2px] z-10">
          YOUR LOCAL MONTRÉAL UGC CREATIVE AGENCY
        </h1>
      </div>
      <div className="absolute left-0 bottom-36 tablet:hidden">
        <img src="/assets/images/services/hero-start-shape.svg" alt="" />
      </div>
      <div className="absolute left-0 bottom-0  tablet:hidden">
        <img src="/assets/images/services/hero-shape.svg" alt="" />
      </div>
    </div>
  );
};
