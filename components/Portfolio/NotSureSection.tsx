import React from "react";

export const NotSureSection = () => {
  return (
    <div className="relative py-[150px] tablet:py-[80px] tablet:px-[15px]">
      <div className="max-w-[789px] m-auto text-center tablet:max-w-full">
        <h2 className="heading text-white mb-[34px]">
          Not sure how all this works?? Looks like dreamy stuff to you?? Hey its
          Fo’real!, kidding aside..
        </h2>
        <p className="text25 !font-bold text-white mb-[40px]">
          Check out our service page here
        </p>

        <button className="buttonText">Our Services</button>
      </div>
      <img
        className="absolute right-0 -top-[0px] tablet:hidden"
        src="/assets/images/marketing-shadow.svg"
        alt=""
      />
    </div>
  );
};
