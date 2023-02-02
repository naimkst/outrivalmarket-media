import React from "react";

export const HeroSection = () => {
  return (
    <div className="pt-[157px] relative h-[850px]">
      <div className="relative m-auto">
        <h1 className="relative bigHeader text-center shadowBorder z-20  mb-[40px]">
          YOUR LOCAL <br />
          MONTRÉAL UGC
          <br />
          CREATIVE AGENCY
        </h1>
        <h1 className="bigHeader text-center gradentTexBottom absolute m-auto left-0 right-0 top-[2px] z-10">
          YOUR LOCAL <br />
          MONTRÉAL UGC
          <br />
          CREATIVE AGENCY
        </h1>
      </div>
      <div className="absolute left-0 bottom-36">
        <img src="/assets/images/services/hero-start-shape.svg" alt="" />
      </div>
      <div className="absolute left-0 bottom-0">
        <img src="/assets/images/services/hero-shape.svg" alt="" />
      </div>
    </div>
  );
};
