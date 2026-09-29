import { Review } from "@/types/product";
import React from "react";
import { Skeleton } from "@/components/v2/skeleton";
import { Typography } from "@/components/v2/ui/typography";
import ReviewItem from "./review-item";

interface ReviewsListingProps {
  reviews: Review[];
  isLoading: boolean;
}

export default function ReviewsListing({
  reviews,
  isLoading,
}: ReviewsListingProps) {
  return isLoading ? (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} width={"100%"} className="h-20" />
      ))}
    </div>
  ) : (
    <div role="list" className="flex flex-col gap-5">
      {reviews.length > 0 ? (
        reviews.map((review) => <ReviewItem key={review.id} review={review} />)
      ) : (
        <Typography className="text-txt-secondary text-center mt-4">
          Chưa có đánh giá nào
        </Typography>
      )}
    </div>
  );
}
