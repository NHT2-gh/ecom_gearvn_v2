"use client";

import React from "react";
import { useCheckout } from "@/hooks/use-checkout";
import { cn } from "@/lib/utils";

import { Typography } from "@/components/v2/ui/typography";
import {
  BuildingOfficeIcon,
  CreditCardIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

// Payment methods data
const paymentMethods = [
  {
    id: "cod",
    name: "Thanh toán khi giao hàng (COD)",
    description: "Thanh toán bằng tiền mặt khi nhận hàng",
    icon: <TruckIcon className="w-6 h-6" />,
    fee: 0,
    available: true,
    popular: true,
  },
  {
    id: "payoo",
    name: "Thanh toán online qua Cổng thanh toán Payoo",
    description: "Thanh toán qua thẻ ATM, Visa, MasterCard, JCB",
    icon: <CreditCardIcon className="w-6 h-6" />,

    fee: 0,
    available: true,
  },
  {
    id: "vnpay",
    name: "Thanh toán qua VNPay",
    logo: "/images/payment-method/mini-logo-vnpay.webp",
    fee: 0,
    available: true,
  },
  {
    id: "momo",
    name: "Thanh toán qua MoMo",
    logo: "/images/payment-method/mini-logo-momo.webp",
    fee: 0,
    available: true,
  },
  {
    id: "zalopay",
    name: "Thanh toán qua ZaloPay",
    logo: "/images/payment-method/mini-logo-zalopay.webp",
    fee: 0,
    available: true,
  },
  {
    id: "bank_transfer",
    name: "Chuyển khoản ngân hàng",
    description: "Chuyển khoản trực tiếp qua ngân hàng",
    icon: <BuildingOfficeIcon className="w-6 h-6" />,
    fee: 0,
    available: false,
  },
];

export default function PaymentMethods() {
  const { paymentMethod, setPaymentMethod } = useCheckout();
  const [selectedMethod, setSelectedMethod] = React.useState(
    paymentMethod?.id || "cod"
  );

  const handleMethodSelect = React.useCallback(
    (methodId: string) => {
      const method = paymentMethods.find((m) => m.id === methodId);
      if (method && method.available) {
        setSelectedMethod(methodId);
        setPaymentMethod({
          id: methodId,
          name: method.name,
          type: methodId as
            | "cod"
            | "bank_transfer"
            | "momo"
            | "vnpay"
            | "zalopay",
          description: method.description,
          fee: method.fee,
        });
      }
    },
    [setPaymentMethod]
  );

  React.useEffect(() => {
    // Set default payment method to COD
    if (!paymentMethod) {
      handleMethodSelect("cod");
    }
  }, [paymentMethod, handleMethodSelect]);

  return (
    <div className="space-y-4">
      {paymentMethods.map((method) => {
        const isSelected = selectedMethod === method.id;
        const isAvailable = method.available;

        return (
          <div
            key={method.id}
            onClick={() => isAvailable && handleMethodSelect(method.id)}
            className={cn(
              "relative border border-stroke-primary px-3 py-2 cursor-pointer transition-all duration-200",
              {
                "border-stroke-red bg-red-subtle5": isSelected && isAvailable,
              }
            )}
          >
            <div className="flex items-center gap-4">
              {/* Method Icon/Logo */}

              {method.logo ? (
                <div
                  className={cn(
                    "size-10 shrink-0 bg-secondary flex items-center justify-center"
                  )}
                >
                  <img
                    src={method.logo}
                    alt={method.name}
                    className="size-10 object-cover"
                  />
                </div>
              ) : (
                <div
                  className={cn(
                    "size-10 shrink-0 bg-secondary flex items-center justify-center",
                    { "bg-red-subtle4 text-icon-red-active": isSelected }
                  )}
                >
                  {method.icon}
                </div>
              )}

              {/* Method Info */}
              <div className="flex-1 min-w-0">
                <Typography
                  level="body-15"
                  fontWeight="semibold"
                  className="text-[#0E1829]"
                >
                  {method.name}
                </Typography>
                {method.description && (
                  <Typography level="body-13" className="text-txt-secondary">
                    {method.description}
                  </Typography>
                )}
                {method.fee > 0 && (
                  <Typography level="body-13" className="text-orange-600 mt-1">
                    Phí: {method.fee.toLocaleString()}đ
                  </Typography>
                )}
              </div>

              {/* Radio Button */}
              <div
                className={cn(
                  "w-5 h-5 ml-auto rounded-full border-[1.25px] border-stroke-tertiary flex items-center justify-center",
                  { "border-[2.5px] border-icon-red-active": isSelected }
                )}
              >
                {isSelected && isAvailable && (
                  <div className="w-1.5 h-1.5 bg-icon-red-active rounded-full" />
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
