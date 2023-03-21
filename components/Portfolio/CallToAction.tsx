import Link from "next/link";
import React from "react";

export const CallToAction = ({ data }: any) => {
  return (
    <div className="containerSmall bg-[#0A131A] rounded-[20px] text-center py-[53px] mt-[100px]">
      <h2 className="heading gradientText mb-[34px]">
        {data?.Title?.FirstText}
      </h2>

      <p className="text25 text-white mb-[25px]">{data?.Description}</p>
      <div className="relative">
        <Link href={String(data?.ButtonUrl)}>
          <button className="buttonText">
            {data?.ButtonText}
            {/* <img
            src="/assets/images/services/arrow.svg"
            alt=""
            className="absolute -right-[100px] -top-[70px] tablet:hidden"
          /> */}
          </button>
        </Link>
      </div>
    </div>
  );
};
