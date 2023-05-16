import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const ZtimeSection = ({ data, ugc }: any) => {
  return (
    <div className="mt-[30px] mb-[60px]">
      <div className="container m-auto">
        <div className="w-[867px] h-[404px] m-auto bg-[#1C1C1C] flex items-center flex-col gap-[34px] justify-center px-[37px] mb-[150px] tablet:w-full tablet:text-center tablet:h-auto tablet:py-[60px] tablet:px-[15px]">
          <h2 className="weKnowGradent heading text-white">
            {data?.Title?.FirstText}
          </h2>
          <p className="text25 text-white text-center">{data?.Description}</p>
        </div>
        {ugc?.map((item: any, index: number) =>
          index % 2 === 0 ? (
            <div
              key={`ucs${index}`}
              className="flex justify-between items-center pb-[60px] pt-[60px] tablet:flex-col tablet:text-center gap-[50px] borderBottomGredient"
            >
              <div className="flex-1">
                <h2 className="heading text-white">
                  {item?.Title}
                  <span className="weKnowGradent"> {item?.ColorText}</span>
                </h2>
              </div>
              <div className="flex-1">
                <ReactMarkdown className="text25 text-white">
                  {item?.Description}
                </ReactMarkdown>
              </div>
            </div>
          ) : (
            <div
              key={`ucs${index}`}
              className="flex justify-between items-center pb-[60px] pt-[60px] tablet:flex-col tablet:text-center gap-[50px] borderBottomGredient"
            >
              <div className="flex-1 tablet:order-last">
                <ReactMarkdown className="text25 text-white">
                  {item?.Description}
                </ReactMarkdown>
              </div>
              <div className="flex-1">
                <h2 className="heading text-white">
                  {item?.Title}
                  <span className="weKnowGradent"> {item?.ColorText}</span>
                </h2>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
