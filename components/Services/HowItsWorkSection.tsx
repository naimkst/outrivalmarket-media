import React from "react";

export const HowItsWorkSection = () => {
  return (
    <div className="py-[80px]">
      <div className="container m-auto">
        <h2 className="text-[37px] font-['MonumentBold'] text-white  text-center mb-[70px]">
          How all <span className="CTAtextGradean"> this works?</span>
        </h2>
      </div>

      <div className="h-[914px] relative container">
        <img
          src="/assets/images/services/how-work-shape.svg"
          alt=""
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="grid grid-cols-2 justify-center m-auto mb-[70px] pt-[35px]">
          <div className="flex-1  max-w-[446px] flex justify-center text-center m-auto ml-0">
            <p className="text-[28px] text-white text-center">
              We come up with multi-media marketing strategy for your specific
              niche, whatever it may be.
            </p>
          </div>
          <div className="flex-1"></div>
        </div>

        <div className="grid grid-cols-2 justify-center m-auto mb-[70px]">
          <div className="flex-1"></div>

          <div className="flex-1  max-w-[476px] flex justify-center text-center m-auto ">
            <p className="text-[28px] text-white text-center">
              Next, we come up with some stupidly-rocking catchy concept of how
              to viralize your message!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 justify-center m-auto mb-[70px]">
          <div className="flex-1  max-w-[446px] flex justify-center text-center m-auto">
            <p className="text-[28px] text-white text-center">
              This multi-media content gets posted on your brands social media
              channels
            </p>
          </div>
          <div className="flex-1"></div>
        </div>

        <div className="grid grid-cols-2 justify-center m-auto mb-[70px]">
          <div className="flex-1"></div>

          <div className="flex-1  max-w-[476px] flex justify-center text-center m-auto ">
            <p className="text-[28px] text-white text-center">
              Your stats start flying up, your video gets ‘SEEN’ and ‘PLAYED’
              over and over while you sit back and… (no no, take that back..)
              you sit and hustle on building your business like a boss!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
