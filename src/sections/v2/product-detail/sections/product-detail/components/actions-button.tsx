import React from "react";
import { SVGZalo } from "@/assets/svgs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/v2/ui/button";
import { Typography } from "@/components/v2/ui/typography";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

interface ActionsButtonProps {
  available: boolean;
  handleBuyNow: () => void;
  handleConsult: () => void;
}

export default function ActionsButton({
  available,
  handleBuyNow,
  handleConsult,
}: ActionsButtonProps) {
  return (
    <div className="w-full flex gap-3 md:gap-2">
      <Button
        color="primary"
        size="xl"
        className="grow flex-col h-[3.25rem] gap-0 md:flex-1"
        onClick={handleBuyNow}
        disabled={!available}
      >
        <Typography level="body-15" fontWeight="semibold">
          {available ? "Mua ngay" : "Tạm hết hàng"}
        </Typography>
        <Typography level="body-12" className="hidden md:block">
          {available
            ? "Giao tận nơi/Nhận tại cửa hàng"
            : "Tìm mẫu tương tự ngay 👇🏻"}
        </Typography>
      </Button>

      <Button
        size="xl"
        color="secondary"
        className="flex-col h-[3.25rem] gap-0 flex-1"
        onClick={handleConsult}
      >
        <Typography
          level="body-15"
          fontWeight="semibold"
          className="inline-flex items-center gap-2 text-txt-primary"
        >
          <SVGZalo width={24} height={24} className="hidden md:block" />
          Tư vấn ngay
        </Typography>
        <Typography
          level="body-12"
          className="text-txt-secondary hidden md:block"
        >
          Màn &quot;chuẩn gu&quot; làm việc & giải trí
        </Typography>
      </Button>

      <Button className="flex size-[3.25rem] rounded-sm bg-invert shrink-0">
        <ShoppingCartIcon width={20} height={20} />
      </Button>
    </div>
  );
}
