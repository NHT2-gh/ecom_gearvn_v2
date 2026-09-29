"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/v2/carousel";
import { ShortReview } from "@/sections/v2/blog/sections/shorts-review/type";
import { Typography } from "@/components/v2/ui/typography";
import ShortReviewItem from "./short-video-item";

interface ShortsReviewSectionProps {
  shorts: ShortReview[];
}

export default function GroupShortVideoReview({
  shorts,
}: ShortsReviewSectionProps) {
  const [currentWatchingShort, setCurrentWatchingShort] =
    useState<ShortReview | null>(null);

  return (
    <>
      <div className="relative space-y-3 max-w-full">
        <Typography
          level="h6-18"
          className="text-[1rem]/[2.5rem]"
          fontWeight="semibold"
        >
          Review sản phẩm
        </Typography>
        <Carousel className="w-full" opts={{ startIndex: 0, align: "start" }}>
          <CarouselContent className="gap-0">
            {shorts?.map((short, index) => (
              <CarouselItem key={index} className="max-w-fit mx-2">
                <ShortReviewItem
                  short={short}
                  onPlay={(watchingShort) =>
                    setCurrentWatchingShort(watchingShort)
                  }
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="w-[2.625rem] h-10 !top-0 right-[3.625rem] left-auto translate-none text-icon-primary disabled:text-icon-primary disabled:opacity-30 disabled:cursor-not-allowed shadow-none bg-tertiary" />
          <CarouselNext className="w-[2.625rem] h-10 !top-0 right-0 translate-none text-icon-primary disabled:text-icon-primary disabled:opacity-30 disabled:cursor-not-allowed shadow-none bg-tertiary" />
        </Carousel>

        {currentWatchingShort && (
          <div
            onClick={() => {
              setCurrentWatchingShort(null);
            }}
            className="fixed z-[999] w-screen h-screen top-0 left-0 bg-black/50 flex items-center justify-center"
          >
            <iframe
              className="absolute rounded-lg z-[1000] aspect-[500/889] h-[70vh] w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              width="400"
              height="712"
              src={`${currentWatchingShort?.video.embedUrl}?autoplay=1`}
              title={currentWatchingShort?.video.title}
              aria-label={`Short video review of ${currentWatchingShort?.product?.name}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </>
  );
}
