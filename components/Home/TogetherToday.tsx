import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const TogetherToday = ({ data }: any) => {
  return (
    <div className="togetherToday containerSmall m-auto py-[53px] text-center my-[80px] overflow-x-hidden ">
      <div>
        <h2 className="text37 font-['MonumentBold'] text-white mb-[34px]">
          {data?.Title?.FirstText}
        </h2>
        <p className="text-[25px] text-white mb-[34px]">
          <ReactMarkdown>{data?.Description}</ReactMarkdown>
        </p>
        <Link href={String(data?.ButtonUrl)}>
          <button className="text-[20px] font-bold text-white h-[70px] px-[40px] border-[1px] rounded-[10px]">
            {data?.ButtonText}
          </button>
        </Link>
      </div>
    </div>
  );
};
