import Image from "next/image";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BoxImage } from "../GlobalComponent/BoxImage";
import { ImageHeightBox } from "../GlobalComponent/ImageHeightBox";
import { showImage } from "@/helper/helper";

export const WeDontRip = ({ data }: any) => {
  console.log(data, "data");
  return (
    <div className="py-[30px]">
      <div className="flex gap-4 container m-auto justify-between items-center tablet:flex-col">
        <div className="flex-1">
          <ImageHeightBox src={showImage(data?.Image)} />
        </div>
        <div className="flex-1 phone:mt-[30px]">
          <h2 className="heading text-white mb-[50px] tablet:text-center">
            {data?.SectionTitle?.FirstText}{" "}
            <span className="weKnowGradent">
              {data?.SectionTitle?.ColorText}
            </span>{" "}
            {data?.SectionTitle?.SecondText}
          </h2>

          <div className="relative tablet:text-center promiseSection">
            <div className="mb-[50px]">
              {" "}
              <ReactMarkdown>{data?.Description}</ReactMarkdown>
            </div>
            <div className="relative tablet:text-left">
              {data?.PromiseList?.map((item: any, index: number) => (
                <div
                  key={`promises-${index}`}
                  className="flex items-start gap-[22px] mb-[25px]"
                >
                  <img src="/assets/images/dot.svg" alt="" />
                  <p className="text-[25px] font-normal text-white">
                    {item?.Title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
