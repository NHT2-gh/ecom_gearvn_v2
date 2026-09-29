"use client";

import { useCheckoutStore } from "@/stores/checkout-store";
import { checkoutSchema } from "@/schemas/checkout-schemas";
import { CartItem } from "@/types/v2/cart";

export const useCheckout = () => {
  const store = useCheckoutStore();

  const CHECKOUT_STEPS = ["cart", "confirmAndPay", "complete"] as const;

  const stepFields = {
    customer: [
      "customerInfo.fullName",
      "customerInfo.phone",
      "customerInfo.email",
    ],
    // shipping: ["shippingAddress", "shipping.city"],
    // payment: ["payment.method"],
  };

  const getCurrentStepIndex = () => {
    return CHECKOUT_STEPS.indexOf(store.currentStep);
  };

  const canProceedFromCurrentStep = () => {
    switch (store.currentStep) {
      case "cart":
        return store.cartItems.length > 0;
      case "confirmAndPay":
        // Use comprehensive schema validation for shipping step
        const shippingFormData = {
          customerInfo: store.customerInfo,
          deliveryMethod: store.deliveryMethod || "home",
          shippingAddress:
            store.deliveryMethod === "home" ? store.shippingAddress : undefined,
          selectedShowroom:
            store.deliveryMethod === "showroom" && store.selectedShowroom
              ? store.selectedShowroom
              : undefined,
          invoiceRequired: store.invoiceRequired,
          invoiceInfo: store.invoiceRequired ? store.invoiceInfo : undefined,
          shippingService:
            store.deliveryMethod === "home" && store.shippingService
              ? store.shippingService
              : undefined,
        };

        try {
          checkoutSchema.parse(shippingFormData);
          return true;
        } catch {
          return false;
        }
      case "complete":
        return true;
      default:
        return false;
    }
  };

  const goToNextStep = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex < CHECKOUT_STEPS.length - 1) {
      store.setCurrentStep(CHECKOUT_STEPS[currentIndex + 1]);
      return true;
    }
    return false;
  };

  const goToPreviousStep = () => {
    const currentIndex = getCurrentStepIndex();
    if (currentIndex > 0) {
      store.setCurrentStep(CHECKOUT_STEPS[currentIndex - 1]);
      return true;
    }
    return false;
  };

  const canGoToStep = (targetStep: (typeof CHECKOUT_STEPS)[number]) => {
    const targetIndex = CHECKOUT_STEPS.indexOf(targetStep);
    const currentIndex = getCurrentStepIndex();
    return targetIndex <= currentIndex;
  };

  const goToStep = (step: (typeof CHECKOUT_STEPS)[number]) => {
    if (canGoToStep(step)) {
      store.setCurrentStep(step);
      return true;
    }
    return false;
  };

  const getStepCompletionStatus = () => {
    // Use the same validation logic as canProceedFromCurrentStep
    const shippingFormData = {
      customerInfo: store.customerInfo,
      deliveryMethod: store.deliveryMethod || "home",
      shippingAddress:
        store.deliveryMethod === "home" ? store.shippingAddress : undefined,
      selectedShowroom:
        store.deliveryMethod === "showroom" && store.selectedShowroom
          ? store.selectedShowroom
          : undefined,
      invoiceRequired: store.invoiceRequired,
      invoiceInfo: store.invoiceRequired ? store.invoiceInfo : undefined,
      shippingService:
        store.deliveryMethod === "home" && store.shippingService
          ? store.shippingService
          : undefined,
    };

    let shippingValid = false;
    try {
      checkoutSchema.parse(shippingFormData);
      shippingValid = true;
    } catch {
      shippingValid = false;
    }

    return {
      cart: store.cartItems.length > 0,
      shipping: shippingValid,
      payment: !!store.paymentMethod,
      completion: !!store.orderId,
    };
  };

  const getTotalPrice = () => {
    return store.cartItems.reduce((total, item) => {
      const price = item.price.discount || item.price.original;
      return total + price * item.quantity;
    }, 0);
  };

  const submitOrder = async () => {
    try {
      // Simulate API call
      const orderId = `GVN${Date.now()}`;
      await new Promise((resolve) => setTimeout(resolve, 1000));

      store.setOrderId(orderId);
      store.setOrderStatus("confirmed");
      store.setCurrentStep("complete");

      return { success: true, orderId };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Đã có lỗi xảy ra",
      };
    }
  };

  return {
    ...store,
    getCurrentStepIndex,
    canProceedFromCurrentStep,
    goToNextStep,
    goToPreviousStep,
    canGoToStep,
    goToStep,
    getStepCompletionStatus,
    getTotalPrice,
    submitOrder,
    CHECKOUT_STEPS,
    stepFields,
  };
};
