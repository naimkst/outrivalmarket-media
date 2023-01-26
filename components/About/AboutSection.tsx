import React from "react";
import { BoxImage } from "../GlobalComponent/BoxImage";

export const AboutSection = () => {
  return (
    <div className="container m-auto">
      <div className="grid grid-cols-2 items-center">
        <div>
          <BoxImage imgUrl="/assets/images/about/01.jpg" />
        </div>
        <div>
          <p className="text-white text25 mb-[50px]">
            Our team is made up of a diverse group of creative minds and
            marketing experts who know how to make your brand stand out. We're a
            group of passionate individuals who are dedicated to helping
            businesses and brands achieve their social media goals.
          </p>
          <p className="text-white text25">
            Our team is made up of a diverse group of creative minds and
            marketing experts who know how to make your brand stand out. We're a
            group of passionate individuals who are dedicated to helping
            businesses and brands achieve their social media goals.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 items-center">
        <div className=" max-w-[743px] relative">
          <p className="text-white text25 mb-[50px]">
            We'll not only manage your social media platforms, but we'll also
            whip up some killer UGC and original content to make your brand
            stand out from the rest. From crafting captivating captions to
            creating visually stunning stop-motion videos, we have the skills
            and expertise to elevate your social media presence.
          </p>
          <p className="text-white text25">
            Let’s work together to create a cohesive visual identity that aligns
            with your brand values and resonates with your target audience.
          </p>
          <img
            src="/assets/images/about/about-arrow.svg"
            alt=""
            className="absolute left-[310px] bottom-[35px]"
          />
          <button className="text-[24px] font-semibold text-center py-[20px] px-[45px] buttonGredean text-white mt-[72px]">
            Connect with us here
          </button>
        </div>

        <div>
          <BoxImage imgUrl="/assets/images/about/02.jpg" />
        </div>
      </div>
    </div>
  );
};
