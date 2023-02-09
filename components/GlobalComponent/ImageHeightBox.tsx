import Image from "next/image";
import React from "react";

export const ImageHeightBox = ({ src }: any) => {
  return (
    <div>
      <div className="relative flex-1">
        <div className="absolute z-10">
          <img
            src="/assets/images/know-box-shadow.png"
            alt=""
            className="phone:hidden"
          />
          <img
            src="/assets/images/responsive/image-box-shape.png"
            alt=""
            className="hidden phone:block"
          />
        </div>
        <div className="relative z-20 tablet:pb-[150px] rounded-[20px] p-[150px] desktop1440:p-[120px] desktop:p-[105px] laptop:p-[85px] tablet:p-[135px] phone:p-[50px]">
          <Image
            src={src ? src : "/assets/images/RipImage.jpg"}
            width={800}
            height={10}
            alt="We Know Image"
            className="rounded-[20px]  phone:mt-[90px]"
          />
        </div>
      </div>
    </div>
  );
};
