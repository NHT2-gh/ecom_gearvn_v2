"use client";
import React, { useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/v2/carousel";
import { Video } from "@/sections/v2/blog/sections/shorts-review/type";
import { Typography } from "@/components/v2/ui/typography";

import VideoItem from "./video-item";

interface VideoGroupProps {
  videos: Video[];
}

export default function GroupVideoReview({ videos }: VideoGroupProps) {
  const [currentWatchingVideo, setCurrentWatchingVideo] =
    useState<Video | null>(null);

  return (
    <div role="group" className="space-y-3 relative">
      <Typography
        level="h5-20"
        fontWeight="semibold"
        className="text-[1rem] leading-[2.625rem]"
      >
        Video sản phẩm
      </Typography>

      <Carousel className="w-full" opts={{ startIndex: 0, align: "start" }}>
        <CarouselContent className="gap-2 lg:gap-0">
          {videos?.map((video, index) => (
            <CarouselItem
              key={index}
              className="max-w-[380px] lg:max-w-full h-fit"
            >
              <VideoItem
                video={video}
                onPlay={(video) => setCurrentWatchingVideo(video)}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="w-[2.625rem] h-10 !top-0 right-[3.625rem] left-auto translate-none text-icon-primary disabled:text-icon-primary disabled:opacity-30 disabled:cursor-not-allowed shadow-none bg-tertiary" />
        <CarouselNext className="w-[2.625rem] h-10 !top-0 right-0 translate-none text-icon-primary disabled:text-icon-primary disabled:opacity-30 disabled:cursor-not-allowed shadow-none bg-tertiary" />
      </Carousel>

      {currentWatchingVideo && (
        <div
          onClick={() => {
            setCurrentWatchingVideo(null);
          }}
          className="fixed z-[999] w-screen h-screen top-0 left-0 bg-black/50 flex items-center justify-center"
        >
          <iframe
            width="560"
            height="315"
            className="absolute rounded-lg z-[1000] aspect-[560/315] w-[60vw] h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={`${currentWatchingVideo.embedUrl}?autoplay=1&mute=1`}
            title={currentWatchingVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
}
