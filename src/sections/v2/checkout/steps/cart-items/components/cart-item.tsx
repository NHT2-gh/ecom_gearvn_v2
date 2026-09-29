import React from "react";
import Image from "next/image";
import { SVGTrash } from "@/assets/svgs/v2";
import { formatPrice } from "@/utils/format";
import { CartItem as CartItemType } from "@/types/v2/cart";
import { Typography } from "@/components/v2/ui/typography";
import { Checkbox, Input } from "@/components/v2/ui/input";

interface CartItemProps {
  item: CartItemType;
  onChange?: (item: CartItemType) => void;
}

export default function CartItem({ item, onChange }: CartItemProps) {
  return (
    <article role="listitem" className="w-full flex items-center gap-5">
      <Checkbox
        onChange={() => {
          onChange?.({ ...item, isSelected: !item.isSelected });
        }}
        checked={item.isSelected}
      >
        <div className="flex items-center gap-5">
          <Image
            src={item.featureImage || "/images/gvn-logo.webp"}
            alt={item.name}
            width={72}
            height={72}
            sizes="72px"
            className="object-contain object-center"
          />
          <div>
            <div className="space-y-2">
              <Typography
                level="body-14"
                fontWeight="semibold"
                className="text-txt-primary max-w-[370px] line-clamp-2"
              >
                {item.name}
              </Typography>

              <Typography level="body-12" className="text-txt-secondary">
                {item.variant.attributes.map((attr) => attr.value).join(" - ")}
              </Typography>
            </div>
          </div>

          <div className="">
            {item.price.discount && (
              <Typography className="text-txt-secondary line-through">
                {formatPrice(item.price.original)}
              </Typography>
            )}
            <Typography
              level="h6-18"
              fontWeight="semibold"
              className="text-txt-primary"
            >
              {formatPrice(item.price.discount ?? item.price.original)}
            </Typography>

            {item.price.discount && (
              <Typography level="body-12" className="text-txt-button-red">
                Giảm {formatPrice(item.price.original - item.price.discount)}
              </Typography>
            )}
          </div>

          <Input
            controlValue
            defaultValue={item.quantity.toString()}
            type="number"
            min={1}
            handleOnChange={(value) =>
              onChange?.({ ...item, quantity: Number(value) })
            }
          />

          <button className="group">
            <SVGTrash size={24} stroke="var(--icon-secondary)" />
          </button>
        </div>
      </Checkbox>
    </article>
  );
}
