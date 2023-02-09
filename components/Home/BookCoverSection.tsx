import Image from "next/image";
import React from "react";

export const BookCoverSection = () => {
  return (
    <div className="py-[100px] container m-auto tablet:py-[50px]">
      <div className="grid grid-cols-2 items-center tablet:grid-cols-1">
        <div className="text-center tablet:order-last">
          <h2 className="text-[45.59px] leading-[59.1px] text-white font-['MonumentBold'] tablet:text-[32px]">
            7 Outstanding Ways To Overcome Competitor FOMO On Social Media!{" "}
            <br /> For 2023
          </h2>
          <button className="buttonText">Download Your Free Copy</button>
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
