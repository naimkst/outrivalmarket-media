import Image from "next/image";
import React from "react";

export const FeelSocialSection = () => {
  return (
    <div className="relative container m-auto rounded-[20px] text-center z-50 tablet:max-w-full tablet:m-0 tablet:p-0">
      <div className="aboutBackground tablet:px-[15px] laptop:px-[10px]">
        <div className="py-[70px] max-w-[1214px] m-auto">
          <h2 className=" text-white text-[37px] font-extrabold font-['MonumentBold']">
            Feel that your social media can be booming, but just don’t know how?
          </h2>

          <p className="text-[25px] text-white font-bold mt-[22px]">
            Perhaps you’ve tried some DYI social media video ads but <br /> they
            get minimal views.. shares..
          </p>
          <p className="text-white text-[25px] font-normal mt-[22px]">
            Hey you’ve come across the guys to help y’all out! <br /> We have
            managed to get crazy watch-through rates with our <br /> videos,
            like almost magically.. <br />
            See here what we are talkin about!
          </p>
          <div className="mt-[50px] flex gap-[18px] tablet:flex-col desktop:px-[15px]">
            <div className="relative">
              <img
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                src="/assets/images/play.svg"
                alt=""
              />
              <Image
                src={"/assets/images/social01.jpg"}
                alt="social image"
                width={636}
                height={352}
                className="rounded-[20px] tablet:m-auto"
              />
            </div>

            <div className="relative">
              <img
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                src="/assets/images/play.svg"
                alt=""
              />
              <Image
                src={"/assets/images/social02.jpg"}
                alt="social image"
                width={636}
                height={352}
                className="rounded-[20px] tablet:m-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
