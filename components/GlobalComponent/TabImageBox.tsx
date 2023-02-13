import Image from "next/image";
import React from "react";

export const TabImageBox = ({ imgUrl }: any) => {
  return (
    <div className="relative">
      <div className="">
        <img
          src="/assets/images/services/tab-image-shape.svg"
          alt="about image"
          className="absolute"
        />
      </div>

      <div className="relative p-[115px] desktop1440:p-[100px] desktop:p-[60px] tablet:p-[110px] phone:p-[60px]">
        <Image
          src={imgUrl ? imgUrl : "/assets/images/about/01.jpg"}
          width={667.1}
          height={442.65}
          alt="about image"
          className="rounded-[20px] mt-[20px] desktop:mt-[10px] tablet:-ml-[10px] phone:ml-0"
        />
      </div>
    </div>
  );
};
