import Image from "next/image";
import React from "react";
import { FiPhone } from "react-icons/fi";
import { RxEnvelopeClosed } from "react-icons/rx";

export const Footer = () => {
  return (
    <>
      <div className="container m-auto py-[50px] mt-[30px]">
        <div className="grid grid-cols-6">
          <div className="col-span-2">
            <Image
              src={"/assets/images/footer-logo.svg"}
              width={200}
              height={131.89}
              alt="footer logo"
            />
            <ul className="flex gap-3 mt-[25px]">
              <li className="">
                <a href="">
                  <img
                    src="/assets/images/behance.svg"
                    alt=""
                    className="w-[32px] h-[32px] bg-white rounded-full p-[7px]"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="/assets/images/dribbble.svg"
                    alt=""
                    className="w-[32px] h-[32px] bg-white rounded-full p-[7px]"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="/assets/images/twitter.svg"
                    alt=""
                    className="w-[32px] h-[32px] bg-white rounded-full p-[7px]"
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="/assets/images/google-plus.svg"
                    alt=""
                    className="w-[32px] h-[32px] bg-[#FF8B2D] rounded-full p-[7px]"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-4">
            <div className="grid grid-cols-3">
              <div>
                <h2 className="text-[30px] text-[#FF8B2D] font-bold  mb-[25px]">
                  Our Company
                </h2>
                <ul>
                  <li className="text-[20px] font-normal text-white mb-[20px]">
                    <a href="">About Us</a>
                  </li>
                  <li className="text-[20px] font-normal text-white mb-[20px]">
                    <a href="">Services</a>
                  </li>
                  <li className="text-[20px] font-normal text-white mb-[20px]">
                    <a href="">Portfolio</a>
                  </li>
                  <li className="text-[20px] font-normal text-white mb-[20px]">
                    <a href="">Blog</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-[30px] text-[#FF8B2D] font-bold  mb-[25px]">
                  Service
                </h2>
                <ul>
                  <li className="text-[20px] font-normal text-white mb-[20px]">
                    <a href="">
                      Amazon account <br /> management
                    </a>
                  </li>
                  <li className="text-[20px] font-normal text-white mb-[20px]">
                    <a href="">A+/ EBC content</a>
                  </li>
                  <li className="text-[20px] font-normal text-white mb-[20px]">
                    <a href="">Product content writing</a>
                  </li>
                  <li className="text-[20px] font-normal text-white mb-[20px]">
                    <a href="">Product photography</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-[30px] text-[#FF8B2D] font-bold mb-[25px]">
                  Our Address
                </h2>
                <ul>
                  <li className="text-[20px] font-normal text-white mb-[22px]">
                    <a href="">
                      5055 North 03th Avenue,Penscola, FL 32503, New York
                    </a>
                  </li>
                  <li className="text-[20px] font-normal text-white mb-[22px]">
                    <p className="flex items-center gap-2">
                      <span>
                        <FiPhone size={20} />
                      </span>
                      +1 965 047 658 23
                    </p>
                  </li>
                  <li className="text-[20px] font-normal text-white mb-[22px]">
                    <p className="flex items-center gap-2">
                      <span>
                        <RxEnvelopeClosed size={20} />
                      </span>
                      +1 965 047 658 23
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
          2022 | All Right Reserved By Outrival.
        </p>
      </div>
    </>
  );
};
