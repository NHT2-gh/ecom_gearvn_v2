"use client";

import React from "react";
import { CartItems } from "../steps";
import { useCheckout } from "@/hooks/use-checkout";
import { BreadCrumbs } from "@/components/v2/breadcrumbs";
import { StepProgressBar } from "../components/common/step-progress-bar";

const EstimatedOrder = React.lazy(
  () => import("../components/common/estimated-order/estimated-order"),
);
const Completion = React.lazy(
  () => import("../steps/completion/completion-view"),
);
const CheckoutForm = React.lazy(
  () => import("../steps/info-form/checkout-form"),
);

export default function CheckoutPageView() {
  const { currentStep } = useCheckout();

  const renderStepContent = () => {
    switch (currentStep) {
      case "cart":
        return <CartItems />;
      case "confirmAndPay":
        return (
          <React.Suspense
            fallback={<div className="p-8 text-center">Đang tải...</div>}
          >
            <CheckoutForm />
          </React.Suspense>
        );
      case "complete":
        return (
          <React.Suspense
            fallback={<div className="p-8 text-center">Đang tải...</div>}
          >
            <Completion />
          </React.Suspense>
        );

      default:
        return <CartItems />;
    }
  };

  return (
    <section className="container">
      <BreadCrumbs size="sm" data={[{ title: "Giỏ hàng" }]} />

      <StepProgressBar />

      <div className="flex gap-8 p-5 pb-10">
        <div className="grow">{renderStepContent()}</div>
        <EstimatedOrder />
      </div>
    </section>
  );
}
