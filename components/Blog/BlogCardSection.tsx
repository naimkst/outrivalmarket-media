import { showImage } from "@/helper/helper";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const BlogCardSection = ({ data, blogs }: any) => {
  return (
    <div className="pt-[150px] tablet:pt-[70px] laptop:mx-[15px] tablet:mx-0">
      <div className="blogContainer !p-0 tablet:mx-[15px]">
        {data?.map((item: any, index: number) => (
          <div
            key={`blogcard${index}`}
            className="grid grid-cols-2 gap-0 relative tablet:grid-cols-1"
          >
            <div className="relative -ml-10 target:order-last tablet:ml-0">
              <Image
                src={showImage(item?.attributes?.Thumbnail) || ""}
                alt=""
                width={700}
                height={700}
                className="h-full w-[710px] object-cover rounded-l-[20px] absolute top-0 left-0 z-10 ml-10 tablet:relative tablet:rounded-[20px] tablet:m-auto tablet:w-full tablet:ml-0 tablet:h-[400px]"
              />
            </div>
            <div className="bg-[#0C151C] rounded-[20px] relative z-20 tablet:-mt-[30px]">
              <div className="px-[40px] pt-[40px]">
                <div className="flex justify-between items-center mb-[58px]">
                  <span className="h-[27px] bg-[#FEA800] text-white px-[25px] rounded-full text-[15.57px] font-normal flex items-center">
                    {item?.attributes?.blog_category?.data?.attributes?.Title}
                  </span>
                  <p className="text-white text-[12.74px]">
                    Published On{" "}
                    <span className="font-bold">
                      {" "}
                      {moment(item?.attributes?.publishedAt).format(
                        "MMM Do YY"
                      )}
                    </span>
                  </p>
                </div>
                <h3 className="text-[28.31px] font-medium text-white mb-[50px]">
                  {item?.attributes?.Title}
                </h3>
                <p className="text[18px] text-white">
                  {item?.attributes?.Description?.substring(0, 90)}
                  ...
                </p>
              </div>

              <div className="flex justify-end mt-[25px] pb-[35px]">
                <Link href={`/blog/${item?.id}`}>
                  <button className="text-white first-letter text-[11.31px]  bg-[#5E6469] inline-block w-[89px] h-[37px] rounded-l-full text-center">
                    Read Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
        <div className="grid grid-cols-2 gap-[30px] mt-[70px] tablet:grid-cols-1">
          {blogs?.map((item: any, index: number) => (
            <div
              key={`blog${index}`}
              className="grid grid-cols-2 gap-0 relative tablet:grid-cols-1"
            >
              <div className="relative target:order-last">
                <Image
                  src={showImage(item?.attributes?.Thumbnail) || ""}
                  alt=""
                  width={700}
                  height={700}
                  className="h-full w-[350px] object-cover rounded-[20px] absolute top-0 left-0 z-20 tablet:relative tablet:w-full "
                />
              </div>

              <div className="bg-[#0C151C] relative z-10 -ml-10 tablet:ml-0 tablet:rounded-[20px] tablet:-mt-[30px] tablet:z-30">
                <div className="px-[20px] pt-[40px] ml-10">
                  <div className="flex justify-between items-center mb-[20px]">
                    <span className="h-[27px] bg-[#328BF2] text-white px-[25px] rounded-full text-[15.57px] font-normal flex items-center">
                      {item?.attributes?.blog_category?.data?.attributes?.Title}
                    </span>
                  </div>
                  <h3 className="text-[22.62px] font-medium text-white mb-[20px]">
                    {item?.attributes?.Title}
                  </h3>
                  <p className="text[18px] text-white">
                    {item?.attributes?.Description?.substring(0, 70)}
                    ...
                  </p>
                </div>

                <div className="flex justify-between mt-[25px] pb-[30px] items-center pl-[20px] ml-10">
                  <p className="text-white text-[12.74px]">
                    Published On{" "}
                    <span className="font-bold">
                      {" "}
                      {moment(item?.attributes?.publishedAt).format(
                        "MMM Do YY"
                      )}
                    </span>
                  </p>
                  <Link href={`/blog/${item?.id}`}>
                    <button className="text-white first-letter text-[11.31px]  bg-[#5E6469] inline-block w-[89px] h-[37px] rounded-l-full text-center">
                      Read Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
