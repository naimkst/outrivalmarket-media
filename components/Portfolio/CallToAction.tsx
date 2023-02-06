import React from "react";

export const CallToAction = () => {
  return (
    <div className="containerSmall bg-[#0A131A] rounded-[20px] text-center py-[53px] mt-[100px]">
      <h2 className="heading gradientText mb-[34px]">Lets Get In touch Now.</h2>

      <p className="text25 text-white mb-[25px]">Click this darn button</p>
      <button className=" relative text-[24px] font-semibold text-center h-[70px] px-[45px] buttonGredean text-white">
        Connect with us here
        <img
          src="/assets/images/services/arrow.svg"
          alt=""
          className="absolute -right-[100px] -top-[70px]"
        />
      </button>
    </div>
  );
};