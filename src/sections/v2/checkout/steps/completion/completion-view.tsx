"use client";

import React from "react";
import { useCheckout } from "@/hooks/use-checkout";
import { useRouter } from "next/navigation";
import { APP_ROUTE } from "@/config/app_route";
import { SVGCheckCircle } from "@/assets/svgs/v2";
import { Typography } from "@/components/v2/ui/typography";
import { Button } from "@/components/v2/ui/button";

export default function CompletionView() {
  const {
    orderId,
    customerInfo,
    deliveryMethod,
    shippingAddress,
    selectedShowroom,
    paymentMethod,
    total,
    resetCheckout,
  } = useCheckout();
  const router = useRouter();
  const handleContinueShopping = () => {
    resetCheckout();
    router.push(APP_ROUTE.homepage);
  };

  const handleViewOrder = () => {
    if (orderId) {
      router.push(`/account?tab=order-management`);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <SVGCheckCircle className="size-[4rem] mx-auto" />

        <Typography
          fontWeight="semibold"
          level="h5-20"
          className="text-[1.125rem] text-txt-primary"
        >
          Đặt hàng thành công!
        </Typography>

        <Typography level="body-14" className="text-txt-secondary">
          Mã đơn hàng: {orderId || "ABC123456"}
        </Typography>
      </div>

      <div className="flex justify-center gap-6">
        <Button
          variant="outline"
          color="secondary"
          size={"lg"}
          onClick={handleViewOrder}
          className="w-[18rem]"
        >
          Tra cứu đơn hàng
        </Button>
        <Button
          size={"lg"}
          onClick={handleContinueShopping}
          className="w-[18rem]"
        >
          Tiếp tục mua sắm
        </Button>
      </div>
    </div>
  );
}
