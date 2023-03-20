import { showImage } from "@/helper/helper";
import Image from "next/image";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { ImageHeightBox } from "../GlobalComponent/ImageHeightBox";

export const MarketingDirectorSection = ({ data }: any) => {
  return (
    <div className="py-[30px] relative ">
      <div className="absolute right-0 tablet:hidden">
        <img src="/assets/images/marketing-shadow.svg" alt="" />
      </div>
      <div className="flex gap-4 container m-auto justify-between items-center tablet:flex-col">
        <div className="flex-1 order-last">
          <h2 className="heading text-white mb-[50px] tablet:text-center">
            {data?.Title?.FirstText}{" "}
            <span className="weKnowGradent">
              {data?.Title?.ColorText} <br />
            </span>{" "}
          </h2>

          <div className="relative marketDirector">
            <div>
              <ReactMarkdown>{data?.Description}</ReactMarkdown>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ImageHeightBox src={showImage(data?.Image)} />
        </div>
      </div>
    </div>
  );
};
