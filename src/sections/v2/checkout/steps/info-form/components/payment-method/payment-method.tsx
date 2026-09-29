/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { TermsConditions } from "./components";
import { useCheckout } from "@/hooks/use-checkout";
import PaymentMethods from "./components/payment-methods";

export default function PaymentMethod() {
  const {
    goToNextStep,
    submitOrder,
    canProceedFromCurrentStep,
    paymentMethod,
    getTotalPrice,
  } = useCheckout();

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);

  // const total = getTotalPrice();

  // const canSubmit =
  //   paymentMethod && acceptedTerms && canProceedFromCurrentStep();

  // const handleSubmitOrder = async () => {
  //   if (!canSubmit) return;

  //   setIsSubmitting(true);
  //   try {
  //     const result = await submitOrder();
  //     if (!result.success) {
  //       alert(result.error || "Có lỗi xảy ra khi đặt hàng");
  //     }
  //   } catch (error) {
  //     console.error("Order submission error:", error);
  //     alert("Có lỗi xảy ra khi đặt hàng");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <>
      {/* Main Payment Section */}
      <div className="space-y-8">
        {/* Payment Methods */}
        <PaymentMethods />

        {/* Terms and Conditions */}
        <TermsConditions />
      </div>
    </>
  );
}
