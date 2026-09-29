"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";
import { deliveryOptions } from "@/_mocks";
import { useCheckout } from "@/hooks/use-checkout";
import { Typography } from "@/components/v2/ui/typography";
import { AddressSelector, ShowroomSelector } from "./sub-component";

export default function DeliveryMethodForm() {
  const { deliveryMethod, setDeliveryMethod } = useCheckout();

  return (
    <div>
      {/* Delivery Method Selection */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {deliveryOptions.map((option) => {
          const Icon = option.icon;
          const isSelected = deliveryMethod === option.value;

          return (
            <div
              key={option.value}
              onClick={() => setDeliveryMethod(option.value)}
              className={cn(
                "relative flex items-center gap-3 px-3 py-2 border border-stroke-primary cursor-pointer hover:shadow-sm transition-all duration-200",

                {
                  "bg-red-subtle5 border-stroke-red-subtle hover:border-stroke-secondary ":
                    isSelected,
                },
              )}
            >
              <div
                className={cn("p-2 bg-secondary text-icon-tertiary", {
                  "bg-red-subtle4 text-red-600": isSelected,
                })}
              >
                <Icon className="w-6 h-6" />
              </div>

              <div className="space-y-2">
                <Typography level="body-15">{option.title}</Typography>
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <Typography level="body-13" className="text-txt-secondary">
                    {option.estimatedTime}
                  </Typography>
                </div>
              </div>

              {/* Estimated Time */}

              <div
                className={cn(
                  "w-5 h-5 ml-auto rounded-full border-[1.25px] border-stroke-tertiary flex items-center justify-center",
                  { "border-[2.5px] border-icon-red-active": isSelected },
                )}
              >
                {isSelected && (
                  <div className="w-1.5 h-1.5 bg-icon-red-active rounded-full" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Conditional Forms */}
      {deliveryMethod && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          {deliveryMethod === "home" && <AddressSelector />}

          {deliveryMethod === "showroom" && <ShowroomSelector />}
        </div>
      )}
    </div>
  );
}
