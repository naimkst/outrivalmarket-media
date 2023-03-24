import { showImage } from "@/helper/helper";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
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

const lifestyle = [
  "/assets/images/portfolio/04.jpg",
  "/assets/images/portfolio/06.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/06.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/02.jpg",
  "/assets/images/portfolio/03.jpg",
  "/assets/images/portfolio/02.jpg",
];

const nature = [
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/02.jpg",
  "/assets/images/portfolio/03.jpg",
  "/assets/images/portfolio/04.jpg",
  "/assets/images/portfolio/06.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/06.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/02.jpg",
];

const localMontreal = [
  "/assets/images/portfolio/04.jpg",
  "/assets/images/portfolio/06.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/02.jpg",
  "/assets/images/portfolio/03.jpg",
  "/assets/images/portfolio/06.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/02.jpg",
];

const products = [
  "/assets/images/portfolio/04.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/02.jpg",
  "/assets/images/portfolio/03.jpg",
  "/assets/images/portfolio/06.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/02.jpg",
  "/assets/images/portfolio/06.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/01.jpg",
];

const services = [
  "/assets/images/portfolio/04.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/02.jpg",
  "/assets/images/portfolio/03.jpg",
  "/assets/images/portfolio/06.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/02.jpg",
  "/assets/images/portfolio/06.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/01.jpg",
];

const brands = [
  "/assets/images/portfolio/04.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/02.jpg",
  "/assets/images/portfolio/03.jpg",
  "/assets/images/portfolio/06.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/02.jpg",
  "/assets/images/portfolio/06.jpg",
  "/assets/images/portfolio/01.jpg",
  "/assets/images/portfolio/01.jpg",
];

const tabCollection = [
  "Health & Beauty",
  "Lifestyle",
  "Nature",
  "Local Montreal",
  "Products",
  "Services",
  "Brands",
];

export const IndrustrySection = ({ data }: any) => {
  const [tabActive, setTabActive] = React.useState(null);
  const [itemLimit, setItemLimit] = React.useState(6);
  const isActive = (id: any) => {
    setTabActive(id);
    setItemLimit(6);
  };

  const {
    loading,
    error,
    data: category,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/industry-categories?populate=deep`
  );
  const categories: any = category;

  const {
    loading: loadingIndustry,
    error: errorIndustry,
    data: ind,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/industries?populate=deep`);
  const industry: any = ind;

  const loadMore = () => {
    setItemLimit(itemLimit + 6);
  };

  useEffect(() => {
    setTabActive(categories?.data[0]?.attributes?.Title);
  }, [categories]);

  return (
    <div className="relative">
      <div className="containerSmall m-auto tablet:p-0">
        <div className="relative text-center">
          <h2 className="heading gradientText mb-[85px] tablet:mb-[50px]">
            {data?.Title}
          </h2>
        </div>

        <div className="containerSmall m-auto !p-0 ">
          <div className="w-full bg-[#2E2E2E] mb-[43px] tablet:overflow-x-scroll scrollbar-hide relative z-10">
            <ul className="flex items-center h-[103px] justify-between divide-x-[1px] w-full tablet:w-[1604px] tablet:ml-[15px]">
              {categories?.data?.map((item: any, index: number) => (
                <li
                  key={`tab-${index}`}
                  onClick={() => isActive(item?.attributes?.Title)}
                  onLoadedData={() =>
                    index == 0 && isActive(item?.attributes?.Title)
                  }
                  className={`${
                    tabActive === item?.attributes?.Title ? "tabActiveBg" : ""
                  } text25 text-white !font-bold px-2 text-center h-full flex items-center justify-center flex-1 cursor-pointer`}
                >
                  {item?.attributes?.Title}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-[60px] m-auto tablet:grid-cols-2 tablet:gap-2 tablet:px-[15px]">
            {industry?.data?.slice(0, itemLimit).map(
              (item: any, index: number) =>
                item?.attributes.industry_category?.data?.attributes.Title ==
                  tabActive && (
                  <Link
                    key={`industry-${index}`}
                    href={String(item.attributes.Link)}
                  >
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
                  </Link>
                )
            )}
          </div>

          <div className="mt-28">
            <p className="text25 text-white text-center mb-5">See More</p>
            <div
              onClick={() => loadMore()}
              className="w-[140px] h-[140px] bg-[#1B242B] m-auto flex items-center justify-center rounded-full cursor-pointer"
            >
              <SlArrowDown size={46} color="#fff" />
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute right-0 -top-[280px] laptop:hidden -z-1"
        src="/assets/images/marketing-shadow.svg"
        alt=""
      />
    </div>
  );
};
