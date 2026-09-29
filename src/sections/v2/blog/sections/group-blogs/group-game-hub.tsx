import React from "react";

import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/v2/carousel";
import { blogService } from "@/services/blog.api";
import { Button } from "@/components/v2/ui/button";
import { Typography } from "@/components/v2/ui/typography";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import GroupLayout from "@/components/v2/common/layout/group-layout";

export default async function GroupGameHub() {
  const blogs = await blogService.getBlogsByCollectionName("game-hay");
  return (
    <GroupLayout
      groupTitle="Game Hub"
      categorys={{
        key: "category",
        label: "Loại",
        type: "button-toggle",
        options: [
          { label: "Game FPS", value: "game-fps" },
          { label: "Game RPG", value: "game-rpg" },
          { label: "Game Co.op", value: "game-co-op" },
          { label: "Game hành động", value: "game-action" },
          { label: "Game sinh tồn", value: "game-survival" },
          { label: "Game kinh dị", value: "game-horror" },
        ],
      }}
    >
      <Carousel className="w-full" opts={{ startIndex: 0, align: "start" }}>
        <CarouselContent className="gap-5">
          {blogs?.slice(0, 10).map((blog, index) => (
            <CarouselItem key={index} className="max-w-fit">
              <article className="relative w-[17.875rem] bg-[linear-gradient(rgba(220,171,171,0)_63.87%,rgba(0,0,0,0.61)_95.38%)]">
                <Image
                  width={286}
                  height={164}
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full relative z-[-1]"
                />

                <Typography
                  level="h6-18"
                  fontWeight="semibold"
                  className="text-[1rem] line-clamp-2 absolute left-3 bottom-3 right-3 text-txt-white"
                >
                  {blog.title}
                </Typography>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="w-10 h-10 top-0 right-[3.625rem] left-auto translate-none" />
        <CarouselNext className="w-10 h-10 top-0 right-0 translate-none" />
        <CarouselDots className="-bottom-4" />
      </Carousel>
      <Link target="_blank" href={"https://www.youtube.com/@GEARVNOfficial"}>
        <Button
          color="secondary"
          size={"lg"}
          className="absolute top-0 right-[8rem]"
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
    </GroupLayout>
  );
}
