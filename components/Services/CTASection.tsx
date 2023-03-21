import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const CTASection = ({ data }: any) => {
  return (
    <div className="mt-[150px] relative tablet:mt-[50px]">
      <div className="w-[867px] h-[404px] m-auto bg-[#1C1C1C] flex items-center flex-col gap-[34px] justify-center px-[37px] mb-[150px] z-10 relative tablet:w-full tablet:h-auto tablet:py-[50px] tablet:text-center tablet:mb-[50px] tablet:px-[15px]">
        <h2 className="weKnowGradent heading text-white">
          {data?.Title?.FirstText}
        </h2>

        <ReactMarkdown className="text25 text-white text-center">
          {data?.Description}
        </ReactMarkdown>
      </div>
      <img
        src="/assets/images/services/cta-shape.svg"
        alt=""
        className="absolute left-0 bottom-[120px] z-0"
      />
    </div>
  );
};
