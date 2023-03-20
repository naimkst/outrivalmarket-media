import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const HeroSection = ({ data }: any) => {
  return (
    <div className="pt-[157px] relative h-[1000px] tablet:h-auto tablet:px-[15px] target:pb-[50px]">
      <div className="relative m-auto max-w-[1100px]">
        <h1 className="relative bigHeader text-center shadowBorder z-20  mb-[40px]">
          {data?.Title}
        </h1>
        <h1 className="bigHeader text-center gradentTexBottom absolute m-auto left-0 right-0 top-[2px] z-10">
          {data?.Title}
        </h1>

        <h3 className="heading text-center text-white  !leading-[55px]">
          {data?.SubTitle}
        </h3>

        <ReactMarkdown className="text-white text25 text-center mb-[30px] mt-[50px]">
          {data?.Description}
        </ReactMarkdown>
      </div>
      <div className="absolute left-0 top-10 tablet:bottom-4 tablet:top-auto">
        <img
          src="/assets/images/about/about-hero-shape.svg"
          alt=""
          className="tablet:w-[150px]"
        />
      </div>
      <div className="absolute right-0 bottom-20 tablet:hidden">
        <img src="/assets/images/about/about-hero-right-shape.svg" alt="" />
      </div>
    </div>
  );
};
