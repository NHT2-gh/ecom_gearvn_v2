"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { CheckoutFormData } from "@/schemas/checkout-schemas";
import { FormField } from "@/components/v2/form";

export default function CustomerInfoForm() {
  const {
    formState: { errors },
  } = useFormContext<CheckoutFormData>();

  return (
    <div className="grid grid-cols-2 gap-x-[0.875rem] gap-y-3">
      <FormField
        name="customerInfo.fullName"
        fieldType="input"
        fieldConfig={{
          type: "text",
        }}
        options={{
          label: "Họ và tên",
          required: true,
          message: {
            type: errors.customerInfo?.fullName?.message ? "error" : "success",
            text: errors.customerInfo?.fullName?.message || "",
          },
        }}
      />

      <FormField
        name="customerInfo.phone"
        fieldType="input"
        fieldConfig={{
          type: "text",
        }}
        options={{
          label: "Số điện thoại",
          required: true,
          message: {
            type: errors.customerInfo?.phone?.message ? "error" : "success",
            text: errors.customerInfo?.phone?.message || "",
          },
        }}
      />

      <FormField
        name="customerInfo.email"
        className="col-span-2"
        fieldType="input"
        fieldConfig={{
          type: "text",
        }}
        options={{
          label: "Email",
          required: true,
          message: {
            type: errors.customerInfo?.email?.message ? "error" : "success",
            text: errors.customerInfo?.email?.message || "",
          },
        }}
      />
    </div>
  );
}
