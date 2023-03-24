import { Seo } from "@/components/GlobalComponent/Seo";
import { FooterContent } from "@/components/Home/FooterContent";
import { TogetherToday } from "@/components/Home/TogetherToday";
import { showImage } from "@/helper/helper";
import useFetch from "@/hooks/useFetch";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function SingleBlog({ id }: any) {
  const router = useRouter();
  const [blog, setBlog] = useState<any>();
  const [url, setUrl] = useState<any>();
  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs/${id}?populate=deep`
  );

  const {
    loading: singleBlogLoading,
    error: singleBlogErrors,
    data: singleBlogData,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/single-blog?populate=deep`);
  const singlePageData: any = singleBlogData;

  useEffect(() => {
    setBlog(data);
    setUrl(router.query.id);
  }, [data, router.query.id]);

  console.log(singlePageData?.data, "blog");
  return (
    <div>
      <Seo />
      <div className="pt-[150px]">
        <div className="container m-auto">
          <div className="text-center max-w-[723px] m-auto pb-[98px] border-b-[1px] border-[#9197A6] tablet:pb-[50px]">
            <p className="text-white text25 mb-[20px]">
              Published on{" "}
              <span className="font-bold">
                {" "}
                {moment(blog?.data?.attributes?.publishedAt).format(
                  "MMM Do YY"
                )}
              </span>
            </p>
            <h2 className="text48 text-white mb-[36px]">
              {blog?.data?.attributes?.Title}
              <span className="gradientText"> Being Miserable</span>
            </h2>
            <div className="flex items-center justify-evenly max-w-[80%] m-auto">
              <div className="flex items-center gap-[20px]">
                <Image
                  src={"/assets/images/blog/book.svg"}
                  alt="books"
                  height={35}
                  width={35}
                />
                <p className="text-[16] text-white">
                  {" "}
                  {blog?.data?.attributes?.MinRead}
                </p>
              </div>
              <span className="h-[39px] w-[1px] bg-[#4E555A]"></span>
              <div className="flex items-center gap-[20px]">
                <Image
                  src={"/assets/images/blog/bookmark.svg"}
                  alt="books"
                  height={29}
                  width={16}
                />
                <p className="text-[16] text-white">Book Mark</p>
              </div>
            </div>
          </div>

          <div className="pt-[98px] blogContainer m-auto tablet:pt-[50px]">
            <ReactMarkdown className="text-white text25">{`${blog?.data?.attributes?.Description}`}</ReactMarkdown>
          </div>

          <div className="containerSmall bg-[#0A131A] rounded-[20px] text-center py-[53px] mt-[100px] mb-[100px]">
            <h2 className="heading gradientText mb-[34px]">
              {singlePageData?.data?.attributes?.CTA?.Title.FirstText}
            </h2>

            <ReactMarkdown className="text25 text-white mb-[25px]">
              {singlePageData?.data?.attributes?.CTA?.Description}
            </ReactMarkdown>
            <Link
              href={String(singlePageData?.data?.attributes?.CTA?.ButtonUrl)}
            >
              <button className="buttonText">
                {singlePageData?.data?.attributes?.CTA?.ButtonText}
              </button>
            </Link>
          </div>

          <div className="max-w-[1280px] m-auto">
            <div className="grid grid-cols-2 items-center tablet:grid-cols-1">
              <div className="relative">
                <img
                  src={"/assets/images/blog/image-shape.png"}
                  alt="blog title"
                  className="absolute"
                />
                <div className="p-[115px] tablet:p-[130px] phone:p-[70px]">
                  <Image
                    src={showImage(blog?.data?.attributes?.BlogLeftImage) || ""}
                    alt="blog title"
                    width={537}
                    height={780}
                    className="rounded-[20px] relative"
                  />
                </div>
              </div>
              <div>
                <ReactMarkdown className="text-white text25 font-normal">{`${blog?.data?.attributes?.BlogRightContent}`}</ReactMarkdown>
              </div>
            </div>
          </div>

          <div className="pt-[98px] blogContainer m-auto">
            <ReactMarkdown className="text-white text25">{`${blog?.data?.attributes?.BottomContent}`}</ReactMarkdown>
          </div>

          {singlePageData?.data?.attributes?.CTA?.IsShow && (
            <TogetherToday data={singlePageData?.data?.attributes?.CTA} />
          )}
          {singlePageData?.data?.attributes?.FooterAbout?.IsShow && (
            <FooterContent
              data={singlePageData?.data?.attributes?.FooterAbout}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  console.log(context.params.id);
  return {
    props: {
      id: context.params.id,
    }, // will be passed to the page component as props
  };
}
