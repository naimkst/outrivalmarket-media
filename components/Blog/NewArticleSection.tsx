import { showImage } from "@/helper/helper";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const NewArticleSection = ({ data, title }: any) => {
  return (
    <div className="pt-[0px] tablet:px-[15px] tablet:py-[50px] laptop:mx-[15px] tablet:mx-0">
      <div className="blogContainer !p-0">
        <h2 className="heading gradientText mb-[34px] tablet:text-center">
          {title}
        </h2>
        <div className="grid grid-cols-2 gap-[30px] mt-[70px] tablet:grid-cols-1">
          {data?.map((item: any, index: number) => (
            <div
              key={`newart${index}`}
              className="grid grid-cols-2 gap-0 relative tablet:grid-cols-1"
            >
              <div className="relative tablet:order-first">
                <Image
                  src={showImage(item?.attributes?.Thumbnail) || ""}
                  alt=""
                  width={700}
                  height={700}
                  className="h-full w-[350px] object-cover rounded-[20px] absolute top-0 left-0 z-20 tablet:relative tablet:w-full"
                />
              </div>

              <div className="bg-[#0C151C] relative z-10 -ml-10 rounded-r-[20px] tablet:ml-0 tablet:rounded-[20px] tablet:-mt-[30px] tablet:z-30">
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
