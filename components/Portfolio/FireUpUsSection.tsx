import React from "react";

export const FireUpUsSection = () => {
  return (
    <div className="fireUpSectionBg container m-auto py-[70px]">
      <h2 className="heading text-white text-center mb-[56px]">
        Fire us up here for some cool kick ass <br /> original content!
      </h2>
      <ul className="flex justify-center gap-[63px]">
        <li>
          <img src="/assets/images/portfolio/instagram.svg" alt="" />
        </li>
        <li>
          <img src="/assets/images/portfolio/facebook.svg" alt="" />
        </li>
        <li>
          <img src="/assets/images/portfolio/tiktok.svg" alt="" />
        </li>
      </ul>
    </div>
  );
};
