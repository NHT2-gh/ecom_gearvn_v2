import React from "react";
import { ShortReview } from "../type";
import Image from "next/image";
import { Typography } from "@/components/v2/ui/typography";
import { formatPrice } from "@/utils/format";
import Link from "next/link";
import { APP_ROUTE } from "@/config/app_route";

export default function ShortReviewItem({
  short,
  onPlay,
}: {
  short: ShortReview;
  onPlay: (embedUrl: ShortReview) => void;
}) {
  return (
    <article className="space-y-2 w-full">
      <div
        onClick={() => onPlay(short)}
        className="relative before:w-[3rem] before:h-[3.75rem] before:absolute before:top-[50%] before:left-[50%] before:-translate-x-[50%] before:-translate-y-[50%] before:bg-[url('/svgs/logo-short-video.svg')] before:bg-contain before:bg-center before:bg-no-repeat hover:cursor-pointer"
      >
        <Image
          src={short.video.thumbnail}
          width={227}
          height={402}
          className="object-cover w-full"
          alt={"Thumbnail of short review"}
        />
      </div>
      <Typography
        level="h6-18"
        fontWeight="semibold"
        className="text-[1rem] text-txt-primary line-clamp-2"
      >
        {short.video.title}
      </Typography>

      <Link href={APP_ROUTE.product.bySlug(short.product.slug)}>
        <div className="flex items-center bg-[#4040401A] h-[6.375rem]">
          <Image
            unoptimized
            width={60}
            height={60}
            src={short.product.featureImage || "/images/gearvn-thumb.png"}
            alt={short.product.name}
            className="size-[4.75rem] p-2 object-contain"
          />

          <div className="h-full p-2 flex flex-col justify-center gap-1.5">
            <Typography
              level="body-12"
              fontWeight="semibold"
              className="h-[2rem] line-clamp-2"
            >
              {short.product.name}
            </Typography>

            <div className="text-left order-2">
              {short.product.price.discount && (
                <Typography
                  level="body-12"
                  className="text-txt-secondary line-through"
                >
                  {formatPrice(short.product.price.original)}
                </Typography>
              )}
              <Typography
                level="body-15"
                fontWeight="semibold"
                className="text-txt-status-red"
              >
                {formatPrice(
                  short.product.price.discount || short.product.price.original
                )}
              </Typography>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
