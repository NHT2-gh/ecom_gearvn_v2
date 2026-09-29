import { APP_ROUTE } from "@/config/app_route";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { Typography } from "@/components/v2/ui/typography";

export default function BlogItem({
  blog,
  index,
  className,
}: {
  blog: Blog;
  index: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "blog-item w-full space-y-3 p-2",
        {
          "md:row-span-2 lg:col-span-1 xl:col-span-2": index === 0,
        },
        className,
      )}
      key={blog.slug}
    >
      <Link
        className="inline-block w-full h-fit"
        href={APP_ROUTE.blog.bySlug(blog.slug, blog.category)}
      >
        <Image
          src={blog.image}
          alt={blog.title}
          width={390}
          height={224}
          sizes="(max-width: 390px) 100vw, (max-width: 1024px) 100vw, 390px"
          className="aspect-[1.74] w-full border border-stroke-primary"
        />
      </Link>

      <Link
        className="inline-block w-full"
        href={APP_ROUTE.blog.bySlug(blog.slug, blog.category)}
      >
        <Typography
          level="h6-18"
          fontWeight="semibold"
          className={cn(
            "text-[1rem] text-txt-primary line-clamp-3 hover:text-txt-button-red",
            {
              "text-[1.25rem]": index === 0,
            },
          )}
        >
          {blog.title}
        </Typography>
      </Link>
      {index === 0 && (
        <Typography level="body-15" className="line-clamp-5 leading-[175%]">
          {blog.description}
        </Typography>
      )}
    </div>
  );
}
