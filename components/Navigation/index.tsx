import { showImage } from "@/helper/helper";
import useFetch from "@/hooks/useFetch";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxCross2 } from "react-icons/rx";

export const Navigation = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/global-setting?populate=deep`
  );
  const settings: any = data;

  return (
    <div>
      <div className="container m-auto mt-[50px] tablet:mt-[20px]">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <Image
                src={
                  showImage(settings?.data?.attributes?.Settings?.Logo) || ""
                }
                alt="logo"
                width={301}
                height={66}
                className="w-[301px] h-[66px] tablet:w-[220.4px] tablet:h-[48.17px] laptop:w-[200px]"
              />
            </Link>
          </div>
          <div className="tablet:hidden">
            <ul className="flex gap-[60px] items-center laptop:gap-[20px]">
              <li className="text-white text-[20px] hover:hoverGradient">
                <Link href={"/about"}>About</Link>
              </li>
              <Link href={"/services"}>
                <li className="text-white text-[20px] hover:hoverGradient">
                  <a href="">Services</a>
                </li>
              </Link>
              {/* <Link href={"/portfolio"}>
                <li className="text-white text-[20px] hover:hoverGradient">
                  <a href="">Portfolio</a>
                </li>
              </Link> */}
              <Link href={"/blog"}>
                <li className="text-white text-[20px] hover:hoverGradient">
                  <a href="">Blog</a>
                </li>
              </Link>
              <Link href={"/contact-us"}>
                <li className="text-white text-[20px] hover:hoverGradient">
                  <a href="">Contact</a>
                </li>
              </Link>
              <li className="hoverGradient text-[20px] font-bold hover:hoverGradient border-[1px] py-[20px] px-[40px] rounded-[10px] laptop:py-[12px] laptop:px-[20px]">
                <a href="">Get Started</a>
              </li>
            </ul>
          </div>
          <div
            className="hidden tablet:block"
            onClick={() => {
              setIsMobile(!isMobile);
            }}
          >
            {isMobile ? (
              <RxCross2 size={37} color="white" />
            ) : (
              <Image
                src={"/assets/images/mobile-menu.svg"}
                alt="mobile bar"
                width={27}
                height={22}
              />
            )}
          </div>
        </div>

        {isMobile && (
          <div className="tablet:pt-10">
            <ul className="flex gap-[60px] flex-col">
              <li className="text-white text-[20px] hover:hoverGradient">
                <Link href={"/about"}>About</Link>
              </li>
              <Link href={"/services"}>
                <li className="text-white text-[20px] hover:hoverGradient">
                  <a href="">Services</a>
                </li>
              </Link>
              {/* <Link href={"/portfolio"}>
                <li className="text-white text-[20px] hover:hoverGradient">
                  <a href="">Portfolio</a>
                </li>
              </Link> */}
              <Link href={"/blog"}>
                <li className="text-white text-[20px] hover:hoverGradient">
                  <a href="">Blog</a>
                </li>
              </Link>
              <li className="text-white text-[20px] hover:hoverGradient">
                <a href="">Contact</a>
              </li>
              <li className="hoverGradient text-[20px] font-bold hover:hoverGradient border-[1px] py-[20px] px-[40px] rounded-[10px] text-center">
                <Link
                  href={String(
                    settings?.data?.attributes?.Settings?.GetStartButtonLink
                  )}
                >
                  {settings?.data?.attributes?.Settings?.GetStartButtonText}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
