import React from "react";
import { APP_ROUTE } from "@/config/app_route";
import { BreadCrumbs } from "@/components/v2/breadcrumbs";
import { Typography } from "@/components/v2/ui/typography";
import {
  BlogArticleAnotherInfo,
  BlogArticleContent,
  CommentBox,
} from "../components";
import { BlogDetail } from "@/types/blog";

interface BlogArticlePageViewProps {
  blog: BlogDetail;
}

export default function BlogArticlePageView({
  blog,
}: BlogArticlePageViewProps) {
  return (
    <section className="">
      <div className="container">
        <BreadCrumbs
          data={[
            {
              title: "Thủ thật",
              href: APP_ROUTE.blog.bySlug("thu-thuat-giai-dap"),
            },
            {
              title: blog.title,
            },
          ]}
        />
      </div>

      <section className="bg-white p-6 container rounded-sm">
        <div className="w-full mx-auto xl:w-[48.625rem]">
          <Typography className="!text-[1.75rem]/[120%] text-wrap mb-4">
            {blog.title}
          </Typography>
          <BlogArticleAnotherInfo
            publishedAt={blog.published_at}
            authorName={blog.author}
          />

          <BlogArticleContent content={blog.content} />

          <CommentBox />
        </div>
      </section>
    </section>
  );
}
