import React from "react";

export const CallToAction = () => {
  return (
    <div className="container m-auto text-center py-[50px] overflow-x-hidden">
      <div>
        <h2 className="text-[37px] font-['MonumentBold'] text-white mb-[40px]">
          Ready To <span className="CTAtextGradean"> Outrival?!</span>
        </h2>
        <p className="text-[25px] font-bold text-white mb-[40px]">
          Shoot us an email with your questions and struggles with <br /> social
          media marketing!
        </p>
        <button className="CTAtextGradean text-[20px] font-bold border-[1px] py-[20px] px-[40px] rounded-[10px]">
          Get Started
        </button>
      </div>
    </div>
  );
};
