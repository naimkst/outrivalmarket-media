import Image from "next/image";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const OurProcessSection = ({ data }: any) => {
  return (
    <div className="relative h-auto pb-[350px] laptop:pb-0">
      <img
        src="/assets/images/hero-shape.svg"
        alt=""
        className="absolute left-0 top-10 laptop:hidden"
      />
      <img
        src="/assets/images/marketing-shadow.svg"
        alt=""
        className="absolute right-0 bottom-10  laptop:hidden"
      />
      <div className="container m-auto py-[50px] ">
        <div className="text-center pb-[100px] laptop:pb-[50x]">
          <h2 className="text-[37px] font-['MonumentBold'] text-white mb-[40px]">
            {data?.Title?.FirstText}{" "}
            <span className="CTAtextGradean"> {data?.Title?.ColorText}</span>
          </h2>
          <p className="text-[25px] font-normal text-white mb-[30px]">
            <ReactMarkdown>{data?.Subtitle}</ReactMarkdown>
          </p>
        </div>

        <div className="relative max-w-[1393px] m-auto h-[1943px] laptop:h-auto">
          <Image
            src="/assets/images/process/process-point.svg"
            alt="process"
            className="absolute top-[53%] left-[44%] transform -translate-x-1/2 -translate-y-1/2  laptop:hidden"
            height={1943}
            width={482}
          />
          {data?.ProcessItem?.slice(0, 6).map((item: any, index: number) =>
            index == 0 ? (
              <div className="flex justify-end laptop:flex-col laptop:text-center">
                <div className="flex-1"></div>
                <div className="max-w-[456px] pl-[60px] laptop:max-w-full laptop:pl-0">
                  <img
                    src="/assets/images/process/01.png"
                    alt=""
                    className="mb-[47px] laptop:m-auto laptop:mb-5"
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
              <div className="flex justify-start mt-[60px]">
                <div className="max-w-[456px] pl-[68px] laptop:max-w-full laptop:pl-0  laptop:text-center">
                  <img
                    src="/assets/images/process/02.png"
                    alt=""
                    className="mb-[47px] laptop:m-auto laptop:mb-5"
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
              <div className="flex justify-end mt-[40px] laptop:flex-col">
                <div className="flex-1"></div>
                <div className="max-w-[456px] pl-[60px] laptop:max-w-full laptop:pl-0  laptop:text-center">
                  <img
                    src="/assets/images/process/03.png"
                    alt=""
                    className="mb-[47px] laptop:m-auto laptop:mb-5"
                  />
                  <h3 className="text-[25px] font-bold text-white mb-[15px]">
                    {item?.Title}
                  </h3>
                  <p className="text-[25px] font-normal text-white">
                    {item?.Description}
                  </p>
                </div>
              </div>
            ) : index == 3 ? (
              <div className="flex justify-start mt-[45px] laptop:flex-col laptop:mb-[50px]">
                <div className="max-w-[456px]  laptop:max-w-full laptop:pl-0  laptop:text-center">
                  <img
                    src="/assets/images/process/04.png"
                    alt=""
                    className="mb-[47px] laptop:m-auto laptop:mb-5"
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
            ) : index == 4 ? (
              <div className="flex justify-end mt-[110px] laptop:justify-start laptop:flex-col laptop:mt-0 laptop:mb-[50px]">
                <div className="flex-1"></div>
                <div className="max-w-[456px] pl-[60px] laptop:max-w-full laptop:pl-0  laptop:text-center">
                  <img
                    src="/assets/images/process/05.png"
                    alt=""
                    className="mb-[47px] laptop:m-auto laptop:mb-5"
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
              <div className="flex justify-start mt-[110px] laptop:flex-col laptop:mt-0">
                <div className="max-w-[456px] laptop:max-w-full laptop:pl-0  laptop:text-center">
                  <img
                    src="/assets/images/process/06.png"
                    alt=""
                    className="mb-[47px] laptop:m-auto laptop:mb-5"
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
    </div>
  );
};
