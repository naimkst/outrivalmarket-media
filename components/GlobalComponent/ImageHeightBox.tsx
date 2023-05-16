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
            className="phone:hidden w-[85%] m-auto"
          />
          <img
            src="/assets/images/responsive/image-box-shape.png"
            alt=""
            className="hidden phone:hidden w-[82%] m-auto"
          />
        </div>
        <div className="relative z-20 tablet:pb-[150px] rounded-[20px] p-0 desktop1440:p-0 desktop:p-[105px] laptop:p-0 tablet:p-0 phone:p-0">
          <Image
            src={src ? src : "/assets/images/RipImage.jpg"}
            width={800}
            height={10}
            alt="We Know Image"
            className="rounded-[20px] "
          />
        </div>
      </div>
    </div>
  );
};
