import React from "react";
import Link from "next/link";
import Image from "next/image";
import { _categorys } from "@/_mocks";
import { Typography } from "@/components/v2/ui/typography";

export default function CategorysSection() {
  return (
    <section
      className="w-full bg-neutral-50 border-corner-style px-5 py-6"
      style={{
        ["--border-color" as string]: "var(--icon-primary)",
      }}
    >
      <div className="relative w-full flex gap-2 max-w-full overflow-x-scroll scrollbar-hidden lg:justify-between lg:grid lg:grid-rows-[repeat(2,7.25rem)] lg:grid-cols-[repeat(10,minmax(7.25rem,1fr))] lg:gap-2">
        {_categorys.map((category, index) => (
          <Link
            href={category.link}
            key={index}
            title={category.name}
            aria-label={`Link to collection ${category.name}`}
            className="block w-fit h-full hover:opacity-75 transition-opacity"
          >
            <button className="bg-primary border border-stroke-secondary py-3 size-[7.25rem] aspect-square flex flex-col items-center h-full justify-end gap-1.5">
              <Image
                unoptimized
                src={category.iconUrl}
                alt=""
                width={84}
                height={84}
                sizes="84px"
                className="size-[3.5rem] object-contain"
              />
              <Typography
                level="body-14"
                fontWeight="semibold"
                className="text-txt-primary"
              >
                {category.name}
              </Typography>
            </button>
          </Link>
        ))}
      </div>
    </section>
  );
}
