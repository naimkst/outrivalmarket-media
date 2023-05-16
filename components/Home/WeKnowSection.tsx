import { showImage } from "@/helper/helper";
import Image from "next/image";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ImageHeightBox } from "../GlobalComponent/ImageHeightBox";

export const WeKnowSection = ({ data }: any) => {
  return (
    <div className="py-[30px] ">
      <div className="flex gap-4 container m-auto justify-between  tablet:grid tablet:grid-cols-1">
        <div className="flex-1 tablet:order-last">
          <h2 className="heading text-white mb-[50px] tablet:text-center">
            {data?.FirstTitle}{" "}
            <span className="weKnowGradent">{data?.ColorTitle}</span>{" "}
            {data?.SecondTitle}
          </h2>

          <div className="relative weknow">
            <div>
              <ReactMarkdown>{`${data?.Description}`}</ReactMarkdown>
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
          <div className="relative z-20 tablet:pb-[50px] rounded-[20px]">
            <ImageHeightBox src={showImage(data?.Image)} />
          </div>
          <div className="w-[220px] h-[125px] bg-white rounded-[8px] px-[26px] py-[17px] absolute top-[200px] tablet:hidden z-30">
            <div className="flex gap-3 mb-2">
              <Image
                src={"/assets/images/user.svg"}
                height={22}
                width={22}
                alt="user"
              />
              <p className="text-[16px] text-[#B4B4B4]">{data?.ReachText}</p>
            </div>
            <div className="flex gap-3 mb-2">
              <p className="text-[24px] leading-[115%] font-semibold text-[#3F3F3F]">
                {data?.ReachValue}
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
                {data?.VatPercentage}
              </p>
              <p className="text-[18px] text-[#B4B4B4] leading-[115%] font-normal">
                {data?.VatText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
