import React from "react";
import { BannerSlot } from "@/components/banner";
import { blogService } from "@/services/blog.api";
import { VideoGroup } from "@/components/v2/common";
import { BreadCrumbs } from "@/components/v2/breadcrumbs";
import { GroupBlogs, HotNewsSection, ShortsReviewSection } from "../sections";
import {
  mockShortsReview,
  mockVideoReview,
} from "@/_mocks/_mock_shorts_review/_mock_shorts_review";
import GroupGameHub from "../sections/group-blogs/group-game-hub";

export default async function BlogsPageView() {
  const blogs = await blogService.getBlogsByCollectionName("all");
  return (
    <section className="container space-y-10">
      <BreadCrumbs data={[{ title: "Tin tức, reivew sản phẩm" }]} />

      <BannerSlot
        page={"collection"}
        position={"top"}
        id="collection-banner"
        className="mb-4"
      />

      <HotNewsSection initBlogs={blogs} />

      <VideoGroup title={"Video mới nhất"} videos={mockVideoReview} />
      <GroupBlogs title="Tin tức công nghệ" category="review" limit={9} />
      <GroupGameHub />
      <ShortsReviewSection shorts={mockShortsReview} />
      <GroupBlogs title="Thủ thuật" category="thu-thuat-giai-dap" />
    </section>
  );
}
