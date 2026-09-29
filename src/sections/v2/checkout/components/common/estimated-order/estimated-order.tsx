"use client";

import React from "react";
import { formatPrice } from "@/utils/format";
import { useCheckout } from "@/hooks/use-checkout";
import { Typography } from "@/components/v2/ui/typography";
import { Button } from "@/components/v2/ui/button";
import Input from "@/components/v2/ui/input/input";
import {
  ChevronRightIcon,
  TagIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";
import { PriceBreakdown, ProductItem } from "./components";
import Image from "next/image";

export default function EstimatedOrder() {
  const {
    total,
    cartItems,
    calculateTotals,
    goToNextStep,
    getCurrentStepIndex,
  } = useCheckout();

  React.useEffect(() => {
    calculateTotals();
  }, [cartItems, calculateTotals]);

  const currentStepIndex = getCurrentStepIndex();

  return (
    <div className="w-[400px] border border-stroke-primary p-6 bg-white h-fit">
      <div className="space-y-5">
        {/* Header */}
        <Typography
          level="h5-20"
          fontWeight="semibold"
          className="text-[1.25rem] text-txt-primary"
        >
          {currentStepIndex === 0 ? "Đơn hàng tạm tính" : "Đơn hàng của bạn"}
        </Typography>
        {currentStepIndex !== 0}
        <div className="space-y-2">
          {cartItems.map((item) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>

        {/* Coupon Input */}
        {currentStepIndex === 0 && (
          <div className="flex gap-2">
            <Input
              type="text"
              icon={{
                left: (
                  <TagIcon
                    className="text-icon-tertiary"
                    width={24}
                    height={24}
                  />
                ),
              }}
              placeholder="Mã giảm giá"
              className="w-full"
            />

            <Button color="secondary" className="h-10">
              Áp dụng
            </Button>
          </div>
        )}

        {/* Coupon Select Button */}
        {currentStepIndex === 0 && (
          <button className="w-full flex items-center justify-between p-3 bg-secondary hover:bg-neutral-200 transition-colors group">
            <div className="flex items-center gap-2">
              <TicketIcon
                className="stroke-secondary [&_path]:fill-icon-red-active group-hover:stroke-neutral-200"
                width={24}
                height={24}
              />
              <Typography level="body-14" className="text-txt-primary">
                Chọn mã giảm giá
              </Typography>
            </div>
            <ChevronRightIcon
              width={24}
              height={24}
              className="text-icon-primary group-hover:text-icon-secondary"
            />
          </button>
        )}

        {/* Price Breakdown */}
        <PriceBreakdown />

        {/* Total & CTA */}

        <Button
          color="primary"
          size={"lg"}
          className="w-full"
          onClick={goToNextStep}
          disabled={cartItems.length === 0}
        >
          {currentStepIndex === 0 ? "Xác nhận đơn hàng" : "Đặt hàng"}
        </Button>

        <div className="text-center">
          <Typography className="text-[0.875rem] text-txt-secondary">
            Cần hỗ trợ? Gọi{" "}
            <span className="text-txt-button-red font-semibold cursor-pointer hover:underline">
              1900-xxxx
            </span>
          </Typography>
        </div>
      </div>
    </div>
  );
}
