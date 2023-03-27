import { showImage } from "@/helper/helper";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";

export const Footer = () => {
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/global-setting?populate=deep`
  );
  const settings: any = data;

  return (
    <>
      <div className="container m-auto py-[50px] mt-[30px] overflow-x-hidden">
        <div className="grid grid-cols-6">
          <div className="col-span-2 tablet:order-last tablet:text-center tablet:col-span-6 tablet:mt-5">
            <Image
              src={
                showImage(settings?.data?.attributes?.Settings?.FooterLogo) ||
                ""
              }
              width={200}
              height={131.89}
              alt="footer logo"
              className="tablet:m-auto"
            />
            <ul className="flex gap-3 mt-[25px] tablet:justify-center">
              <li>
                <a href={settings?.data?.attributes?.Settings?.InstagramLink}>
                  <img
                    src="/assets/images/instagram.svg"
                    alt=""
                    className="w-[32px] h-[32px] bg-white  hover:bg-[#FF8B2D] rounded-full p-[7px]"
                  />
                </a>
              </li>
              <li>
                <a href={settings?.data?.attributes?.Settings?.LinkedinLink}>
                  <img
                    src="/assets/images/linkedin.svg"
                    alt=""
                    className="w-[32px] h-[32px] bg-[#fff] hover:bg-[#FF8B2D] rounded-full p-[2px]"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-4 tablet:col-span-6">
            <div className="grid grid-cols-3 tablet:grid-cols-1 tablet:text-center">
              <div>
                <h2 className="text-[30px] text-[#FF8B2D] font-bold  mb-[25px]">
                  {settings?.data?.attributes?.Settings?.OurCompanyText}
                </h2>
                <ul>
                  {settings?.data?.attributes?.CompanyLink.map(
                    (item: any, index: number) => (
                      <li
                        key={`company-${index}`}
                        className="text-[20px] font-normal text-white mb-[20px]"
                      >
                        <a href={String(item?.Link)}>{item?.Title}</a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h2 className="text-[30px] text-[#FF8B2D] font-bold  mb-[25px]">
                  {settings?.data?.attributes?.Settings?.FooterServiceText}
                </h2>
                <ul>
                  {settings?.data?.attributes?.ServiceLink.map(
                    (item: any, index: number) => (
                      <li
                        key={`company-${index}`}
                        className="text-[20px] font-normal text-white mb-[20px]"
                      >
                        <a href={String(item?.Link)}>{item?.Title}</a>
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div>
                <h2 className="text-[30px] text-[#FF8B2D] font-bold mb-[25px]">
                  {settings?.data?.attributes?.Settings?.FooterOurAddressText}
                </h2>
                <ul>
                  <li className="text-[20px] font-normal text-white mb-[22px]">
                    <a href="#">
                      {settings?.data?.attributes?.Settings?.Address}
                    </a>
                  </li>
                  <li className="text-[20px] font-normal text-white mb-[22px]">
                    <p className="flex items-center gap-2 tablet:justify-center">
                      <span>
                        <FiPhone size={20} />
                      </span>
                      {settings?.data?.attributes?.Settings?.Phone}
                    </p>
                  </li>
                  <li className="text-[20px] font-normal text-white mb-[22px]">
                    <p className="flex items-center gap-2 tablet:justify-center">
                      <span>
                        <RxEnvelopeClosed size={20} />
                      </span>
                      {settings?.data?.attributes?.Settings?.Email}
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-[14px] text-white text-center footerBg py-[20px]">
          {settings?.data?.attributes?.Settings?.CopyRightText}
        </p>
      </div>
    </>
  );
};
