"use client";
import React from "react";
import { IconKey } from "@/utils/icon-map";
import { useCheckout } from "@/hooks/use-checkout";

import { StepProgressItem } from "./components";
import { CheckoutStep } from "@/types/v2/checkout";

const steps: {
  key: CheckoutStep;
  icon: IconKey;
  label: string;
}[] = [
  {
    key: "cart",
    icon: "shoppingCart",
    label: "Giỏ hàng",
  },
  {
    key: "confirmAndPay",
    icon: "infoCircle",
    label: "Xác nhận & Thanh toán",
  },

  {
    key: "complete",
    icon: "checkBadge",
    label: "Theo dõi đơn hàng",
  },
];

export default function StepProgressBar() {
  const { currentStep, canGoToStep, goToStep } = useCheckout();

  return (
    <div className="flex items-center gap-[13.125rem] px-5">
      {steps.map((step, index) => (
        <StepProgressItem
          key={step.key}
          step={step}
          active={steps.findIndex((s) => s.key === currentStep) >= index}
          // completed={completionStatus[step.key]}
          onSelect={() => canGoToStep(step.key) && goToStep(step.key)}
        />
      ))}
    </div>
  );
}
