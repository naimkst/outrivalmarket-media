import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const ThereTwoOptionSection = ({ data }: any) => {
  return (
    <div className="py-[100px] tablet:py-[50px] laptop:py-0">
      <div className="containerSmall m-auto">
        <h2 className="text37 font-['MonumentBold'] text-white  text-center mb-[70px]">
          {data?.Title?.FirstText}
          <br />
          <span className="CTAtextGradean"> {data?.Title?.ColorText}</span>
        </h2>

        <div className="grid grid-cols-2 gap-[25px] tablet:grid-cols-1 tablet:text-center">
          {data?.TwoOptionItem?.map((item: any, index: number) => (
            <div key={`option${index}`} className="bg-[#1C1C1C]">
              <div className="optionBG h-[87px] flex items-center justify-center mb-[50px]">
                <h2 className="text-[34px] text-white font-bold uppercase">
                  {item?.Title}
                </h2>
              </div>
              <h2 className="text-[39px] font['MonumentBold'] font-bold text-center gradientText mb-[44px]">
                {item?.SubTitle}
              </h2>
              <ReactMarkdown className="px-[34px] text25 text-white mb-[67px]">
                {item?.Description}
              </ReactMarkdown>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
