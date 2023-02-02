import Image from "next/image";
import React from "react";

export const InstagramVideoSection = () => {
  return (
    <div className="container m-auto py-[150px]">
      <div className="grid grid-cols-2">
        <div className="relative h-[580px]">
          <Image
            src={"/assets/images/portfolio/portfolio-img-shape.png"}
            alt="--"
            width={728}
            height={699}
            className=""
          />
          <Image
            src={"/assets/images/portfolio/instagram-video.jpg"}
            alt="--"
            width={728}
            height={699}
            className="rounded-[20px] absolute top-[80px] left-[80px] w-[570px]"
          />
          <img
            src={"/assets/images/portfolio/video-play.svg"}
            alt="--"
            className=" absolute bottom-[0px] left-[110px]"
          />
        </div>

        <div>
          <h2 className="heading text-white mb-[52px]">
            Instagram Video:
            <span className="weKnowGradent"> Holiday 2023 Halloween</span>.
          </h2>

          <p className="text25 !font-bold text-white mb-[12px]">
            Scope of Project
          </p>
          <p className="text25 text-white mb-[52px]">
            Included model, kitchen studio, video editing
          </p>
          <h2 className="text25 !font-bold text-white mb-[44px]">
            Timeline:
            <span className="weKnowGradent"> 3 weeks</span>
          </h2>
          <p className="text25 !font-bold text-white mb-[35px]">
            Let’s work together:
          </p>
          <button className=" relative text-[24px] font-semibold text-center h-[70px] px-[45px] buttonGredean text-white mb-[50px]">
            Click Here
          </button>

          <p className="text25 text-white mb-[21px]">Tags</p>

          <p className="text25 !font-bold text-white mb-[12px]">
            #Holidays #Halloween #Instagram #2023 💪
          </p>
        </div>
      </div>
    </div>
  );
};
