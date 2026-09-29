"use client";
import React, { useState } from "react";
import { Typography } from "../ui/typography";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/v2/carousel";
import Image from "next/image";
import { Video } from "@/sections/v2/blog/sections/shorts-review/type";
import { Button } from "../ui/button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface VideoGroupProps {
  title: string;
  videos: Video[];
}

export default function VideoGroup({ title, videos }: VideoGroupProps) {
  const [currentWatchingVideo, setCurrentWatchingVideo] =
    useState<Video | null>(null);

  return (
    <section
      role="group"
      className="border-corner-style bg-neutral-50 p-6 space-y-6"
    >
      <Typography
        level="h5-20"
        fontWeight="semibold"
        className="leading-[2.625rem] text-center md:text-left"
      >
        {title}
      </Typography>

      <Carousel
        className="w-full relative md:static"
        opts={{ startIndex: 0, align: "start" }}
      >
        <CarouselContent className="gap-5">
          {videos?.map((video, index) => (
            <CarouselItem key={index} className="max-w-fit">
              <article
                onClick={() => {
                  setCurrentWatchingVideo(video);
                }}
                className="w-[12.875rem] lg:w-[17.6875rem] space-y-3"
              >
                <Image
                  width={283}
                  height={149}
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-[283/149]"
                />

                <Typography
                  level="body-14"
                  fontWeight="medium"
                  className="line-clamp-2"
                >
                  {video.title}
                </Typography>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="!flex w-10 h-10 top-[20%] -left-4 md:top-6 md:right-[5.125rem] md:left-auto translate-x-1/2 translate-none" />
        <CarouselNext className="!flex w-10 h-10 top-[20%] -right-4 md:top-6 md:right-6 translate-x-1/2 translate-none" />
        <CarouselDots className="-bottom-6 md:bottom-3" />
      </Carousel>
      <Link target="_blank" href={"https://www.youtube.com/@GEARVNOfficial"}>
        <Button
          color="secondary"
          size={"lg"}
          className="hidden md:flex absolute top-6 right-[8.75rem]"
        >
          <Typography
            level="h6-18"
            fontWeight="semibold"
            className="text-[1rem] text-txt-primary"
          >
            Khám phá ngay
          </Typography>
          <ArrowRightIcon strokeWidth={2} className="w-5 h-5" />
        </Button>
      </Link>

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
            src={`${currentWatchingVideo.embedUrl}?autoplay=1`}
            title={currentWatchingVideo.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      )}
    </section>
  );
}
