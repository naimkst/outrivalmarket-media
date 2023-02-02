import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navigation = () => {
  return (
    <div>
      <div className="container m-auto mt-[50px]">
        <div className="flex justify-between items-center">
          <div>
            <Link href={"/"}>
              <Image
                src={"/assets/images/logo.svg"}
                alt="logo"
                width={301}
                height={66}
              />
            </Link>
          </div>
          <div>
            <ul className="flex gap-[60px] items-center">
              <li className="text-white text-[20px] hover:hoverGradient">
                <Link href={"/about"}>About</Link>
              </li>
              <Link href={"/services"}>
                <li className="text-white text-[20px] hover:hoverGradient">
                  <a href="">Services</a>
                </li>
              </Link>
              <Link href={"/portfolio"}>
                <li className="text-white text-[20px] hover:hoverGradient">
                  <a href="">Portfolio</a>
                </li>
              </Link>
              <li className="text-white text-[20px] hover:hoverGradient">
                <a href="">Blog</a>
              </li>
              <li className="text-white text-[20px] hover:hoverGradient">
                <a href="">Contact</a>
              </li>
              <li className="hoverGradient text-[20px] font-bold hover:hoverGradient border-[1px] py-[20px] px-[40px] rounded-[10px]">
                <a href="">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
