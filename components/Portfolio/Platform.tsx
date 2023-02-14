import Image from "next/image";
import React from "react";
import { InstagramVideoSection } from "./InstagramVideoSection";

export const Platform = () => {
  const [platform, setPlatform] = React.useState(0);
  return (
    <div className="container m-auto mb-[150px] tablet:mb-[80px]">
      <div className="max-w-[978px] m-auto text-center mb-[100px] tablet:mb-[50px]">
        <h2 className="heading gradientText mb-[85px] tablet:mb-[50px]">
          Platform
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
        <div className="grid grid-cols-3 gap-[60px] containerSmall m-auto tablet:grid-cols-2 tablet:gap-3">
          <div className="relative h-[494px] tablet:h-auto">
            <Image
              src={"/assets/images/portfolio/01.jpg"}
              alt="video image"
              width={500}
              height={500}
              className="w-[494px] h-[494px] rounded-[20px] tablet:h-auto"
            />
            <img
              className="absolute bottom-[37px] left-[42px]  tablet:w-[50px] tablet:m-auto tablet:left-0 tablet:right-0 tablet:bottom-[55px]"
              src="/assets/images/portfolio/video-play.svg"
              alt=""
            />
          </div>

          <div className="relative h-[494px] tablet:h-auto">
            <Image
              src={"/assets/images/portfolio/02.jpg"}
              alt="video image"
              width={500}
              height={500}
              className="w-[494px] h-[494px] rounded-[20px] tablet:h-auto"
            />
            <img
              className="absolute bottom-[37px] left-[42px] tablet:w-[50px] tablet:m-auto tablet:left-0 tablet:right-0 tablet:bottom-[55px]"
              src="/assets/images/portfolio/video-play.svg"
              alt=""
            />
          </div>

          <div className="relative h-[494px] tablet:h-auto">
            <Image
              src={"/assets/images/portfolio/03.jpg"}
              alt="video image"
              width={500}
              height={500}
              className="w-[494px] h-[494px] rounded-[20px] tablet:h-auto"
            />
            <img
              className="absolute bottom-[37px] left-[42px]  tablet:w-[50px] tablet:m-auto tablet:left-0 tablet:right-0 tablet:bottom-[55px]"
              src="/assets/images/portfolio/video-play.svg"
              alt=""
            />
          </div>

          <div className="relative h-[494px] tablet:h-auto">
            <Image
              src={"/assets/images/portfolio/04.jpg"}
              alt="video image"
              width={500}
              height={500}
              className="w-[494px] h-[494px] rounded-[20px] tablet:h-auto"
            />
            <img
              className="absolute bottom-[37px] left-[42px]  tablet:w-[50px] tablet:m-auto tablet:left-0 tablet:right-0 tablet:bottom-[55px]"
              src="/assets/images/portfolio/video-play.svg"
              alt=""
            />
          </div>

          <div className="relative h-[494px] tablet:h-auto">
            <Image
              src={"/assets/images/portfolio/05.jpg"}
              alt="video image"
              width={500}
              height={500}
              className="w-[494px] h-[494px] rounded-[20px] tablet:h-auto"
            />
            <img
              className="absolute bottom-[37px] left-[42px]  tablet:w-[50px] tablet:m-auto tablet:left-0 tablet:right-0 tablet:bottom-[55px]"
              src="/assets/images/portfolio/video-play.svg"
              alt=""
            />
          </div>

          <div className="relative h-[494px] tablet:h-auto">
            <Image
              src={"/assets/images/portfolio/06.jpg"}
              alt="video image"
              width={500}
              height={500}
              className="w-[494px] h-[494px] rounded-[20px] tablet:h-auto"
            />
            <img
              className="absolute bottom-[37px] left-[42px]  tablet:w-[50px] tablet:m-auto tablet:left-0 tablet:right-0 tablet:bottom-[55px]"
              src="/assets/images/portfolio/video-play.svg"
              alt=""
            />
          </div>
        </div>
      )}

      {platform === 1 && (
        <div className="grid grid-cols-3 gap-[60px] containerSmall m-auto tablet:grid-cols-2 tablet:gap-3">
          <div className="relative h-[494px] tablet:h-auto">
            <Image
              src={"/assets/images/portfolio/06.jpg"}
              alt="video image"
              width={500}
              height={500}
              className="w-[494px] h-[494px] rounded-[20px] tablet:h-auto"
            />
            <img
              className="absolute bottom-[37px] left-[42px]  tablet:w-[50px] tablet:m-auto tablet:left-0 tablet:right-0 tablet:bottom-[55px]"
              src="/assets/images/portfolio/video-play.svg"
              alt=""
            />
          </div>
          <div className="relative h-[494px] tablet:h-auto">
            <Image
              src={"/assets/images/portfolio/01.jpg"}
              alt="video image"
              width={500}
              height={500}
              className="w-[494px] h-[494px] rounded-[20px] tablet:h-auto"
            />
            <img
              className="absolute bottom-[37px] left-[42px]  tablet:w-[50px] tablet:m-auto tablet:left-0 tablet:right-0 tablet:bottom-[55px]"
              src="/assets/images/portfolio/video-play.svg"
              alt=""
            />
          </div>

          <div className="relative h-[494px] tablet:h-auto">
            <Image
              src={"/assets/images/portfolio/05.jpg"}
              alt="video image"
              width={500}
              height={500}
              className="w-[494px] h-[494px] rounded-[20px] tablet:h-auto"
            />
            <img
              className="absolute bottom-[37px] left-[42px]  tablet:w-[50px] tablet:m-auto tablet:left-0 tablet:right-0 tablet:bottom-[55px]"
              src="/assets/images/portfolio/video-play.svg"
              alt=""
            />
          </div>
          <div className="relative h-[494px] tablet:h-auto">
            <Image
              src={"/assets/images/portfolio/02.jpg"}
              alt="video image"
              width={500}
              height={500}
              className="w-[494px] h-[494px] rounded-[20px] tablet:h-auto"
            />
            <img
              className="absolute bottom-[37px] left-[42px]  tablet:w-[50px] tablet:m-auto tablet:left-0 tablet:right-0 tablet:bottom-[55px]"
              src="/assets/images/portfolio/video-play.svg"
              alt=""
            />
          </div>

          <div className="relative h-[494px] tablet:h-auto">
            <Image
              src={"/assets/images/portfolio/03.jpg"}
              alt="video image"
              width={500}
              height={500}
              className="w-[494px] h-[494px] rounded-[20px] tablet:h-auto"
            />
            <img
              className="absolute bottom-[37px] left-[42px]  tablet:w-[50px] tablet:m-auto tablet:left-0 tablet:right-0 tablet:bottom-[55px]"
              src="/assets/images/portfolio/video-play.svg"
              alt=""
            />
          </div>

          <div className="relative h-[494px] tablet:h-auto">
            <Image
              src={"/assets/images/portfolio/04.jpg"}
              alt="video image"
              width={500}
              height={500}
              className="w-[494px] h-[494px] rounded-[20px] tablet:h-auto"
            />
            <img
              className="absolute bottom-[37px] left-[42px]  tablet:w-[50px] tablet:m-auto tablet:left-0 tablet:right-0 tablet:bottom-[55px]"
              src="/assets/images/portfolio/video-play.svg"
              alt=""
            />
          </div>
        </div>
      )}
    </div>
  );
};
