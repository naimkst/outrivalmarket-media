import { TogetherToday } from "@/components/About/TogetherToday";
import { BlogCardSection } from "@/components/Blog/BlogCardSection";
import { NewArticleSection } from "@/components/Blog/NewArticleSection";
import { PopularArticle } from "@/components/Blog/PopularArticle";
import { Seo } from "@/components/GlobalComponent/Seo";
import { FooterContent } from "@/components/Home/FooterContent";
import useFetch from "@/hooks/useFetch";
import React from "react";

export default function Blog() {
  const {
    loading: allLoading,
    error: allError,
    data: allBlog,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=deep`);

  const {
    loading: singleBlogLoading,
    error: singleBlogErrors,
    data: singleBlogData,
  } = useFetch(`${process.env.NEXT_PUBLIC_API_URL}/single-blog?populate=deep`);
  const singlePageData: any = singleBlogData;

  const {
    loading: featureLoading,
    error: featureError,
    data: featureBlog,
  } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=deep&[filters][blog_category][Title][$eq]=${singlePageData?.data?.attributes?.PretiumCategory}`
  );

  const { loading, error, data } = useFetch(
    `${process.env.NEXT_PUBLIC_API_URL}/blogs?populate=deep&[filters][blog_category][Title][$ne]=${singlePageData?.data?.attributes?.PopularCategory}&?pagination[page]=1&pagination[pageSize]=2`
  );

  const blog: any = featureBlog;
  const blogs: any = data;
  const allBlogs: any = allBlog;

  console.log(singlePageData, "blog");
  return (
    <div className="overflow-hidden">
      <Seo />
      <BlogCardSection data={blog?.data} blogs={blogs?.data} />
      {/* <PopularArticle /> */}
      <div>
        <img
          src="/assets/images/about/full-shape.svg"
          alt=""
          className="m-auto"
        />
      </div>
      <NewArticleSection
        data={allBlogs?.data}
        title={singlePageData?.data?.attributes?.NewArticlesTitle}
      />
      {singlePageData?.data?.attributes?.CTA?.IsShow && (
        <TogetherToday data={singlePageData?.data?.attributes?.CTA} />
      )}
      {singlePageData?.data?.attributes?.FooterAbout?.IsShow && (
        <FooterContent data={singlePageData?.data?.attributes?.FooterAbout} />
      )}
    </div>
  );
}
