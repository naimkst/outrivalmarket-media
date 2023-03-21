import Link from "next/link";
import React from "react";

export const NotSureSection = ({ data }: any) => {
  return (
    <div className="relative py-[150px] tablet:py-[80px] tablet:px-[15px]">
      <div className="max-w-[789px] m-auto text-center tablet:max-w-full">
        <h2 className="heading text-white mb-[34px]">
          {data?.Title?.FirstText}
        </h2>
        <p className="text25 !font-bold text-white mb-[40px]">
          {data?.Description}
        </p>

        <Link href={String(data?.ButtonUrl)}>
          <button className="buttonText">{data?.ButtonText}</button>
        </Link>
      </div>
      <img
        className="absolute right-0 -top-[0px] tablet:hidden"
        src="/assets/images/marketing-shadow.svg"
        alt=""
      />
    </div>
  );
};
