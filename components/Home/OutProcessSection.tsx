import Image from "next/image";
import React from "react";

export const OurProcessSection = () => {
  return (
    <div className="relative h-auto pb-[350px]">
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

        <div className="relative max-w-[1393px] m-auto h-[1943px]">
          <Image
            src="/assets/images/process/process-point.svg"
            alt="process"
            className="absolute top-[53%] left-[44%] transform -translate-x-1/2 -translate-y-1/2"
            height={1943}
            width={482}
          />
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
                Discuss project with our team director, to strategize a
                thunderous social media marketing roadmap for ya’.
              </p>
            </div>
          </div>

          <div className="flex justify-start mt-[60px]">
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
                We setup up meeting with you at your place, or our studio.
                Alternatively, products can be sent to us via express mail.
              </p>
            </div>
            <div className="flex-1"></div>
          </div>

          <div className="flex justify-end mt-[40px]">
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
                We will create eye popping videos, simple yet so captivating..
              </p>
            </div>
          </div>

          <div className="flex justify-start mt-[45px]">
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
                Get the views, shares, likes you were dreaming about for your
                brand!
              </p>
            </div>
            <div className="flex-1"></div>
          </div>

          <div className="flex justify-end mt-[110px]">
            <div className="flex-1"></div>
            <div className="max-w-[456px] pl-[60px]">
              <img
                src="/assets/images/process/05.png"
                alt=""
                className="mb-[47px]"
              />
              <h3 className="text-[25px] font-bold text-white mb-[15px]">
                Revenue, Revenue, Baby
              </h3>
              <p className="text-[25px] font-normal text-white">
                Yes, watch your conversions come in like crazy!
              </p>
            </div>
          </div>

          <div className="flex justify-start mt-[110px]">
            <div className="max-w-[456px]">
              <img
                src="/assets/images/process/06.png"
                alt=""
                className="mb-[47px]"
              />
              <h3 className="text-[25px] font-bold text-white mb-[15px]">
                Repeat & Repeat The Process
              </h3>
              <p className="text-[25px] font-normal text-white">
                Social media awareness is a constant battle, we will help you
                find what works, and repeat that, to have the same magic X2!
              </p>
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
