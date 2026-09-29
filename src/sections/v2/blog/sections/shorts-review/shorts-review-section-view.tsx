"use client";
import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/v2/carousel";
import { SectionTitle } from "@/components/v2/section-title";
import { ShortReview } from "./type";
import { ShortReviewItem } from "./components";
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

interface ShortsReviewSectionProps {
  shorts: ShortReview[];
}

export default function ShortsReviewSection({
  shorts,
}: ShortsReviewSectionProps) {
  const [currentWatchingShort, setCurrentWatchingShort] =
    useState<ShortReview | null>(null);

  return (
    <>
      <section className="max-w-full relative space-y-6 py-5 md:px-5">
        <SectionTitle title={"Review sản phẩm thực tế"} />

        <div
          className="bg-neutral-50 border-corner-style p-6 border border-stroke-primary"
          style={{
            ["--border-color" as string]: "var(--icon-primary)",
            ["--border-size" as string]: "2px",
          }}
        >
          <Carousel
            className="w-full"
            opts={{ loop: true, startIndex: 0, align: "start" }}
          >
            <CarouselContent className="gap-0">
              {shorts?.map((short, index) => (
                <CarouselItem
                  key={index}
                  className="w-full mx-2 max-w-[13.0625rem] lg:max-w-[15.625rem] xl:max-w-[14.1875rem] "
                >
                  <ShortReviewItem
                    short={short}
                    onPlay={(watchingShort) =>
                      setCurrentWatchingShort(watchingShort)
                    }
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-[2.625rem] h-10 !top-[-4rem] right-[3.625rem] left-auto translate-none text-icon-primary disabled:text-tertiary" />
            <CarouselNext className="w-[2.625rem] h-10 !top-[-4rem] right-0 translate-none text-icon-primary disabled:text-tertiary" />

            <CarouselDots />
          </Carousel>
        </div>
        {currentWatchingShort && (
          <>
            <div
              onClick={() => {
                setCurrentWatchingShort(null);
              }}
              className="fixed z-[999] w-screen h-screen top-0 left-0 bg-black/50 flex items-center justify-center"
            >
              <button className="absolute z-[1001] top-[100px] right-[40px] flex justify-center items-center text-icon-primary size-8 bg-tertiary/70 disabled:cursor-not-allowed disabled:bg-tertiary disabled:opacity-30 cursor-pointer">
                <XMarkIcon width={20} height={20} strokeWidth={2} />
              </button>

              <iframe
                className="absolute md:rounded-lg z-[1000] aspect-[500/889] h-[100dvh] w-[100dvw] md:h-[70vh] md:w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                width="400"
                height="712"
                src={`${currentWatchingShort?.video.embedUrl}?autoplay=1`}
                title={currentWatchingShort?.video.title}
                aria-label={`Short video review of ${currentWatchingShort?.product?.name}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = shorts.indexOf(currentWatchingShort);
                  const prevIndex =
                    (currentIndex - 1 + shorts.length) % shorts.length;
                  setCurrentWatchingShort(shorts[prevIndex]);
                }}
                className="absolute z-[1001] left-4 top-1/2 -translate-y-1/2 flex justify-center items-center text-icon-primary size-8 bg-tertiary/70 disabled:cursor-not-allowed disabled:bg-tertiary disabled:opacity-30 cursor-pointer hover:bg-tertiary transition-colors"
              >
                <ChevronLeftIcon width={20} height={20} strokeWidth={2} />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const currentIndex = shorts.indexOf(currentWatchingShort);
                  const nextIndex = (currentIndex + 1) % shorts.length;
                  setCurrentWatchingShort(shorts[nextIndex]);
                }}
                className="absolute z-[1001] right-4 top-1/2 -translate-y-1/2 flex justify-center items-center text-icon-primary size-8 bg-tertiary/70 disabled:cursor-not-allowed disabled:bg-tertiary disabled:opacity-30 cursor-pointer hover:bg-tertiary transition-colors"
              >
                <ChevronRightIcon width={20} height={20} strokeWidth={2} />
              </button>
            </div>
          </>
        )}
      </section>
    </>
  );
}
