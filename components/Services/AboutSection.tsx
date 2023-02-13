import React from "react";
import { BoxImage } from "../GlobalComponent/BoxImage";

export const AboutSection = () => {
  return (
    <div className="container m-auto mb-[0px] tablet:mt-[80px]">
      <div className="grid grid-cols-2 items-center justify-between tablet:grid-cols-1">
        <div className=" relative tablet:text-center">
          <h2 className="text48 text-white">
            Working with local brands is
            <span className="weKnowGradent">our expertise And privilege!</span>.
          </h2>
        </div>

        <div className="">
          <BoxImage imgUrl="/assets/images/services/services01.jpg" />
        </div>
      </div>
    </div>
  );
};
