"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../v2/carousel";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BannerItem, BannerPosition, Banner } from "@/types/banner";
import Autoplay from "embla-carousel-autoplay";
import { useBanners } from "@/hooks/queries/use-banners";
import { BANNER_PATH } from "@/config/banner_path";

interface BannerSlotProps {
  page: keyof typeof BANNER_PATH;
  position: BannerPosition;
  id?: string;
  className?: string;
}

export default function BannerSlot({
  page,
  position,
  id,
  className,
}: BannerSlotProps) {
  const { data: banners } = useBanners(page);
  if (!banners) return null;

  const banner = banners.find(
    (b: Banner) =>
      b.page.includes(page) && b.position === position && b.id === id,
  );
  if (!banner) return null;

  const renderBannerByType = (bannerItems: BannerItem, index: number) => {
    const { type, customStyle, medias, id, contentText } = bannerItems;

    const idRawSplited = id.split("-");

    if (!medias) {
      if (contentText) {
        return (
          <div
            className={cn(
              "w-full text-center h-full",
              customStyle?.backgroundColor,
            )}
          >
            <span dangerouslySetInnerHTML={{ __html: contentText }} />
          </div>
        );
      } else return null;
    }

    switch (type) {
      case "carousel":
        return (
          <Carousel
            id={id + "-" + index}
            key={idRawSplited[0] + index}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            fade={true}
            showDots={true}
            className={`relative min-w-full max-h-full bg-black col-span-${idRawSplited[1]} row-span-${idRawSplited[2]}`}
          >
            <CarouselContent>
              {medias.map((item, index) => (
                <CarouselItem key={index} className="max-w-full max-h-full">
                  <Link
                    aria-label={`Link to ${item.image.alt}`}
                    href={item.link ?? "/"}
                  >
                    <Image
                      id={item.image.id}
                      fetchPriority={position === "top" ? "high" : "auto"}
                      priority
                      unoptimized
                      src={item.image.src}
                      alt={item.image.alt}
                      width={item.image.width}
                      height={item.image.height}
                      sizes={`${item.image.width}px`}
                      className={`[aspect-ratio:${item.image.width}/${item.image.height}] object-cover w-full h-auto max-h-full object-center bg-black`}
                    />
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="right-2 top-1/2 -translate-y-1/2" />
            <CarouselDots className="mt-2" />
          </Carousel>
        );

      case "image":
        return (
          <Link
            id={id + index}
            className={`block w-full h-full col-span-${idRawSplited[1]} row-span-${idRawSplited[2]}`}
            key={id + index}
            href={medias[0].link ?? "/"}
            style={customStyle}
            aria-label={`Link to ${medias[0].image.alt}`}
          >
            <Image
              id={medias[0].image.id}
              fetchPriority={position === "top" ? "high" : "auto"}
              priority
              unoptimized
              src={medias[0].image.src}
              alt={medias[0].image.alt}
              width={medias[0].image.width}
              height={medias[0].image.height}
              sizes={`${medias[0].image.width}px`}
              className={`object-cover w-full h-full object-top  `}
            />
          </Link>
        );

      case "group-image":
        return (
          <div
            id={id}
            style={customStyle}
            className={`w-full h-full col-span-1`}
          >
            {medias.map((media, index) => (
              <Link
                id={id + index}
                className={`block h-full w-full bg-black flex-1`}
                key={id + index}
                href={media.link ?? "/"}
                aria-label={`Link to ${media.image.alt}`}
              >
                <Image
                  id={media.image.id}
                  fetchPriority={position === "top" ? "high" : "auto"}
                  priority
                  unoptimized
                  src={media.image.src}
                  alt={media.image.alt}
                  width={media.image.width}
                  height={media.image.height}
                  sizes={`${media.image.width}px`}
                  className={`aspect-[${media.image.width}/${media.image.height}] object-cover object-center mx-auto w-full h-auto`}
                />
              </Link>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  const renderBannerByLayout = (banner: Banner, className?: string) => {
    const { bannerItems, configLayout, displayMode, layout } = banner;

    const layoutConfig = configLayout?.[layout];
    const tailwindClasses = layoutConfig?.tailwindCSS || "";

    switch (layout) {
      case "grid":
        return (
          <div
            aria-label="Gearvn Banner"
            className={cn("banner-slot grid", tailwindClasses, className)}
          >
            {bannerItems.map((bannerItem, index) =>
              renderBannerByType(bannerItem, index),
            )}
          </div>
        );
      case "flex":
        return (
          <div
            aria-label="Gearvn Banner"
            style={{
              flexDirection:
                configLayout?.flex?.direction === "column" ? "column" : "row",
            }}
            className={cn("banner-slot flex", tailwindClasses, className)}
          >
            {bannerItems.map((bannerItem, index) =>
              renderBannerByType(bannerItem, index),
            )}
          </div>
        );
      case "single":
        if (displayMode === "dynamic") {
          const bannerCurrent =
            bannerItems[Math.floor(Math.random() * bannerItems.length)];
          return (
            <div
              aria-label="Gearvn Banner"
              className={cn("", tailwindClasses, className, "banner-slot")}
            >
              {renderBannerByType(bannerCurrent, 0)}
            </div>
          );
        }
        return (
          <div
            aria-label="Gearvn Banner"
            className={cn(tailwindClasses, className, "banner-slot")}
          >
            {renderBannerByType(bannerItems[0], 0)}
          </div>
        );
      default:
        return null;
    }
  };

  return renderBannerByLayout(banner, className);
}
