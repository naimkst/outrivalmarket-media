import Image from "next/image";
import React from "react";

export const BookCoverSection = () => {
  return (
    <div className="py-[100px] container m-auto">
      <div className="grid grid-cols-2 items-center">
        <div className="text-center">
          <h2 className="text-[45.59px] leading-[59.1px] text-white font-['MonumentBold']">
            7 Outstanding Ways To Overcome Competitor FOMO On Social Media!{" "}
            <br /> For 2023
          </h2>
          <button className="text-[24px] font-semibold text-center h-[70px] px-[45px] buttonGredean text-white mt-[50px]">
            Download Your Free Copy
          </button>
        </div>
        <div>
          <Image
            src={"/assets/images/book-cover.png"}
            width={712}
            height={932}
            alt="Book Cover"
          />
        </div>
      </div>
    </div>
  );
};
