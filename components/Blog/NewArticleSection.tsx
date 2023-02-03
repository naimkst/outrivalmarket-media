import Image from "next/image";
import React from "react";

export const NewArticleSection = () => {
  return (
    <div className="pt-[0px]">
      <div className="blogContainer !p-0">
        <h2 className="heading gradientText mb-[34px]">New Articles</h2>
        <div className="grid grid-cols-2 gap-[30px] mt-[70px] ">
          <div className="grid grid-cols-2 gap-0 relative">
            <div className="relative">
              <Image
                src={"/assets/images/blog/04.jpg"}
                alt=""
                width={700}
                height={700}
                className="h-full w-[350px] object-cover rounded-[20px] absolute top-0 left-0 z-20"
              />
            </div>

            <div className="bg-[#0C151C] relative z-10 -ml-10 rounded-r-[20px]">
              <div className="px-[20px] pt-[40px] ml-10">
                <div className="flex justify-between items-center mb-[20px]">
                  <span className="h-[27px] bg-[#328BF2] text-white px-[25px] rounded-full text-[15.57px] font-normal flex items-center">
                    TikTok
                  </span>
                </div>
                <h3 className="text-[22.62px] font-medium text-white mb-[20px]">
                  How Scrambled Text by Cicero Became the Standard For
                  Typesetters Everywhere
                </h3>
                <p className="text[18px] text-white">
                  Conveniently network quality catalysts for change before
                  economically sound initiatives.{" "}
                </p>
              </div>

              <div className="flex justify-between mt-[25px] pb-[30px] items-center pl-[20px] ml-10">
                <p className="text-white text-[12.74px]">
                  Published On <span className="font-bold"> 30 June</span>
                </p>
                <button className="text-white first-letter text-[11.31px]  bg-[#5E6469] inline-block w-[89px] h-[37px] rounded-l-full text-center">
                  Read Now
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-0 relative">
            <div className="relative">
              <Image
                src={"/assets/images/blog/05.jpg"}
                alt=""
                width={700}
                height={700}
                className="h-full w-[350px] object-cover rounded-[20px] absolute top-0 left-0 z-20"
              />
            </div>

            <div className="bg-[#0C151C] relative z-10 -ml-10 rounded-r-[20px]">
              <div className="px-[20px] pt-[40px] ml-10">
                <div className="flex justify-between items-center mb-[20px]">
                  <span className="h-[27px] bg-[#328BF2] text-white px-[25px] rounded-full text-[15.57px] font-normal flex items-center">
                    TikTok
                  </span>
                </div>
                <h3 className="text-[22.62px] font-medium text-white mb-[20px]">
                  How Scrambled Text by Cicero Became the Standard For
                  Typesetters Everywhere
                </h3>
                <p className="text[18px] text-white">
                  Conveniently network quality catalysts for change before
                  economically sound initiatives.{" "}
                </p>
              </div>

              <div className="flex justify-between mt-[25px] pb-[30px] items-center pl-[20px] ml-10">
                <p className="text-white text-[12.74px]">
                  Published On <span className="font-bold"> 30 June</span>
                </p>
                <button className="text-white first-letter text-[11.31px]  bg-[#5E6469] inline-block w-[89px] h-[37px] rounded-l-full text-center">
                  Read Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
