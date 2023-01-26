import Image from "next/image";
import React from "react";

export const FooterContent = () => {
  return (
    <div className="container m-auto text-center py-[50px]">
      <div>
        <Image
          src="/assets/images/footer-logo.svg"
          alt="footer logo"
          width={330.57}
          height={218}
          className="m-auto mb-[80px]"
        />
        <p className="text-[25px] text-white text-center max-w-[1214px] m-auto">
          We are a Montreal based Social Media Marketing Agency, known for
          creating havoc with our Social Media Video ad campaigns. We specialize
          with small-to-medium businesses, looking to outrival their market
          niche. Whether you are struggling to gain momentum, or just want to
          “Do Better”, we can certainly help you achieve those goals, with
          powerful social media ads. We have proudly gained a nice reputable
          client community thanks to our simple yet amazing process of producing
          multi-media ads in Montreal. We look forward to working together on
          your next Social Media Marketing Campaign!
        </p>
      </div>
    </div>
  );
};
