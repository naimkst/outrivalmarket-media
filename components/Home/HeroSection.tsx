import React from "react";

export const HeroSection = () => {
  return (
    <div className="pt-[157px] relative h-[1130px]">
      <div className="relative container m-auto ">
        <h1 className="relative bigHeader text-center shadowBorder z-20">
          Approach <br /> Marketing From A <br />{" "}
          <span className="bigHeraderGradient">Multi-Dimensional</span> <br />{" "}
          Direction
        </h1>
        <h1 className="bigHeader text-center gradentTexBottom absolute m-auto left-0 right-0 top-[2px] z-10">
          Approach <br /> Marketing From A <br />{" "}
          <span className="bigHeraderGradient">Multi-Dimensional</span> <br />{" "}
          Direction
        </h1>
      </div>

      <div className="absolute right-0 bottom-0">
        <img src="/assets/images/hero-right-shape.svg" alt="" />
      </div>
      <div className="absolute left-0 bottom-0">
        <img src="/assets/images/hero-shape.svg" alt="" />
      </div>
    </div>
  );
};
