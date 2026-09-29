import { Typography } from "@/components/v2/ui/typography";
import { useCheckout } from "@/hooks/use-checkout";
import { formatPrice } from "@/utils/format";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  TagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export default function PriceBreakdown() {
  const {
    total,
    subtotal,
    cartItems,
    shippingFee,
    productDiscount,
    voucherDiscount,
    appliedVouchers,
    deliveryMethod,
  } = useCheckout();

  const [expanded, setExpanded] = React.useState(appliedVouchers.length <= 2);

  return (
    <div className="">
      {/* Subtotal */}
      <div className="py-3 flex justify-between items-center">
        <Typography level="body-14" className="text-txt-secondary">
          Tổng tiền hàng ({cartItems.length})
        </Typography>
        <Typography
          level="h6-18"
          fontWeight="semibold"
          className="text-[1rem] text-txt-primary"
        >
          {formatPrice(subtotal)}
        </Typography>
      </div>

      <div className="space-y-3 border-t border-stroke-primary py-3">
        {/* Discount Section */}
        <div className="flex justify-between items-center text-[0.9375rem]">
          <Typography level="body-14" className="text-txt-secondary">
            Khuyến mãi đi kèm
          </Typography>
          <Typography
            level="h6-18"
            fontWeight="medium"
            className="text-[1rem] text-txt-primary"
          >
            -{formatPrice(productDiscount + voucherDiscount)}
          </Typography>
        </div>

        {expanded && (
          <>
            {/* Detailed Discount breakdown */}
            <ul className="space-y-2 pl-4 list-disc list-inside">
              <li className="flex justify-between items-center text-[0.875rem] text-txt-secondary">
                <Typography level="body-14" className="text-txt-secondary">
                  Giảm giá sản phẩm
                </Typography>
                <Typography
                  level="h6-18"
                  fontWeight="medium"
                  className="text-[1rem] text-txt-primary"
                >
                  -{formatPrice(productDiscount)}
                </Typography>
              </li>
              <li className="flex justify-between items-center text-[0.875rem] text-txt-secondary">
                <Typography level="body-14" className="text-txt-secondary">
                  Mã giảm giá
                </Typography>
                <Typography
                  level="h6-18"
                  fontWeight="medium"
                  className="text-[1rem] text-txt-primary"
                >
                  -{formatPrice(voucherDiscount)}
                </Typography>
              </li>
            </ul>

            {/* Mock Applied Coupons */}
            <div className="space-y-2 pt-1">
              {appliedVouchers.map((voucher, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2  border border-stroke-primary bg-white"
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <TagIcon
                      width={24}
                      height={24}
                      className="text-icon-tertiary shrink-0"
                    />
                    <Typography
                      fontWeight="semibold"
                      className="text-txt-primary truncate"
                    >
                      {voucher.code}
                    </Typography>
                  </div>
                  <button className="text-icon-primary hover:text-txt-secondary">
                    <XMarkIcon strokeWidth={2} width={14} height={14} />
                  </button>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Toggle Expand */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-end gap-1 text-[0.875rem] text-txt-button-link font-medium hover:underline mt-1"
        >
          {expanded ? "Rút gọn" : "Xem chi tiết"}
          {expanded ? (
            <ChevronUpIcon width={16} height={16} />
          ) : (
            <ChevronDownIcon width={16} height={16} />
          )}
        </button>
      </div>

      {deliveryMethod !== null && (
        <div className="flex justify-between items-center border-t border-stroke-primary py-3">
          <Typography level="body-14" className="text-txt-secondary">
            Phí vận chuyển
          </Typography>
          <Typography
            level="h6-18"
            fontWeight="semibold"
            className="text-[1rem] text-txt-primary"
          >
            {formatPrice(shippingFee)}
          </Typography>
        </div>
      )}

      <div className="flex justify-between items-end border-t border-stroke-primary py-5">
        <Typography
          level="h6-18"
          fontWeight="semibold"
          className="text-txt-primary text-[1.125rem]"
        >
          Tổng cộng
        </Typography>
        <Typography
          level="h5-20"
          fontWeight="bold"
          className="text-[1.25rem] text-txt-button-red"
        >
          {formatPrice(total)}
        </Typography>
      </div>
    </div>
  );
}
