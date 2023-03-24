import { showImage } from "@/helper/helper";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { InstagramVideoSection } from "./InstagramVideoSection";

export const Platform = ({ data }: any) => {
  const [platform, setPlatform] = React.useState(0);

  const {
    loading,
    error,
    data: insTagramportfolio,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/portfolios?populate=deep&[filters][VideoType][$eq]=Instagram`
  );

  const instaVideo: any = insTagramportfolio;

  const { data: tiktokPortfolio } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/portfolios?populate=deep&[filters][VideoType][$eq]=TikTok`
  );

  const tiktokVideo: any = tiktokPortfolio;

  return (
    <div className="container m-auto mb-[150px] tablet:mb-[80px]" id="platform">
      <div className="max-w-[978px] m-auto text-center mb-[100px] tablet:mb-[50px]">
        <h2 className="heading gradientText mb-[85px] tablet:mb-[50px]">
          {data?.Title}
        </h2>

        <div className="grid grid-cols-2 divide-x-[1px] divide-[#808589]">
          <div
            onClick={() => setPlatform(0)}
            className="flex items-center gap-[50px] justify-end pr-[70px] tablet:pr-2 tablet:gap-2 cursor-pointer"
          >
            <h2 className="heading text-white !font-bold tablet:text-[17px]">
              Instagram
            </h2>
            <Image
              src={"/assets/images/portfolio/instagram.png"}
              alt="Instagram"
              width={500}
              height={500}
              className="w-[115px] h-[115px] tablet:w-[54px] tablet:h-[54px]"
            />
          </div>

          <div
            onClick={() => setPlatform(1)}
            className="flex items-center gap-[50px] pl-[70px] tablet:pl-2 tablet:gap-2  cursor-pointer"
          >
            <h2 className="heading text-white !font-bold tablet:text-[17px]">
              TikTok
            </h2>
            <Image
              src={"/assets/images/portfolio/tiktok.png"}
              alt="Instagram"
              width={500}
              height={500}
              className="w-[115px] h-[115px] tablet:w-[54px] tablet:h-[54px]"
            />
          </div>
        </div>
      </div>

      {platform === 0 && (
        <div className="grid grid-cols-3 gap-[60px] containerSmall m-auto tablet:grid-cols-2 tablet:gap-3 laptop:gap-3">
          {instaVideo?.data?.map((item: any, index: number) => (
            <Link
              key={`instagram-${index}`}
              href={String(item?.attributes?.Link)}
            >
              <div className="relative h-[494px] object-cover laptop:h-auto">
                <Image
                  src={showImage(item?.attributes?.Image) || ""}
                  alt="video image"
                  width={500}
                  height={500}
                  className="w-[494px] h-[494px] rounded-[20px] laptop:h-auto object-cover"
                />
                <img
                  className="absolute bottom-[37px] left-[42px]  phone:w-[50px] phone:m-auto phone:left-0 phone:right-0 phone:bottom-[55px] laptop:w-[50px] laptop:left-[20px] laptop:bottom-[20px]"
                  src="/assets/images/portfolio/video-play.svg"
                  alt=""
                />
              </div>
            </Link>
          ))}
        </div>
      )}

      {platform === 1 && (
        <div className="grid grid-cols-3 gap-[60px] containerSmall m-auto tablet:grid-cols-2 tablet:gap-3 laptop:gap-3">
          {tiktokVideo?.data?.map((item: any, index: number) => (
            <Link key={`tiktok-${index}`} href={String(item?.attributes?.Link)}>
              <div className="relative h-[494px] laptop:h-auto object-cover">
                <Image
                  src={showImage(item?.attributes?.Image) || ""}
                  alt="video image"
                  width={500}
                  height={500}
                  className="w-[494px] h-[494px] rounded-[20px] laptop:h-auto object-cover"
                />
                <img
                  className="absolute bottom-[37px] left-[42px]  phone:w-[50px] phone:m-auto phone:left-0 phone:right-0 phone:bottom-[55px] laptop:w-[50px] laptop:left-[20px] laptop:bottom-[20px]"
                  src="/assets/images/portfolio/video-play.svg"
                  alt=""
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
