import Image from "next/image";
import React from "react";

export const Navigation = () => {
  return (
    <div>
      <div className="container m-auto mt-[50px]">
        <div className="flex justify-between items-center">
          <div>
            <Image
              src={"/assets/images/logo.svg"}
              alt="logo"
              width={301}
              height={66}
            />
          </div>
          <div>
            <ul className="flex gap-[60px] items-center">
              <li className="text-white text-[20px] hover:hoverGradient">
                <a href="">About</a>
              </li>
              <li className="text-white text-[20px] hover:hoverGradient">
                <a href="">Services</a>
              </li>
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
