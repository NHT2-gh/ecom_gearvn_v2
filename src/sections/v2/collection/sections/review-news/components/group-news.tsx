import Image from "next/image";
import Link from "next/link";
import { Typography } from "@/components/v2/ui/typography";
import { APP_ROUTE } from "@/config/app_route";
import { useBlogsByCollection } from "@/hooks/queries/use-blogs";

interface GroupNewsProps {
  cate: string;
}

export default function GroupNews({ cate }: GroupNewsProps) {
  const { data, isLoading } = useBlogsByCollection(cate);

  return (
    <div className="w-full space-y-3">
      <Typography
        level="h6-18"
        className="text-[1rem]/[2.5rem]"
        fontWeight="semibold"
      >
        Tin tức sản phẩm
      </Typography>
      {!isLoading && data && (
        <div role="list" className="flex flex-col gap-3 justify-between">
          {data.slice(0, 3).map((blog) => (
            <div
              key={blog.slug}
              className="bg-primary flex gap-3 p-3 border border-stroke-primary"
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
      )}
    </div>
  );
}
