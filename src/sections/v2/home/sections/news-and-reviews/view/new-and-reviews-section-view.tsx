import Image from "next/image";
import React from "react";
import { blogService } from "@/services/blog.api";
import {
  HotNewsSection,
  ShortsReviewSection,
} from "@/sections/v2/blog/sections";
import {
  mockShortsReview,
  mockVideoReview,
} from "@/_mocks/_mock_shorts_review/_mock_shorts_review";
import { VideoGroup } from "@/components/v2/common";

export default async function NewAndReviewsSection() {
  const blogs = await blogService.getBlogsByCollectionName("all");

  return (
    <section className="container space-y-6 mt-16">
      <header>
        <Image
          width={265}
          height={60}
          src={"/images/news-reviews/NewsAndReviewsHeader.webp"}
          alt={"Header of News Sections"}
          className="mx-auto"
        />
      </header>
      <HotNewsSection initBlogs={blogs} />
      <ShortsReviewSection shorts={mockShortsReview} />
      <VideoGroup title={"Video review sản phẩm"} videos={mockVideoReview} />
    </section>
  );
}
