import Image from "next/image";
import React from "react";

export const OurProcessSection = () => {
  return (
    <div className="relative h-auto pb-[100px] ">
      <img
        src="/assets/images/hero-shape.svg"
        alt=""
        className="absolute left-0 top-10"
      />
      <img
        src="/assets/images/marketing-shadow.svg"
        alt=""
        className="absolute right-0 bottom-10"
      />
      <div className="container m-auto py-[50px] ">
        <div className="text-center pb-[100px]">
          <h2 className="text-[37px] font-['MonumentBold'] text-white mb-[40px]">
            Our <span className="CTAtextGradean"> Process</span>
          </h2>
          <p className="text-[25px] font-normal text-white mb-[30px]">
            This is all about <span className="font-bold"> simplicity!</span>
          </p>
        </div>

        <div className="relative max-w-[1476px] m-auto">
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 ">
            <img
              src="/assets/images/services/prcess-shape.svg"
              alt="process"
              className=""
            />
          </div>

          <div className="flex justify-end">
            <div className="flex-1"></div>
            <div className="max-w-[456px] pl-[60px]">
              <img
                src="/assets/images/process/01.png"
                alt=""
                className="mb-[47px]"
              />
              <h3 className="text-[25px] font-bold text-white mb-[15px]">
                Strategize
              </h3>
              <p className="text-[25px] font-normal text-white">
                We have an initial strategizing meeting.
              </p>
            </div>
          </div>

          <div className="flex justify-start">
            <div className="max-w-[456px] pl-[68px]">
              <img
                src="/assets/images/process/02.png"
                alt=""
                className="mb-[47px]"
              />
              <h3 className="text-[25px] font-bold text-white mb-[15px]">
                Initial Action
              </h3>
              <p className="text-[25px] font-normal text-white">
                Products mailed to us to our Local Montreal Studio (if you are
                offering a service, then skip this part, duh’)
              </p>
            </div>
            <div className="flex-1"></div>
          </div>

          <div className="flex justify-end -mt-[50px]">
            <div className="flex-1"></div>
            <div className="max-w-[456px] pl-[60px]">
              <img
                src="/assets/images/process/03.png"
                alt=""
                className="mb-[47px]"
              />
              <h3 className="text-[25px] font-bold text-white mb-[15px]">
                Magic Begins
              </h3>
              <p className="text-[25px] font-normal text-white">
                We do our magic, and create some epic UGC!
              </p>
            </div>
          </div>

          <div className="flex justify-start  pl-[68px]">
            <div className="max-w-[456px]">
              <img
                src="/assets/images/process/04.png"
                alt=""
                className="mb-[47px]"
              />
              <h3 className="text-[25px] font-bold text-white mb-[15px]">
                Magic Continues
              </h3>
              <p className="text-[25px] font-normal text-white">
                The posting fun begins!
              </p>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>

      <div className="containerSmall bg-[#0A131A] rounded-[20px] text-center py-[53px] mt-[100px]">
        <h2 className="heading gradientText mb-[34px]">
          Lets Get In touch Now.
        </h2>

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
    </div>
  );
};
