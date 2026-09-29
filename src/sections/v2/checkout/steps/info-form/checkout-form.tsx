/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React from "react";
import { useCheckout } from "@/hooks/use-checkout";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutSchema, CheckoutFormData } from "@/schemas/checkout-schemas";
import {
  CustomerInfoForm,
  DeliveryMethodForm,
  FormSection,
  PaymentMethod,
} from "./components";

export default function CheckoutForm() {
  const {
    deliveryMethod,
    customerInfo,
    shippingAddress,
    selectedShowroom,
    invoiceRequired,
    invoiceInfo,
    shippingService,
  } = useCheckout();

  const formData: CheckoutFormData = React.useMemo(
    () => ({
      customerInfo,
      deliveryMethod: deliveryMethod || "home",
      shippingAddress: deliveryMethod === "home" ? shippingAddress : undefined,
      selectedShowroom:
        deliveryMethod === "showroom" && selectedShowroom
          ? selectedShowroom
          : undefined,
      invoiceRequired,
      invoiceInfo: invoiceRequired ? invoiceInfo : undefined,
      shippingService:
        deliveryMethod === "home" && shippingService
          ? shippingService
          : undefined,
    }),
    [
      customerInfo,
      deliveryMethod,
      shippingAddress,
      selectedShowroom,
      invoiceRequired,
      invoiceInfo,
      shippingService,
    ],
  );

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: formData,
    mode: "onChange",
  });

  return (
    <FormProvider {...form}>
      <div className="space-y-8 col-span-2">
        {/* Customer Info Section */}
        <FormSection title="Thông tin khách hàng">
          <CustomerInfoForm />
        </FormSection>

        {/* Delivery Method Section */}
        <FormSection
          title="Phương thức giao hàng"
          description="Vui lòng chọn phương thức giao hàng"
        >
          <DeliveryMethodForm />
        </FormSection>

        {/* Shipping Service (only for home delivery) */}
        {/* {deliveryMethod === "home" && (
            <FormSection
              title="Phương thức giao hàng"
              description="Vui lòng chọn phương thức giao hàng"
            >
              <ShippingServiceSelector />
            </FormSection>
          )} */}

        {/* Invoice Section */}
        {/* <FormSection
            title="Thông tin hóa đơn"
            description="Vui lòng chọn phương thức giao hàng"
          >
            <InvoiceForm />
          </FormSection> */}

        {/* Payment Section */}
        <FormSection title="Hình thức thanh toán">
          <PaymentMethod />
        </FormSection>
      </div>
    </FormProvider>
  );
}
