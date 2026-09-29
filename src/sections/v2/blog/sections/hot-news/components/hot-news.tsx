"use client";
import React from "react";
import { Blog } from "@/types/blog";
import { BlogsFeatured } from "../components";
import { SectionTitle } from "@/components/v2/section-title";
import BlogsHot from "../components/blogs-hot";

interface HotNewsSectionProps {
  blogs: Blog[];
}

export default function HotNews({ blogs }: HotNewsSectionProps) {
  return (
    <section className="space-y-3 h-full md:flex md:gap-3 md:px-5 ">
      <div className="grow">
        <SectionTitle title="Nổi bật nhất" />
        <BlogsFeatured blogs={blogs} />
      </div>
      <BlogsHot blogs={blogs.slice(6, 10)} />
    </section>
  );
}
