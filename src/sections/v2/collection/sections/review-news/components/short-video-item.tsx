import React from "react";

import Image from "next/image";
import { Typography } from "@/components/v2/ui/typography";
import { ShortReview } from "@/sections/v2/blog/sections/shorts-review/type";

export default function ShortReviewItem({
  short,
  onPlay,
}: {
  short: ShortReview;
  onPlay: (embedUrl: ShortReview) => void;
}) {
  return (
    <article className="space-y-2 w-[158px]">
      <div
        onClick={() => onPlay(short)}
        className="relative w-fit before:w-[3rem] before:h-[3.75rem] before:absolute before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%] before:bg-[url('/svgs/logo-short-video.svg')] before:bg-contain before:bg-center before:bg-no-repeat hover:cursor-pointer"
      >
        <Image
          src={short.video.thumbnail}
          width={158}
          height={279}
          className="object-cover"
          alt={"Thumbnail of short review"}
        />
      </div>
      <Typography
        level="h6-18"
        fontWeight="medium"
        className="text-[1rem] text-[#161722] line-clamp-2"
      >
        {short.video.title}
      </Typography>
    </article>
  );
}
