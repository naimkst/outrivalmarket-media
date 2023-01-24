import Image from "next/image";
import React from "react";

export const MarketingDirectorSection = () => {
  return (
    <div className="py-[30px] relative">
      <div className="absolute right-0">
        <img src="/assets/images/marketing-shadow.svg" alt="" />
      </div>
      <div className="flex gap-4 container m-auto justify-between items-center">
        <div className="flex-1">
          <h2 className="heading text-white mb-[50px]">
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

              <p className=" text-[25px] text-white font-normal mb-[45px]">
                Billboards and citybus ads are noise, but similar to crying
                babies at a daycare.. Google Ads are great,
              </p>

              <p className=" text-[30px] text-white font-normal mb-[45px]">
                <span className="font-bold">But here is the punchline.</span>{" "}
                <br />
                Most awareness will come from your social media presence. Dude
                we are in 20 freeken 23,
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex-1">
          <div className="">
            <img src="/assets/images/know-box-shadow.png" alt="" />
          </div>
          <div className="absolute top-[150px] right-[150px] rounded-[20px]">
            <Image
              src={"/assets/images/marketing-director.jpg"}
              width={537}
              height={780}
              alt="We Know Image"
              className="rounded-[20px]"
            />
          </div>
          {/* <div className="w-[220px] h-[125px] bg-white rounded-[8px] px-[26px] py-[17px] absolute top-[200px]">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};
