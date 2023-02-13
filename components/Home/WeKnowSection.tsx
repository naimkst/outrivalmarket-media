import Image from "next/image";
import React from "react";

export const WeKnowSection = () => {
  return (
    <div className="py-[30px] overflow-x-hidden">
      <div className="flex gap-4 container m-auto justify-between items-center tablet:grid tablet:grid-cols-1">
        <div className="flex-1 tablet:order-last">
          <h2 className="heading text-white mb-[50px] tablet:text-center">
            We Know <span className="weKnowGradent">Multi-Media Marketing</span>{" "}
            Out Right Cold’ Because That’s What We Do.
          </h2>

          <div className="relative">
            <h2 className="text37 font-bold text-white tablet:text-center">
              How?
            </h2>
            <div>
              <p className=" text-[25px] text-white font-[400] tablet:text-center">
                Shhh.. It’s A Secret, Otherwise We Would Be Reaching Out To You!{" "}
                <br />
                <span className="font-bold">Numbers Don’t Lie.</span> <br />
                See Some Of The Staggering Results We Managed Off For Our Lovely
                Clients:
              </p>
              <div className="tablet:hidden">
                <img
                  src="/assets/images/we-know-arrow.svg"
                  alt=""
                  className="-mt-0 ml-[150px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="absolute z-10">
            <img
              src="/assets/images/know-box-shadow.png"
              alt=""
              className="phone:hidden"
            />
            <img
              src="/assets/images/responsive/image-box-shape.png"
              alt=""
              className="hidden phone:block"
            />
          </div>
          <div className="relative z-20 tablet:pb-[50px]">
            <Image
              src={"/assets/images/we-know-image.svg"}
              width={537}
              height={780}
              alt="We Know Image"
              className="rounded-[20px] w-[100%] p-[150px] desktop1440:p-[120px] desktop:p-[110px] miniLaptop:p-[85px] tablet:p-[135px] phone:p-[50px] phone:mt-[90px]"
            />
          </div>
          <div className="w-[220px] h-[125px] bg-white rounded-[8px] px-[26px] py-[17px] absolute top-[200px] tablet:hidden z-30">
            <div className="flex gap-3 mb-2">
              <Image
                src={"/assets/images/user.svg"}
                height={22}
                width={22}
                alt="user"
              />
              <p className="text-[16px] text-[#B4B4B4]">Reach</p>
            </div>
            <div className="flex gap-3 mb-2">
              <p className="text-[24px] leading-[115%] font-semibold text-[#3F3F3F]">
                186.25k
              </p>
              <Image
                src="/assets/images/chart.svg"
                alt="chat"
                width={61}
                height={17}
              />
            </div>
            <div className="flex gap-3">
              <p className="text-[20px] text-[#490796] leading-[115%] font-semibold">
                3.2%
              </p>
              <p className="text-[18px] text-[#B4B4B4] leading-[115%] font-normal">
                vs last week
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
