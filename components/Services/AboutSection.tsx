import React from "react";
import { BoxImage } from "../GlobalComponent/BoxImage";

export const AboutSection = () => {
  return (
    <div className="container m-auto mb-[0px]">
      <div className="grid grid-cols-2 items-center justify-between">
        <div className=" relative">
          <h2 className="text48 text-white">
            Working with local <br />
            brands is
            <span className="weKnowGradent">
              our expertise <br /> And privilege!
            </span>
            .
          </h2>
        </div>

        <div className="">
          <BoxImage imgUrl="/assets/images/services/services01.jpg" />
        </div>
      </div>
    </div>
  );
};
