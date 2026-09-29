import { SVGThunder } from "@/assets/svgs";
import { Countdown } from "@/components/countdown";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/v2/carousel";
import { Card } from "@/components/v2/card";
import { FilterItemConfig } from "@/components/v2/filter/type";
import { Button } from "@/components/v2/ui/button";
import { Typography } from "@/components/v2/ui/typography";
import { APP_ROUTE } from "@/config/app_route";
import { CampainProduct } from "@/types/v2/product";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FlashSaleBlockProps {
  products: CampainProduct[];
  categorys: FilterItemConfig;
}

export default function FlashSaleBlock({
  products,
  categorys,
}: FlashSaleBlockProps) {
  return (
    <div className="bg-[#003BB8] w-full h-fit">
      <header className="w-full px-8 py-3 flex items-center justify-between">
        <Countdown targetDate={new Date("2025-12-18T00:00:00")} />

        <Image
          src={"/images/campain/CampainFlashSaleHeader.webp"}
          alt=""
          width={184}
          height={120}
          className="absolute z-10 left-[50%] translate-x-[-50%]"
        />
        <div className="hidden md:flex items-center gap-3">
          <span className="animate-pulse">
            <SVGThunder />
          </span>
          <Link
            className="font-black uppercase italic text-[2rem]/[2.5rem] text-[#FFEC00]"
            href={"#"}
          >
            GEAR ARENA WEEK
          </Link>
        </div>
      </header>

      <div
        className="rounded-2xl relative bg-primary min-h-[392px] mx-4 mb-3 p-4 bg-no-repeat bg-center bg-cover backdrop-brightness-150"
        style={{
          backgroundImage:
            "url('/images/campain/CampainFlashSaleBackground.webp')",
        }}
      >
        <div aria-label="Category" className="flex items-center gap-2">
          <Typography
            level="body-14"
            fontWeight="semibold"
            className="text-txt-white"
          >
            Danh mục:
          </Typography>
          {categorys.options.map((category) => (
            <Link key={category.value} href={""}>
              <Button color="info">{category.label}</Button>
            </Link>
          ))}
        </div>

        <Carousel
          className="max-w-full"
          opts={{ startIndex: 0, align: "start" }}
        >
          <CarouselContent className="gap-0 h-fit pt-[1rem]">
            {products?.map((product, index) => (
              <CarouselItem
                key={product.id + index}
                className="max-w-fit overflow-y-visible"
              >
                <Card
                  className="w-[13.5625rem] h-full flex-shrink-0 mx-1 border-none"
                  product={product}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex bg-secondary w-[2.625rem] h-10 top-4 right-[5.125rem] left-auto translate-none text-icon-primary disabled:opacity-30" />
          <CarouselNext className="hidden md:flex bg-secondary w-[2.625rem] h-10 top-4 right-6 translate-none text-icon-primary  disabled:opacity-30" />
          <div className="relative">
            <CarouselDots className="-bottom-6" />
          </div>
        </Carousel>

        <Button
          color="secondary"
          className="hidden md:flex absolute h-[2.625rem] w-[8.4375rem] top-4 right-[9.125rem]"
        >
          <Typography
            level="h6-18"
            className="text-[1rem] text-txt-primary "
            fontWeight="semibold"
          >
            Xem tất cả
          </Typography>
          <ArrowRightIcon className="w-5 h-5 text-icon-primary" />
        </Button>
      </div>
    </div>
  );
}
