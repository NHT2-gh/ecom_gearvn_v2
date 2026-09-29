import { Typography } from "@/components/v2/ui/typography";
import React from "react";
import Image from "next/image";
import { Video } from "@/sections/v2/blog/sections/shorts-review/type";

export default function VideoItem({
  video,
  onPlay,
}: {
  video: Video;
  onPlay: (video: Video) => void;
}) {
  return (
    <article
      onClick={() => {
        onPlay(video);
      }}
      className="relative w-full flex gap-2 h-fit"
    >
      <Image
        width={175}
        height={103}
        src={video.thumbnail}
        alt={video.title}
        className="w-[175px] h-[103px] cursor-pointer"
      />

      <div className="space-y-2">
        <Typography
          level="body-14"
          fontWeight="medium"
          className="line-clamp-2 h-fit cursor-pointer"
        >
          {video.title}
        </Typography>

        <div className="flex items-center gap-2.5">
          <Image
            className="rounded-full aspect-square"
            src={
              video.info?.author.name ||
              "https://yt3.ggpht.com/lC-8A8m4rZ-C9hUGBSCInLDr7oSFZcZ1F_ZbFSJccopcrvNgiPkQZSuKe8qXc0iC0rpOwxgOjg=s176-c-k-c0x00ffffff-no-rj-mo"
            }
            width={36}
            height={36}
            alt={video.info?.author.name || ""}
          />

          <div className="">
            <Typography
              level="body-12"
              fontWeight="medium"
              className="text-txt-secondary"
            >
              {video.info?.author.name || "GEARVN"}
            </Typography>

            <Typography
              level="body-12"
              fontWeight="medium"
              className="text-txt-secondary"
            >
              {video.info?.views ||
                "12M" +
                  " views" +
                  " . " +
                  (video.info?.createdAt
                    ? video.info?.createdAt?.toDateString()
                    : "1 week ago")}
            </Typography>
          </div>
        </div>
      </div>
    </article>
  );
}
