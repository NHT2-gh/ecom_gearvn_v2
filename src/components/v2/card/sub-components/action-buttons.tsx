import React from "react";
import { Typography } from "../../ui/typography";
import { Button } from "../../ui/button";

interface ActionButtonsProps {
  onAddToCart: () => void;
  onViewDetail: () => void;
}

export default function ActionButtons({
  onAddToCart,
  onViewDetail,
}: ActionButtonsProps) {
  return (
    <div
      aria-label="action-buttons"
      className="flex absolute max-w-full bottom-0 left-0 right-0"
    >
      <Button
        variant="solid"
        color="primary"
        size="md"
        className="flex-1 h-[2.125rem] md:h-[2.25rem]"
        aria-label="Thêm vào giỏ"
        onClick={onAddToCart}
      >
        <Typography
          level="body-12"
          fontWeight="semibold"
          className="text-[0.6875rem] md:text-[0.75rem]"
        >
          Thêm vào giỏ
        </Typography>
      </Button>
      <Button
        variant="outline"
        color="secondary"
        size="md"
        className="flex-1 !border-0 !border-t-1 group-hover:border-t-stroke-tertiary h-[2.125rem] md:h-[2.25rem]"
        aria-label="Xem chi tiết"
        onClick={onViewDetail}
      >
        <Typography
          level="body-12"
          fontWeight="semibold"
          className="text-[0.6875rem] md:text-[0.75rem]"
        >
          Xem chi tiết
        </Typography>
      </Button>
    </div>
  );
}
