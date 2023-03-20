import { showImage } from "@/helper/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BookCoverSection = ({ data }: any) => {
  return (
    <div className="py-[100px] container m-auto tablet:py-[50px]">
      <div className="grid grid-cols-2 items-center tablet:grid-cols-1">
        <div className="text-center tablet:order-last">
          <h2 className="text-[45.59px] leading-[59.1px] text-white font-['MonumentBold'] tablet:text-[32px]">
            {data?.Title}
          </h2>
          <Link href={String(data?.ButtonUrl)}>
            <button className="buttonText">{data?.ButtonText}</button>
          </Link>
        </div>
        <div>
          <Image
            src={showImage(data?.Image) || ""}
            width={712}
            height={932}
            alt="Book Cover"
          />
        </div>
      </div>
    </div>
  );
};
