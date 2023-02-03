import { TogetherToday } from "@/components/About/TogetherToday";
import { BlogCardSection } from "@/components/Blog/BlogCardSection";
import { NewArticleSection } from "@/components/Blog/NewArticleSection";
import { PopularArticle } from "@/components/Blog/PopularArticle";
import { FooterContent } from "@/components/Home/FooterContent";
import React from "react";

export default function Blog() {
  return (
    <div>
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
