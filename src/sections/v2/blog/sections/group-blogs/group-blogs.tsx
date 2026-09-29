import React from "react";
import { SectionTitle } from "@/components/v2/section-title";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Typography } from "@/components/v2/ui/typography";
import { APP_ROUTE } from "@/config/app_route";
import { blogService } from "@/services/blog.api";

interface GroupBlogsProps {
  title: string;
  category: string;
  limit?: number;
}

export default async function GroupBlogs({
  title,
  category,
  limit = 3,
}: GroupBlogsProps) {
  const blogs = await blogService.getBlogsByCollectionName(category);

  if (!blogs) return null;
  return (
    <section className="space-y-5">
      <SectionTitle title={title} />
      <div className="grid grid-cols-3 gap-3">
        {blogs.slice(0, limit).map((blog) => (
          <div key={blog.slug} className="p-2">
            <Link
              className="inline-block w-full h-fit"
              href={APP_ROUTE.blog.bySlug(blog.slug, blog.category)}
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={390}
                height={220}
                sizes="(max-width: 390px) 100vw, (max-width: 1024px) 100vw, 390px"
                className="aspect-[1.77] w-full h-[220px] border border-stroke-primary"
              />
            </Link>

            <Link
              className="inline-block w-full"
              href={APP_ROUTE.blog.bySlug(blog.slug, blog.category)}
            >
              <Typography
                level="h4-24"
                fontWeight="semibold"
                className={cn(
                  "text-[1.25rem] line-clamp-2 hover:text-txt-button-red",
                )}
              >
                {blog.title}
              </Typography>
            </Link>

            <Typography level="body-15" className="line-clamp-2 leading-[175%]">
              {blog.description}
            </Typography>
          </div>
        ))}
      </div>
    </section>
  );
}
