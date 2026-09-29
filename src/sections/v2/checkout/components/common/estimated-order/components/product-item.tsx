import React from "react";
import Image from "next/image";
import { CartItem } from "@/types/v2/cart";
import { formatPrice } from "@/utils/format";
import { Typography } from "@/components/v2/ui/typography";

interface ProductItemProps {
  item: CartItem;
}

export default function ProductItem({ item }: ProductItemProps) {
  return (
    <div key={item.id} className="space-y-2">
      <div className="flex items-center gap-5">
        <Image
          unoptimized
          src={item.featureImage || "/images/gvn-logo.webp"}
          alt={item.name}
          width={72}
          height={72}
        />
        <div className="space-y-2">
          <Typography
            level="body-14"
            fontWeight="semibold"
            className="text-txt-primary"
          >
            {item.name}
          </Typography>

          <Typography className="text-txt-secondary">
            {item.variant.attributes.map((attr) => attr.value).join(" - ")}
          </Typography>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <Typography
          level="body-15"
          className="border border-stroke-primary px-2.5 py-1"
        >
          Số lượng: {item.quantity}
        </Typography>

        <div>
          {item.price.discount && (
            <Typography className="text-txt-secondary line-through">
              {formatPrice(item.price.original)}
            </Typography>
          )}
          <Typography
            level="h6-18"
            fontWeight="semibold"
            className="text-[1rem] text-txt-primary"
          >
            {formatPrice(item.price.discount ?? item.price.original)}
          </Typography>
        </div>
      </div>
    </div>
  );
}
