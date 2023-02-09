import Image from "next/image";
import React from "react";
import { BoxImage } from "../GlobalComponent/BoxImage";
import { ImageHeightBox } from "../GlobalComponent/ImageHeightBox";

export const WeDontRip = () => {
  return (
    <div className="py-[30px]">
      <div className="flex gap-4 container m-auto justify-between items-center tablet:flex-col">
        <div className="flex-1">
          <ImageHeightBox src="/assets/images/RipImage.jpg" />
        </div>
        <div className="flex-1">
          <h2 className="heading text-white mb-[50px] tablet:text-center">
            We Don’t{" "}
            <span className="weKnowGradent">Rip Your Pants, Promising</span> You
            The Brooklyn Bridge
          </h2>

          <div className="relative tablet:text-center">
            <h2 className="text37 font-bold text-white">True or False:</h2>
            <div className="mb-[50px]">
              <p className=" text-[25px] text-white font-[400]">
                Marketing companies are ripoff’s…? <br />
                <span className="font-bold">Numbers Don’t Lie.</span> <br />
                Well… ehhh… kind’a, some show great results, some don’t, so its
                kinda’ like a fifety fifety shit-suation
              </p>
            </div>
            <div className="relative tablet:text-left">
              <div className="flex items-start gap-[22px] mb-[25px]">
                <img src="/assets/images/dot.svg" alt="" />
                <p className="text-[25px] font-normal text-white">
                  With Us it wont be that way, don’t see the results we promise
                  you don’t pay us*, and we move on in life..
                </p>
              </div>
              <div className="flex items-start gap-[22px] mb-[25px]">
                <img src="/assets/images/dot.svg" alt="" />
                <p className="text-[25px] font-normal text-white">
                  The proof is in the pudding! Check out Clients feedback here:
                </p>
              </div>

              <div className="absolute -right-[50px] -bottom-[225px] tablet:hidden desktop1440:-right-[0px] desktop1440:-bottom-[150px] desktop:-bottom-[100px] tablet:hidden">
                <img
                  src="/assets/images/we-know-arrow.svg"
                  alt=""
                  className="ml-auto desktop1440:h-[170px]  desktop:h-[120px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
