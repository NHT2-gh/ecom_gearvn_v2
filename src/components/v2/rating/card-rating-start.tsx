import React from "react";
import { Typography } from "../ui/typography";
import { Star } from "lucide-react";

export default function ProductCartRatingStart({
  rate,
  count,
}: {
  rate: number;
  count: number;
}) {
  return (
    <div className="flex items-center gap-1">
      <Typography color="question" className="font-semibold">
        {Math.round(rate || 0.0)}
      </Typography>
      <Star size={12} strokeWidth={0} fill="var(--color-state-question)" />

      <Typography color="secondary" className="inline">
        {"("} {count || 0} {"đánh giá )"}
      </Typography>
    </div>
  );
}
