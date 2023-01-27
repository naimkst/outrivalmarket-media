import Image from "next/image";
import React from "react";

export const OurTeam = () => {
  return (
    <div className="relative py-[100px] mb-[450px]">
      <div className="container m-auto relative z-30">
        <h2 className="text-[37px] font-['MonumentBold'] text-white  text-center mb-[70px]">
          Here is <span className="CTAtextGradean"> Our Team</span>
        </h2>

        <div className="grid grid-cols-3">
          <div className="mb-[50px]">
            <Image
              src={"/assets/images/about/portfolio01.jpg"}
              alt="portfolio image"
              width={500}
              height={500}
              className="rounded-[20px] w-[494.29px] h-[494.29px]"
            />

            <div className="mt-[32px] ml-[30px]">
              <h3 className="text25 !font-bold text-white mb-[10px]">
                Drew Cano
              </h3>
              <p className="text-white text-[20px] font-normal">UX Resercher</p>
            </div>
          </div>

          <div className="mb-[50px]">
            <Image
              src={"/assets/images/about/portfolio01.jpg"}
              alt="portfolio image"
              width={500}
              height={500}
              className="rounded-[20px] w-[494.29px] h-[494.29px]"
            />

            <div className="mt-[32px] ml-[30px]">
              <h3 className="text25 !font-bold text-white mb-[10px]">
                Orlando Diggs
              </h3>
              <p className="text-white text-[20px] font-normal">
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
              className="rounded-[20px] w-[494.29px] h-[494.29px]"
            />

            <div className="mt-[32px] ml-[30px]">
              <h3 className="text25 !font-bold text-white mb-[10px]">
                Natali Craig
              </h3>
              <p className="text-white text-[20px] font-normal">
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
              className="rounded-[20px] w-[494.29px] h-[494.29px]"
            />

            <div className="mt-[32px] ml-[30px]">
              <h3 className="text25 !font-bold text-white mb-[10px]">
                Phoenix Baker
              </h3>
              <p className="text-white text-[20px] font-normal">
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
              className="rounded-[20px] w-[494.29px] h-[494.29px]"
            />

            <div className="mt-[32px] ml-[30px]">
              <h3 className="text25 !font-bold text-white mb-[10px]">
                Lana Steiner
              </h3>
              <p className="text-white text-[20px] font-normal">
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
              className="rounded-[20px] w-[494.29px] h-[494.29px]"
            />

            <div className="mt-[32px] ml-[30px]">
              <h3 className="text25 !font-bold text-white mb-[10px]">
                Rich Wilson
              </h3>
              <p className="text-white text-[20px] font-normal">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <img
        src="/assets/images/about/team-shape.svg"
        alt=""
        className="absolute -bottom-[250px]"
      />
    </div>
  );
};
