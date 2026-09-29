import { StarIcon } from "@heroicons/react/24/outline";
import React from "react";

interface RatingProps {
  rating: number;
  size?: number;
}

export default function ReviewRatingStar({ rating, size = 16 }: RatingProps) {
  const ratingInt = rating ? Math.floor(rating) : 0;
  const ratingFloat = rating - ratingInt;
  const ratingFloatPercent = Math.round(ratingFloat * 100);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: ratingInt }).map((_, index) => (
        <StarIcon
          key={index}
          width={size}
          height={size}
          fill="var(--icon-yellow)"
          stroke="var(--icon-yellow)"
        />
      ))}

      {ratingFloat > 0 && (
        <div className="w-fit h-fit relative">
          <StarIcon
            width={size}
            height={size}
            fill="var(--icon-yellow)"
            stroke="var(--icon-yellow)"
            style={{
              WebkitMaskImage: `linear-gradient(to right, white ${ratingFloatPercent}%, transparent ${ratingFloatPercent}%)`,
              maskImage: `linear-gradient(to right, white ${ratingFloatPercent}%, transparent ${ratingFloatPercent}%)`,
            }}
          />
          <StarIcon
            width={size}
            height={size}
            stroke="var(--icon-yellow)"
            className="absolute top-0 left-0 z-[-1]"
          />
        </div>
      )}

      {Array.from({
        length: ratingFloat > 0 ? 5 - ratingInt - 1 : 5 - ratingInt,
      }).map((_, index) => (
        <StarIcon
          key={index}
          width={size}
          height={size}
          fill="none"
          stroke="var(--icon-yellow)"
        />
      ))}
    </div>
  );
}
