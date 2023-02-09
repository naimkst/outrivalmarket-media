import Image from "next/image";
import React from "react";
import { ImageHeightBox } from "../GlobalComponent/ImageHeightBox";

export const MarketingDirectorSection = () => {
  return (
    <div className="py-[30px] relative ">
      <div className="absolute right-0 tablet:hidden">
        <img src="/assets/images/marketing-shadow.svg" alt="" />
      </div>
      <div className="flex gap-4 container m-auto justify-between items-center tablet:flex-col">
        <div className="flex-1 order-last">
          <h2 className="heading text-white mb-[50px] tablet:text-center">
            As A Marketing Director,{" "}
            <span className="weKnowGradent">
              You Might Not Want To Face It... <br />
            </span>{" "}
          </h2>

          <div className="relative">
            <div>
              <p className=" text-[25px] text-white font-bold mb-[45px]">
                You’re given a budget for marketing that you can spend <br />
                (or must spend I shall say),
              </p>

              <p className=" text-[25px] text-white font-normal mb-[45px] tablet:text-center">
                Billboards and citybus ads are noise, but similar to crying
                babies at a daycare.. Google Ads are great,
              </p>

              <p className=" text-[30px] text-white font-normal mb-[45px] tablet:text-center">
                <span className="font-bold">But here is the punchline.</span>{" "}
                <br />
                Most awareness will come from your social media presence. Dude
                we are in 20 freeken 23,
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ImageHeightBox src="/assets/images/marketing-director.jpg" />
        </div>
      </div>
    </div>
  );
};
