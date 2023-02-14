import React from "react";

export const HeroSection = () => {
  return (
    <div className="pt-[157px] relative h-[1000px] tablet:h-auto tablet:px-[15px] target:pb-[50px]">
      <div className="relative m-auto max-w-[1100px]">
        <h1 className="relative bigHeader text-center shadowBorder z-20  mb-[40px]">
          {`What's up, fella?`}
        </h1>
        <h1 className="bigHeader text-center gradentTexBottom absolute m-auto left-0 right-0 top-[2px] z-10">
          {`What's up, fella?`}
        </h1>

        <h3 className="heading text-center text-white  !leading-[55px]">
          Welcome to Outrival Media, your go-to squad for all things social
          media.
        </h3>

        <p className="text-white text25 text-center mb-[30px] mt-[50px]">
          {`We're a bunch of Marketing Mavericks based in the heart of Montreal,
          Canada, and we're here to help you dominate the digital landscape.`}
        </p>

        <p className="text-white text25 text-center">
          {`Whether you're a small business just starting out or a big brand
          looking to revamp your social media strategy, we've got you covered.`}
        </p>
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
