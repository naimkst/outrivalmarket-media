import Image from "next/image";
import React from "react";

export const BoxImage = ({ imgUrl }: any) => {
  return (
    <div className="relative">
      <div>
        <Image
          src="/assets/images/about/image-shape.svg"
          width={923}
          height={715}
          alt="about image"
          className="w-[923px] relative"
        />
      </div>

      <Image
        src={imgUrl ? imgUrl : "/assets/images/about/01.jpg"}
        width={766.67}
        height={596.47}
        alt="about image"
        className="rounded-[20px] absolute top-[120px] left-[120px] w-[620px]"
      />
    </div>
  );
};
