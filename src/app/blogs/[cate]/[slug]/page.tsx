import React from "react";
import { blogService } from "@/services/blog.api";
import { BlogArticlePageView } from "@/sections/blog-article/view";

export const revalidate = 21600;

export const dynamicParams = true;

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ cate: string; slug: string }>;
}) {
  const { cate, slug } = await params;

  const blog = await blogService.getBlogDetailBySlug(cate, slug);
  return <BlogArticlePageView blog={blog} />;
}
