import Link from "next/link";
import React from "react";

export const CallToAction = ({ data }: any) => {
  return (
    <div className="container m-auto text-center py-[50px] overflow-x-hidden">
      <div>
        <h2 className="text-[37px] font-['MonumentBold'] text-white mb-[40px]">
          {data?.Title?.FirstText}{" "}
          <span className="CTAtextGradean"> {data?.Title?.ColorText}</span>
        </h2>
        <p className="text-[25px] font-bold text-white mb-[40px]">
          {data?.Description}
        </p>
        <Link href={String(data?.ButtonUrl)}>
          <button className="CTAtextGradean text-[20px] font-bold border-[1px] py-[20px] px-[40px] rounded-[10px]">
            {data?.ButtonText}
          </button>
        </Link>
      </div>
    </div>
  );
};
