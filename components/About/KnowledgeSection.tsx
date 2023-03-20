import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const KnowledgeSection = ({ data }: any) => {
  return (
    <div className="containerSmall m-auto py-[90px]">
      <div className="flex items-center justify-between tablet:flex-col tablet:text-center gap-5">
        <div className="max-w-[554px] tablet:max-w-full tablet:mb-[40px]">
          <h2 className="heading text-white">
            {data?.Title?.FirstText}{" "}
            <span className="weKnowGradent">{data?.Title?.ColorText}</span>
          </h2>
          <Link href={String(data?.ButtonUrl)}>
            <button className="buttonText">{data?.ButtonText}</button>
          </Link>
        </div>
        <div className="max-w-[964px]">
          <ReactMarkdown className="text25 text-white">
            {data?.Description}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
