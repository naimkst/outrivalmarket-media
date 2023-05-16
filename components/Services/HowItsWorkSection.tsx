import { showImage } from "@/helper/helper";
import Image from "next/image";
import React from "react";

export const HowItsWorkSection = ({ data }: any) => {
  return (
    <div className="py-[80px] tablet:py-[50px]">
      <div className="container m-auto">
        <h2 className="text37 font-['MonumentBold'] text-white  text-center mb-[70px] tablet:mb-[30px]">
          {data?.Title?.FirstText}{" "}
          <span className="CTAtextGradean"> {data?.Title?.ColorText}</span>
        </h2>
      </div>

      <div className="h-[914px] relative container tablet:h-auto laptop:h-full">
        <img
          src="/assets/images/services/how-work-shape.svg"
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tablet:hidden desktop:hidden"
        />
        {data?.WorkItem?.map((item: any, index: number) =>
          index == 0 ? (
            <div
              key={`howitwork${index}`}
              className="grid grid-cols-2 justify-center m-auto mb-[70px] pt-[30px] desktop:grid-cols-1"
            >
              <div className="flex-1  max-w-[446px] flex justify-center text-center m-auto desktop:max-w-full laptop:order-last">
                <p className="text-[28px] text-white text-center">
                  {item?.Title}
                </p>
              </div>
              <div className="flex-1 laptop:mb-[20px]">
                <Image
                  src={showImage(item?.Image) || ""}
                  alt="{item?.Title}"
                  width={180}
                  height={180}
                  className="m-auto -mt-[40px]"
                />
              </div>
            </div>
          ) : index == 1 ? (
            <div
              key={`howitwork${index}`}
              className="grid grid-cols-2 justify-center m-auto mb-[70px] laptop:grid-cols-1"
            >
              <div className="flex-1 laptop:mb-[20px]">
                <Image
                  src={showImage(item?.Image) || ""}
                  alt="{item?.Title}"
                  width={180}
                  height={180}
                  className="m-auto -mt-[30px]"
                />
              </div>

              <div className="flex-1  max-w-[476px] flex justify-center text-center m-auto laptop:max-w-full">
                <p className="text-[28px] text-white text-center">
                  {item?.Title}
                </p>
              </div>
            </div>
          ) : index == 2 ? (
            <div
              key={`howitwork${index}`}
              className="grid grid-cols-2 justify-center m-auto mb-[70px] laptop:mb-[40px] pt-[10px] laptop:grid-cols-1 laptop:pt-0"
            >
              <div className="flex-1  max-w-[446px] flex justify-center text-center m-auto laptop:max-w-full laptop:order-last">
                <p className="text-[28px] text-white text-center">
                  {item?.Title}
                </p>
              </div>
              <div className="flex-1 laptop:mb-[20px]">
                {" "}
                <Image
                  src={showImage(item?.Image) || ""}
                  alt="{item?.Title}"
                  width={180}
                  height={180}
                  className="m-auto -mt-[40px]"
                />
              </div>
            </div>
          ) : (
            <div
              key={`howitwork${index}`}
              className="grid grid-cols-2 justify-center m-auto mb-[70px] desktop:grid-cols-1"
            >
              <div className="flex-1 laptop:mb-[20px]">
                {" "}
                <Image
                  src={showImage(item?.Image) || ""}
                  alt="{item?.Title}"
                  width={180}
                  height={180}
                  className="m-auto -mt-[0px]"
                />
              </div>

              <div className="flex-1  max-w-[476px] flex justify-center text-center m-auto  desktop:max-w-full">
                <p className="text-[28px] text-white text-center">
                  {item?.Title}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
