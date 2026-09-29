import { Typography } from "@/components/v2/ui/typography";
import React from "react";
import { Blog } from "@/types/blog";
import Link from "next/link";
import { APP_ROUTE } from "@/config/app_route";
import Image from "next/image";

interface BlogsHotProps {
  blogs: Blog[];
}

export default function BlogsHot({ blogs }: BlogsHotProps) {
  return (
    <div
      aria-label="Group Blogs Hot"
      className="w-full max-w-full md:w-[19.9375rem] lg:w-[22.5rem] min-h-full bg-secondary shrink-0"
    >
      <header className="px-6 py-3 bg-red">
        <Typography
          level="h5-20"
          fontWeight="semibold"
          className="text-[1.125rem] text-txt-white"
        >
          Bài viết HOT
        </Typography>
      </header>

      <div
        role="list"
        className="flex flex-col gap-3 justify-between px-3 py-6"
      >
        {blogs.map((blog) => (
          <div
            key={blog.slug}
            className="bg-primary flex gap-3 p-3"
            role="listitem"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={140}
              height={80}
              className="w-[8.75rem] h-[5rem] object-cover shrink-0"
            />

            <div className="flex flex-col justify-between">
              <Typography
                level="body-14"
                fontWeight="medium"
                className="line-clamp-2"
              >
                {blog.title}
              </Typography>

              <Link href={APP_ROUTE.blog.bySlug(blog.slug, blog.category)}>
                <Typography
                  level="body-14"
                  fontWeight="medium"
                  className="text-txt-button-red"
                >
                  Xem ngay
                </Typography>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
