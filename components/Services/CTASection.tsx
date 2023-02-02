import React from "react";

export const CTASection = () => {
  return (
    <div className="mt-[150px] relative">
      <div className="w-[867px] h-[404px] m-auto bg-[#1C1C1C] flex items-center flex-col gap-[34px] justify-center px-[37px] mb-[150px] z-10 relative">
        <h2 className="weKnowGradent heading text-white">
          Throw on dem' kicks and join!
        </h2>
        <p className="text25 text-white text-center">
          Social Media is a marathon that we are all in whether we like it not,
          we might as well get those airy kicks and start runnin’ along with
          them runners!” (“Ahron Warter”)
        </p>
      </div>
      <img
        src="/assets/images/services/cta-shape.svg"
        alt=""
        className="absolute left-0 bottom-[120px] z-0"
      />
    </div>
  );
};
