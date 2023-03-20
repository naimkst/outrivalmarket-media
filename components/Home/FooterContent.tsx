import { showImage } from "@/helper/helper";
import Image from "next/image";
import React from "react";

export const FooterContent = ({ data }: any) => {
  return (
    <div className="container m-auto text-center py-[50px]  overflow-x-hidden">
      <div>
        <Image
          src={showImage(data?.Image)}
          alt="footer logo"
          width={330.57}
          height={218}
          className="m-auto mb-[80px]"
        />
        <p className="text-[25px] text-white text-center max-w-[1214px] m-auto">
          {data?.Description}
        </p>
      </div>
    </div>
  );
};
