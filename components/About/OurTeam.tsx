import Image from "next/image";
import React from "react";

export const OurTeam = () => {
  return (
    <div className="relative py-[100px] mb-[450px] tablet:mb-[0px] tablet:pb-5">
      <div className="container m-auto relative z-30">
        <h2 className="text37 font-['MonumentBold'] text-white  text-center mb-[70px]">
          Here is <span className="CTAtextGradean"> Our Team</span>
        </h2>

        <div className="grid grid-cols-3 tablet:grid-cols-2 tablet:gap-5 gap-5">
          <div className="mb-[50px]">
            <Image
              src={"/assets/images/about/portfolio01.jpg"}
              alt="portfolio image"
              width={500}
              height={500}
              className="rounded-[20px] w-[494.29px] h-auto tablet:h-auto"
            />

            <div className="mt-[32px] ml-[30px]">
              <h3 className="text25 !font-bold text-white mb-[10px] tablet:text-center">
                Drew Cano
              </h3>
              <p className="text-white text-[20px] font-normal tablet:text-center">
                UX Resercher
              </p>
            </div>
          </div>

          <div className="mb-[50px]">
            <Image
              src={"/assets/images/about/portfolio01.jpg"}
              alt="portfolio image"
              width={500}
              height={500}
              className="rounded-[20px] w-[494.29px] h-auto tablet:h-auto"
            />

            <div className="mt-[32px] ml-[30px]">
              <h3 className="text25 !font-bold text-white mb-[10px] tablet:text-center">
                Orlando Diggs
              </h3>
              <p className="text-white text-[20px] font-normal tablet:text-center">
                Customer Success Lead
              </p>
            </div>
          </div>

          <div className="mb-[50px]">
            <Image
              src={"/assets/images/about/portfolio01.jpg"}
              alt="portfolio image"
              width={500}
              height={500}
              className="rounded-[20px] w-[494.29px] h-auto tablet:h-auto"
            />

            <div className="mt-[32px] ml-[30px]">
              <h3 className="text25 !font-bold text-white mb-[10px] tablet:text-center">
                Natali Craig
              </h3>
              <p className="text-white text-[20px] font-normal tablet:text-center">
                Product Design
              </p>
            </div>
          </div>

          <div className="mb-[50px]">
            <Image
              src={"/assets/images/about/portfolio01.jpg"}
              alt="portfolio image"
              width={500}
              height={500}
              className="rounded-[20px] w-[494.29px] h-auto tablet:h-auto"
            />

            <div className="mt-[32px] ml-[30px]">
              <h3 className="text25 !font-bold text-white mb-[10px] tablet:text-center">
                Phoenix Baker
              </h3>
              <p className="text-white text-[20px] font-normal tablet:text-center">
                Founder & CEO
              </p>
            </div>
          </div>

          <div className="mb-[50px]">
            <Image
              src={"/assets/images/about/portfolio01.jpg"}
              alt="portfolio image"
              width={500}
              height={500}
              className="rounded-[20px] w-[494.29px] h-auto tablet:h-auto"
            />

            <div className="mt-[32px] ml-[30px]">
              <h3 className="text25 !font-bold text-white mb-[10px] tablet:text-center">
                Lana Steiner
              </h3>
              <p className="text-white text-[20px] font-normal tablet:text-center">
                Product Manger
              </p>
            </div>
          </div>

          <div className="mb-[50px]">
            <Image
              src={"/assets/images/about/portfolio01.jpg"}
              alt="portfolio image"
              width={500}
              height={500}
              className="rounded-[20px] w-[494.29px] h-auto tablet:h-auto"
            />

            <div className="mt-[32px] ml-[30px]">
              <h3 className="text25 !font-bold text-white mb-[10px] tablet:text-center">
                Rich Wilson
              </h3>
              <p className="text-white text-[20px] font-normal tablet:text-center">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/images/about/team-shape.svg"
        alt=""
        className="absolute -bottom-[250px] tablet:hidden"
      />
    </div>
  );
};
