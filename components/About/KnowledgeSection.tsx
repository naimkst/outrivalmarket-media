import React from "react";

export const KnowledgeSection = () => {
  return (
    <div className="containerSmall m-auto py-[90px]">
      <div className="flex items-center justify-between tablet:flex-col tablet:text-center gap-5">
        <div className="max-w-[554px] tablet:max-w-full tablet:mb-[40px]">
          <h2 className="heading text-white">
            Knowledge join reach market
            <span className="weKnowGradent">{`organic note don't lunch`}</span>.
          </h2>
          <button className="buttonText">Connect with us here</button>
        </div>
        <div className="max-w-[964px]">
          <p className="text25 text-white">
            {`We understand that the social media game is always changing, and
            we're always staying on top of the latest trends and algorithms to
            make sure your brand stays ahead of the curve. We're constantly
            experimenting with new tactics and strategies to ensure that our
            clients are getting the best possible results. Whether it's through
            Instagram stories, TikTok challenges, or live streaming, we'll use
            the latest social media features to connect with your target
            audience in new and exciting ways.`}
          </p>
        </div>
      </div>
    </div>
  );
};
