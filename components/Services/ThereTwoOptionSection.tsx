import React from "react";

export const ThereTwoOptionSection = () => {
  return (
    <div className="py-[100px] tablet:py-[50px]">
      <div className="containerSmall m-auto">
        <h2 className="text37 font-['MonumentBold'] text-white  text-center mb-[70px]">
          Here’s the thing...
          <br />
          <span className="CTAtextGradean"> there are two options</span>
        </h2>

        <div className="grid grid-cols-2 gap-[25px] tablet:grid-cols-1 tablet:text-center">
          <div className="bg-[#1C1C1C]">
            <div className="optionBG h-[87px] flex items-center justify-center mb-[50px]">
              <h2 className="text-[34px] text-white font-bold uppercase">
                Option 1
              </h2>
            </div>
            <h2 className="text-[39px] font['MonumentBold'] font-bold text-center gradientText mb-[44px]">
              Self-Survival:
            </h2>
            <p className="px-[34px] text25 text-white mb-[67px]">
              We can create the UGC content for you, you post it, you run the
              campaigns, you run your social media channels, you run and run and
              run this and that.. We wish you the best of luck, because either
              way we want you to be successful, however it may be..! Hey you
              might be great at this.. seriously 🤠.. You can stick it out, and
              use the content we create forya’ and manage it all on your own..
              Would be a great option if you can have someone at your company
              running the whole “behind-the-scenes” show, like posting,
              replying, tagging all the goody goody 2023 Gen-Z stuff..
            </p>
            <p className="text25 font-bold text-white px-[34px] mb-[58px]">
              #Bobthebuilder #Yeswecan 💪
            </p>
          </div>
          <div className="bg-[#1C1C1C]">
            <div className="optionBG h-[87px] flex items-center justify-center mb-[50px]">
              <h2 className="text-[34px] text-white font-bold uppercase">
                Option 2
              </h2>
            </div>
            <h2 className="text-[39px] font['MonumentBold'] font-bold text-center gradientText mb-[44px]">
              Fully Managed Services:
            </h2>
            <div>
              <p className="px-[34px] text25 text-white mb-[67px]">
                Let us run your social media show, from head to toe. The right
                way. Here’s what it will sound like.. Our skillful creators will
                create your yet-best social media content, while our team will
                manage your account for serious customer engagement the way you
                personally would like to have your favorite brand communicate to
                you on social media. Woo.. strong words… yes, this is how we do
                it.. in a soft way though.. with strong ethics..
              </p>
              <p className="text25 font-bold text-white px-[34px] mb-[58px]">
                #Bobthebuilder #Yeswecan 💪
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
