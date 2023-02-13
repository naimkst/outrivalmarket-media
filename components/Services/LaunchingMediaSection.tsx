import React from "react";
import { BoxImage } from "../GlobalComponent/BoxImage";
import { TabImageBox } from "../GlobalComponent/TabImageBox";

export const LaunchingMediaSection = () => {
  const [tabActive, setTabActive] = React.useState(0);
  const isActive = (id: number) => {
    setTabActive(id);
  };
  return (
    <div className="py-[0px] container m-auto tablet:!max-w-full tablet:p-0">
      <div className="text-center mb-[42px]">
        <h2 className="heading text-white mb-[34px]">
          Launching your social media marketing campaign can be bitter..
        </h2>
        <p className="text25 !font-bold text-white">Lets do this together!</p>
      </div>
      <div className="containerSmall m-auto bg-[#1C1C1C] !p-0 tablet:max-w-full">
        <div className="w-full bg-[#2E2E2E] tablet:pt-10">
          <ul className="scrollbar-hide flex items-center h-[103px] justify-between divide-x-[1px] w-full tablet:overflow-scroll tablet:ml-[10px]">
            <li
              onClick={() => isActive(0)}
              className={`${
                tabActive === 0 ? "tabActiveBg" : ""
              } text25 text-white !font-bold px-16 text-center h-full flex items-center`}
            >
              Social Media Brand Ambassador
            </li>
            <li
              onClick={() => isActive(1)}
              className={`${
                tabActive === 1 ? "tabActiveBg" : ""
              } text25 text-white !font-bold px-16 text-center h-full flex items-center`}
            >
              UGC Original Content
            </li>
            <li
              onClick={() => isActive(2)}
              className={`${
                tabActive === 2 ? "tabActiveBg" : ""
              } text25 text-white !font-bold px-16 text-center h-full flex items-center`}
            >
              Brand Video Concept
            </li>
            <li
              onClick={() => isActive(3)}
              className={`${
                tabActive === 3 ? "tabActiveBg" : ""
              } text25 text-white !font-bold px-16 text-center h-full flex items-center`}
            >
              Stop Motion Animation
            </li>
          </ul>
        </div>
        {tabActive === 0 && (
          <div className="px-[67px] grid grid-cols-2 justify-between items-center">
            <p className="text-[38px] text-white">
              Let us find your next Social Media ambassador for{" "}
              <span className="!font-bold"> your brand</span>; The perfect human
              that shares <span className="!font-bold"> your values</span>, and
              <span className="!font-bold">your passion</span>
            </p>
            <TabImageBox imgUrl="/assets/images/services/tab-image.jpg" />
          </div>
        )}

        {tabActive === 1 && (
          <div className="px-[67px] grid grid-cols-2 justify-between items-center">
            <p className="text-[38px] text-white">
              Let us find your next Social Media ambassador for{" "}
              <span className="!font-bold"> your brand</span>; The perfect human
              that shares <span className="!font-bold"> your values</span>, and
              <span className="!font-bold">your passion</span>
            </p>
            <TabImageBox imgUrl="/assets/images/services/tab-image.jpg" />
          </div>
        )}

        {tabActive === 2 && (
          <div className="px-[67px] grid grid-cols-2 justify-between items-center">
            <p className="text-[38px] text-white">
              Let us find your next Social Media ambassador for{" "}
              <span className="!font-bold"> your brand</span>; The perfect human
              that shares <span className="!font-bold"> your values</span>, and
              <span className="!font-bold">your passion</span>
            </p>
            <TabImageBox imgUrl="/assets/images/services/tab-image.jpg" />
          </div>
        )}

        {tabActive === 3 && (
          <div className="px-[67px] grid grid-cols-2 justify-between items-center">
            <p className="text-[38px] text-white">
              Let us find your next Social Media ambassador for{" "}
              <span className="!font-bold"> your brand</span>; The perfect human
              that shares <span className="!font-bold"> your values</span>, and
              <span className="!font-bold">your passion</span>
            </p>
            <TabImageBox imgUrl="/assets/images/services/tab-image.jpg" />
          </div>
        )}
      </div>
    </div>
  );
};
