import { showImage } from "@/helper/helper";
import React from "react";
import { BoxImage } from "../GlobalComponent/BoxImage";

export const AboutSection = ({ data }: any) => {
  return (
    <div className="container m-auto mb-[0px] tablet:mt-[80px]">
      <div className="grid grid-cols-2 items-center justify-between tablet:grid-cols-1">
        <div className=" relative tablet:text-center">
          <h2 className="text48 text-white">
            {data?.Title?.FirstText}
            <span className="weKnowGradent">{data?.Title?.ColorText}</span>
          </h2>
        </div>

        <div className="">
          <BoxImage imgUrl={showImage(data?.Image)} />
        </div>
      </div>
    </div>
  );
};
