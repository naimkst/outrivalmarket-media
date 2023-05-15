import { showImage } from "@/helper/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const FeelSocialSection = ({ data }: any) => {
  return (
    <div className="relative container m-auto rounded-[20px] text-center z-50 tablet:max-w-full tablet:m-0 tablet:p-0 mt-[250px]">
      <div className="aboutBackground tablet:px-[15px] laptop:px-[10px]">
        <div className="py-[70px] max-w-[1214px] m-auto">
          <h2 className=" text-white text-[37px] font-extrabold font-['MonumentBold']">
            {data?.Title}
          </h2>

          <p className="text-[25px] text-white font-bold mt-[22px]">
            {data?.SubTitle}
          </p>
          <p className="text-white text-[25px] font-normal mt-[22px]">
            <ReactMarkdown>{data?.Description}</ReactMarkdown>
          </p>
          <div className="mt-[50px] flex gap-[18px] tablet:flex-col desktop:px-[15px]">
            {data?.FeelSocialVideo?.map((item: any, index: number) => (
              <Link key={`fell-${index}`} href={String(item?.Link)}>
                <div className="relative">
                  <img
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                    src="/assets/images/play.svg"
                    alt=""
                  />
                  <Image
                    src={showImage(item?.Image) || ""}
                    alt="social image"
                    width={636}
                    height={352}
                    className="rounded-[20px] tablet:m-auto"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
