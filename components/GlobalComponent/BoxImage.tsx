import Image from "next/image";
import React from "react";

export const BoxImage = ({ imgUrl }: any) => {
  return (
    <div className="relative tablet:mb-[50px] tablet:mt-[50px]">
      <div className="absolute z-10">
        <img
          src="/assets/images/about/image-shape.png"
          alt="about image"
          className=""
        />
      </div>

      <div className="relative z-20 tablet:pb-[50px] p-[120px] desktop1440:p-[90px] laptop:p-[60px] tablet:p-[100px] phone:p-[50px]">
        <Image
          src={imgUrl ? imgUrl : "/assets/images/about/01.jpg"}
          width={766.67}
          height={596.47}
          alt="about image"
          className="rounded-[20px]"
        />
      </div>
    </div>
  );
};
