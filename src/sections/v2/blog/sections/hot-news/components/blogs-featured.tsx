"use client";
import React from "react";
import { Blog } from "@/types/blog";
import BlogItem from "./blog-item";
import useWindowSize from "@/hooks/use-window-size";

interface BlogsFeaturedProps {
  blogs: Blog[];
}

export default function BlogsFeatured({ blogs }: BlogsFeaturedProps) {
  const windowSize = useWindowSize();

  return (
    <div className="lg:grid lg:gap-3 lg:grid-cols-[56%_1fr] xl:grid-cols-4">
      {blogs
        .slice(
          0,
          windowSize.width < 1135 ? 1 : windowSize.width >= 1440 ? 5 : 3,
        )
        .map((blog, index) => (
          <BlogItem key={blog.slug} blog={blog} index={index} />
        ))}
    </div>
  );
}
