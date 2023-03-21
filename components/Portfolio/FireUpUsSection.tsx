import Link from "next/link";
import React from "react";

export const FireUpUsSection = ({ data }: any) => {
  return (
    <div className="fireUpSectionBg container m-auto py-[70px]">
      <h2 className="heading text-white text-center mb-[56px]">
        {data?.Title}
      </h2>
      <ul className="flex justify-center gap-[63px]">
        {data?.Instagram && (
          <Link href={String(data?.Instagram)}>
            <li>
              <img src="/assets/images/portfolio/instagram.svg" alt="" />
            </li>
          </Link>
        )}

        {data?.Facebook && (
          <Link href={String(data?.Facebook)}>
            <li>
              <img src="/assets/images/portfolio/facebook.svg" alt="" />
            </li>
          </Link>
        )}

        {data?.TikTok && (
          <Link href={String(data?.TikTok)}>
            <li>
              <img src="/assets/images/portfolio/tiktok.svg" alt="" />
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};
