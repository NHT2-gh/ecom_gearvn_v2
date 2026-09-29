import { Typography } from "@/components/v2/ui/typography";
import { Clock } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogArticleAnotherInfoProps {
  publishedAt: string;
  authorName: string;
}

export default function BlogArticleAnotherInfo({
  publishedAt,
  authorName,
}: BlogArticleAnotherInfoProps) {
  return (
    <div className="flex items-center gap-2">
      <Clock size={16} className="inline text-secondary" />
      <Typography level="body-14" color="secondary" className="inline text-sm">
        {publishedAt}
      </Typography>

      <Typography
        level="body-14"
        color="secondary"
        className="inline-flex items-center gap-2 text-blue-700 before:content-[''] before:size-1 before:bg-[#6d6e72] before:rounded-full"
      >
        {authorName}
      </Typography>

      <Link
        className="inline-block ml-auto"
        target="_blank"
        aria-label="GearVn trên Google News"
        href="https://news.google.com/publications/CAAqBwgKMNzH0gswm-PpAw?hl=vi&gl=VN&ceid=VN%3Avi"
      >
        <div className="flex items-center gap-[0.3125rem] px-[0.9375rem] bg-[#f5f5f5] !rounded-lg">
          <Typography level="body-14" className="inline text-sm">
            GearVn trên
          </Typography>
          <Image
            src={
              "https://file.hstatic.net/200000722513/file/banner_gg_news_v2_02.png"
            }
            alt="Google News"
            width={87}
            height={24}
            sizes="87px"
          />
        </div>
      </Link>
    </div>
  );
}
