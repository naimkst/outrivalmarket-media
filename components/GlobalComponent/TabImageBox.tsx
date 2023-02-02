import Image from "next/image";
import React from "react";

export const TabImageBox = ({ imgUrl }: any) => {
  return (
    <div className="relative">
      <div>
        <Image
          src="/assets/images/services/tab-image-shape.svg"
          width={777.5}
          height={550}
          alt="about image"
          className="w-[923px] relative"
        />
      </div>

      <Image
        src={imgUrl ? imgUrl : "/assets/images/about/01.jpg"}
        width={667.1}
        height={442.65}
        alt="about image"
        className="rounded-[20px] absolute top-[120px] left-[105px] w-[520px] "
      />
    </div>
  );
};
