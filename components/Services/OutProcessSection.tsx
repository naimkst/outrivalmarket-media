import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const OurProcessSection = ({ data, cta }: any) => {
  return (
    <div className="relative h-auto pb-[100px] ">
      <img
        src="/assets/images/hero-shape.svg"
        alt=""
        className="absolute left-0 top-10 laptop:hidden"
      />
      <img
        src="/assets/images/marketing-shadow.svg"
        alt=""
        className="absolute right-0 bottom-10 laptop:hidden"
      />
      <div className="container m-auto py-[50px] ">
        <div className="text-center pb-[100px]">
          <h2 className="text-[37px] font-['MonumentBold'] text-white mb-[40px]">
            {data?.Title?.FirstText}{" "}
            <span className="CTAtextGradean"> {data?.Title?.ColorText}</span>
          </h2>

          <ReactMarkdown className="text-[25px] font-normal text-white mb-[30px]">
            {data?.Subtitle}
          </ReactMarkdown>
        </div>

        <div className="relative max-w-[1476px] m-auto laptop:max-w-auto">
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 ">
            <img
              src="/assets/images/services/prcess-shape.svg"
              alt="process"
              className="laptop:hidden"
            />
          </div>

          {data?.ProcessItem?.map((item: any, index: number) =>
            index == 0 ? (
              <div
                key={`process-${index}`}
                className="flex justify-end laptop:flex-none laptop:text-center laptop:mb-[50px] laptop:flex-col"
              >
                <div className="flex-1"></div>
                <div className="max-w-[456px] pl-[60px] laptop:max-w-full laptop:pl-0">
                  <img
                    src="/assets/images/process/01.png"
                    alt=""
                    className="mb-[47px] laptop:m-auto laptop:mb-[20px]"
                  />
                  <h3 className="text-[25px] font-bold text-white mb-[15px]">
                    {item?.Title}
                  </h3>
                  <p className="text-[25px] font-normal text-white">
                    {item?.Description}
                  </p>
                </div>
              </div>
            ) : index == 1 ? (
              <div
                key={`process-${index}`}
                className="flex justify-start laptop:flex-none laptop:text-center laptop:mb-[50px]"
              >
                <div className="max-w-[456px] pl-[68px] laptop:max-w-full laptop:pl-0">
                  <img
                    src="/assets/images/process/02.png"
                    alt=""
                    className="mb-[47px] laptop:m-auto laptop:mb-[20px]"
                  />
                  <h3 className="text-[25px] font-bold text-white mb-[15px]">
                    {item?.Title}
                  </h3>
                  <p className="text-[25px] font-normal text-white">
                    {item?.Description}
                  </p>
                </div>
                <div className="flex-1"></div>
              </div>
            ) : index == 2 ? (
              <div
                key={`process-${index}`}
                className="flex justify-end -mt-[50px] laptop:mt-0 laptop:flex-none laptop:mb-[50px] laptop:text-center laptop:flex-col"
              >
                <div className="flex-1"></div>
                <div className="max-w-[456px] pl-[60px] laptop:max-w-full laptop:pl-0">
                  <img
                    src="/assets/images/process/03.png"
                    alt=""
                    className="mb-[47px] laptop:m-auto laptop:mb-[20px]"
                  />
                  <h3 className="text-[25px] font-bold text-white mb-[15px]">
                    {item?.Title}
                  </h3>
                  <p className="text-[25px] font-normal text-white">
                    {item?.Description}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={`process-${index}`}
                className="flex justify-start  pl-[68px] laptop:flex-col laptop:pl-0 laptop:text-center"
              >
                <div className="max-w-[456px] laptop:max-w-full">
                  <img
                    src="/assets/images/process/04.png"
                    alt=""
                    className="mb-[47px] laptop:m-auto laptop:mb-[20px]"
                  />
                  <h3 className="text-[25px] font-bold text-white mb-[15px]">
                    {item?.Title}
                  </h3>
                  <p className="text-[25px] font-normal text-white">
                    {item?.Description}
                  </p>
                </div>
                <div className="flex-1"></div>
              </div>
            )
          )}
        </div>
      </div>

      {cta?.IsShow && (
        <div className="containerSmall bg-[#0A131A] rounded-[20px] text-center py-[53px] mt-[100px] laptop:mt-[50px] laptop:rounded-none">
          <h2 className="heading gradientText mb-[34px]">
            {cta?.Title?.FirstText}
          </h2>

          <ReactMarkdown className="text25 text-white mb-[25px]">
            {cta?.Description}
          </ReactMarkdown>
          <Link href={String(cta?.ButtonUrl)}>
            <button className="buttonText">
              {cta?.ButtonText}
              <img
                src="/assets/images/services/arrow.svg"
                alt=""
                className="absolute -right-[100px] -top-[70px] laptop:hidden"
              />
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
