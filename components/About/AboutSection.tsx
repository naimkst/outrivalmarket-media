import { showImage } from "@/helper/helper";
import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BoxImage } from "../GlobalComponent/BoxImage";

export const AboutSection = ({ data }: any) => {
  return (
    <div className="container m-auto mb-[69px]">
      {data?.map(
        (item: any, index: number) =>
          item.IsShow &&
          (index % 2 === 0 ? (
            <div className="grid grid-cols-2 items-center mb-[100px] tablet:grid-cols-1">
              <div>
                <BoxImage imgUrl={showImage(item?.Image) || ""} />
              </div>
              <div className="flex justify-end tablet:text-center">
                <div className="max-w-[743px]">
                  <ReactMarkdown className="text-white text25 mb-[50px]">
                    {item?.Content}
                  </ReactMarkdown>
                </div>
                {item?.ButtonText && (
                  <Link href={String(item?.ButtonLink)}>
                    <button className="buttonText">{item.ButtonText}</button>
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 items-center justify-between tablet:grid-cols-1">
              <div className="max-w-[743px] relative tablet:text-center">
                <ReactMarkdown className="text-white text25 mb-[50px]">
                  {item?.Content}
                </ReactMarkdown>
                <img
                  src="/assets/images/about/about-arrow.svg"
                  alt=""
                  className="absolute left-[310px] bottom-[35px]"
                />
                {item?.ButtonText && (
                  <Link href={String(item?.ButtonLink)}>
                    <button className="buttonText">{item.ButtonText}</button>
                  </Link>
                )}
              </div>

              <div className="tablet:order-first">
                <BoxImage imgUrl={showImage(item?.Image) || ""} />
              </div>
            </div>
          ))
      )}
    </div>
  );
};
