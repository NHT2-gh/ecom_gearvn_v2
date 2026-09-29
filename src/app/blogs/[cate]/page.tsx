import React from "react";
import { BlogsPageView } from "@/sections/v2/blog/view";

export default async function CategoryBlogsPage({
  params,
}: {
  params: Promise<{ cate: string }>;
}) {
  const { cate } = await params;
  return <BlogsPageView />;
}
