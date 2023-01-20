import Image from "next/image";
import React from "react";

export const WeKnowSection = () => {
  return (
    <div className="py-[30px]">
      <div className="grid grid-cols-2 gap-4 container m-auto justify-between items-center">
        <div>
          <h2 className="heading text-white mb-[50px]">
            We Know{" "}
            <span className="weKnowGradent">
              Multi-Media <br />
              Marketing
            </span>{" "}
            Out Right Cold’
            <br /> Because That’s What We Do.
          </h2>

          <div className="relative">
            <h2 className="text-[37px] font-bold text-white">How?</h2>
            <div>
              <p className=" text-[25px] text-white font-[400]">
                Shhh.. It’s A Secret, Otherwise We Would Be Reaching Out To You!{" "}
                <br />
                <span className="font-bold">Numbers Don’t Lie.</span> <br />
                See Some Of The Staggering Results We Managed Off For Our Lovely
                Clients:
              </p>
              <div className="">
                <img
                  src="/assets/images/we-know-arrow.svg"
                  alt=""
                  className="-mt-14 ml-[150px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="">
            <img src="/assets/images/know-box-shadow.png" alt="" />
          </div>
          <div className="absolute top-[125px] right-[125px] rounded-[20px]">
            <img
              src={"/assets/images/we-know-image.svg"}
              width="500px"
              alt="We Know Image"
            />
          </div>
          <div className="w-[220px] h-[125px] bg-white rounded-[8px] px-[26px] py-[17px] absolute top-[180px]">
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
