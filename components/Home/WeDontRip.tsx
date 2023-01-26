import Image from "next/image";
import React from "react";

export const WeDontRip = () => {
  return (
    <div className="py-[30px] overflow-hidden">
      <div className="flex gap-4 container m-auto justify-between items-center">
        <div className="relative flex-1">
          <div className="">
            <img src="/assets/images/know-box-shadow.png" alt="" />
          </div>
          <div className="absolute top-[150px] right-[150px] rounded-[20px]">
            <Image
              src={"/assets/images/RipImage.jpg"}
              width={537}
              height={780}
              alt="We Know Image"
              className="rounded-[20px]"
            />
          </div>
        </div>
        <div className="flex-1">
          <h2 className="heading text-white mb-[50px]">
            We Don’t{" "}
            <span className="weKnowGradent">
              Rip Your Pants, <br />
              Promising
            </span>{" "}
            You The Brooklyn
            <br /> Bridge
          </h2>

          <div className="relative">
            <h2 className="text-[37px] font-bold text-white">True or False:</h2>
            <div className="mb-[50px]">
              <p className=" text-[25px] text-white font-[400]">
                Marketing companies are ripoff’s…? <br />
                <span className="font-bold">Numbers Don’t Lie.</span> <br />
                Well… ehhh… kind’a, some show great results, some don’t, so its
                kinda’ like a fifety fifety shit-suation
              </p>
            </div>
            <div className="relative">
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

              <div className="absolute -right-[200px] -bottom-[260px]">
                <img
                  src="/assets/images/we-know-arrow.svg"
                  alt=""
                  className="ml-auto "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
