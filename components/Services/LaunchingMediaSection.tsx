import { showImage } from "@/helper/helper";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { BoxImage } from "../GlobalComponent/BoxImage";
import { TabImageBox } from "../GlobalComponent/TabImageBox";

export const LaunchingMediaSection = ({ data }: any) => {
  const [tabActive, setTabActive] = React.useState(0);
  const isActive = (id: number) => {
    setTabActive(id);
  };
  return (
    <div className="py-[0px] container m-auto laptop:!max-w-full laptop:p-0">
      <div className="text-center mb-[42px]">
        <h2 className="heading text-white mb-[34px] phone:px-[15px] laptop:px-[15px]">
          {data?.Title?.Title}
        </h2>
        <p className="text25 !font-bold text-white">
          {data?.Title?.Description}
        </p>
      </div>
      <div className="containerSmall m-auto bg-[#1C1C1C] !p-0 laptop:max-w-full ">
        <div className="w-full bg-[#2E2E2E] laptop:overflow-x-scroll scrollbar-hide ">
          <div className="flex items-center h-[103px] justify-between divide-x-[1px] w-full laptop:mx-[10px] laptop:w-[1230px]">
            {data?.CampaignTab?.map((item: any, index: number) => (
              <p
                key={`tabsitem-${index}`}
                onClick={() => isActive(index)}
                className={`${
                  tabActive === index ? "tabActiveBg" : ""
                } text25 text-white !font-bold px-16 text-center h-full flex items-center cursor-pointer laptop:px-3`}
              >
                {item?.Title}
              </p>
            ))}
          </div>
        </div>
        {data?.CampaignTab?.map(
          (item: any, index: number) =>
            tabActive == index && (
              <div
                key={`tabs-${index}`}
                className="px-[67px] grid grid-cols-2 justify-between items-center laptop:text-center laptop:grid-cols-1 laptop:px-[15px] laptop:py-[50px]"
              >
                <ReactMarkdown className="text-[38px] text-white laptop:text-[32px] laptop:text-center laptop:order-last">
                  {item?.Description}
                </ReactMarkdown>
                <TabImageBox imgUrl={showImage(item?.Image)} />
              </div>
            )
        )}
      </div>
    </div>
  );
};
