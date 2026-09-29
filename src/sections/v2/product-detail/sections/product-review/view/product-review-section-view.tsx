"use client";
import React, { useMemo } from "react";

import { useProductReviewsInfinite } from "@/hooks/queries/use-products";
import { ReviewInput, ReviewsListing, ReviewsSumary } from "../components";
import { Button } from "@/components/v2/ui/button";
import { Typography } from "@/components/v2/ui/typography";
import { SectionTitle } from "@/components/v2/section-title";
import { ProductRating } from "@/types/response";
import ButtonsToggleFilterItem from "@/components/v2/filter/filter-items/filter-item-buttons-toggle";
import { ChevronDownIcon, StarIcon } from "@heroicons/react/24/outline";

interface ProductReviewSectionProps {
  sku: string;
  rating?: ProductRating;
}

const RatingDefault: ProductRating = {
  total_rating: 0,
  avg_rating: 0,
  product_sku: "",
};
export default function ProductReviewSection({
  sku,
  rating,
}: ProductReviewSectionProps) {
  const {
    data,
    isError,
    isFetching,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useProductReviewsInfinite({
    sku,
    limit: 5,
  });

  // Flatten pages data and extract reviews
  const allReviews = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap((page) => page.reviews || []);
  }, [data?.pages]);

  return (
    <section id="reviews" className="w-full space-y-5">
      <SectionTitle title={"Đánh giá và bình luận"} />

      <ReviewsSumary rating={rating ?? RatingDefault} />

      <ReviewInput />

      <div className="flex items-center">
        <Typography
          level="h6-18"
          className="text-[1rem] text-txt-primary"
          fontWeight="semibold"
        >
          {rating?.total_rating || 0} Bình luận
        </Typography>

        <ButtonsToggleFilterItem
          className="ml-auto"
          value={["all"]}
          config={{
            key: "review-sort",
            options: [
              { label: "Tất cả", value: "all" },
              ...Array.from({ length: 5 }, (_, i) => ({
                label: (
                  <>
                    {i + 1} <StarIcon className="w-4 h-4" />
                  </>
                ),
                value: `${i + 1}`,
              })),
            ],
          }}
        />
      </div>

      {isError && (
        <Typography className="text-txt-class-red text-center">
          Không thể tải đánh giá
        </Typography>
      )}

      <ReviewsListing reviews={allReviews} isLoading={isLoading} />

      {hasNextPage && (
        <div className="flex justify-center">
          <Button
            variant={"outline"}
            color="secondary"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage || isFetching}
            className=""
          >
            {isFetchingNextPage ? "Đang tải..." : "Xem thêm 5 bình luận"}

            <ChevronDownIcon width={18} height={18} />
          </Button>
        </div>
      )}
    </section>
  );
}
