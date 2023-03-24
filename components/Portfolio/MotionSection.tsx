import { showImage } from "@/helper/helper";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import React from "react";
import { SlArrowDown } from "react-icons/sl";
import { TabImageBox } from "../GlobalComponent/TabImageBox";

const healthBeauty = [
  "/assets/images/portfolio/06.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/02.jpg",
  "/assets/images/portfolio/03.jpg",
  "/assets/images/portfolio/04.jpg",
  "/assets/images/portfolio/06.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/02.jpg",
];

export const MotionSection = ({ data }: any) => {
  const [tabActive, setTabActive] = React.useState(0);
  const [itemLimit, setItemLimit] = React.useState(6);
  const {
    loading,
    error,
    data: portfolio,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/portfolios?populate=deep&[filters][VideoType][$eq]=StillMotion`
  );
  const portfolioList: any = portfolio;

  const isActive = (id: number) => {
    setTabActive(id);
    setItemLimit(6);
  };
  const loadMore = () => {
    setItemLimit(itemLimit + 6);
  };
  return (
    <div className="relative">
      <div className="containerSmall m-auto tablet:p-0">
        <div className="relative text-center">
          <h2 className="heading gradientText mb-[85px] tablet:mb-[50px]">
            {data?.Title}
          </h2>
        </div>

        <div className="containerSmall m-auto !p-0 ">
          <div className="grid grid-cols-3 gap-[60px] m-auto tablet:grid-cols-2 tablet:gap-2 tablet:px-[15px] laptop:gap-3">
            {portfolioList?.data
              ?.slice(0, itemLimit)
              .map((item: any, index: number) => (
                <div
                  key={`tabContent${index}`}
                  className="relative h-[494px] laptop:h-auto object-cover"
                >
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
              ))}
          </div>

          <div className="mt-28">
            <p className="text25 text-white text-center mb-5">See More</p>
            <div
              onClick={() => loadMore()}
              className="w-[140px] h-[140px] bg-[#1B242B] m-auto flex items-center justify-center rounded-full"
            >
              <SlArrowDown size={46} color="#fff" />
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute right-0 -top-[280px] tablet:hidden"
        src="/assets/images/marketing-shadow.svg"
        alt=""
      />
    </div>
  );
};
