import { TogetherToday } from "@/components/About/TogetherToday";
import { BlogCardSection } from "@/components/Blog/BlogCardSection";
import { NewArticleSection } from "@/components/Blog/NewArticleSection";
import { PopularArticle } from "@/components/Blog/PopularArticle";
import { Seo } from "@/components/GlobalComponent/Seo";
import { FooterContent } from "@/components/Home/FooterContent";
import useFetch from "@/hooks/useFetch";
import React from "react";

export default function Blog() {
  const { data, loading, error } = useFetch(
    "http://localhost:1337/api/blogs?populate=thumbnail"
  );

  console.log(data);
  return (
    <div className="overflow-hidden">
      <Seo />
      <BlogCardSection />
      <PopularArticle />
      <div>
        <img src="/assets/images/about/full-shape.svg" alt="" />
      </div>
      <NewArticleSection />
      <TogetherToday />
      <FooterContent />
    </div>
  );
}
