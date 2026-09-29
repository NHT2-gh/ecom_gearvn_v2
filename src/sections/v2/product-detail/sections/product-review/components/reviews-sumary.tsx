import { ReviewRatingStar } from "@/components/v2/rating";
import { Typography } from "@/components/v2/ui/typography";
import { ProductRating } from "@/types/response";
import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";

interface ReviewsSumaryProps {
  rating: ProductRating;
}

export default function ReviewsSumary({ rating }: ReviewsSumaryProps) {
  return (
    <div className="space-y-6 md:flex md:gap-6">
      <div className="flex flex-col items-center">
        <Typography className="!text-[3rem]/[125%]" fontWeight="semibold">
          {(rating.avg_rating || 0)?.toFixed(1)}
        </Typography>

        <Typography level="body-14" className="text-txt-secondary mb-4">
          {rating.total_rating} lượt đánh giá
        </Typography>

        <ReviewRatingStar rating={rating.avg_rating || 0} size={20} />

        <Typography
          level="h2-32"
          fontWeight="bold"
          className="text-txt-button-red"
        >
          90%
          <Typography
            level="body-13"
            fontWeight="medium"
            className="text-txt-primary inline align-middle ml-2.5"
          >
            sẽ giới thiệu sản phẩm này
          </Typography>
        </Typography>
      </div>

      <div>
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className="w-full flex items-center justify-center gap-2 md:gap-3"
          >
            <Typography className="shrink-0 text-txt-primary w-2 text-center">
              {5 - i}{" "}
            </Typography>
            <StarIcon
              className="w-5 h-5 shrink-0"
              fill="var(--icon-yellow)"
              stroke="none"
            />

            <div
              style={{
                ["--percentage" as string]: `${
                  (Number(
                    rating[`star_rating_${5 - i}` as keyof ProductRating]
                  ) /
                    (Number(rating.total_rating) || 1)) *
                  100
                }%`,
              }}
              className="h-[0.75rem] w-full bg-tertiary relative after:content-[''] after:absolute after:inset-0 after:z-10 after:bg-red after:w-[var(--percentage)] md:w-[29.6875rem]"
            />

            <Typography
              level="body-14"
              className="text-txt-secondary shrink-0"
              fontWeight="medium"
            >
              {rating[`star_rating_${5 - i}` as keyof ProductRating]} đánh giá
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}
