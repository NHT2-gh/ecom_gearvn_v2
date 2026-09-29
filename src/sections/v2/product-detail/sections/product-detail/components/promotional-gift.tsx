import React from "react";
import { SVGGift } from "@/assets/svgs";
import {
  GiftItem,
  PromotionGiftItem,
} from "@/types/response/promotion.response";
import Link from "next/link";
import { formatPrice } from "@/utils/format";
import { APP_ROUTE } from "@/config/app_route";
import { Typography } from "@/components/v2/ui/typography";
import { useGiftProductsInfo } from "@/hooks/queries/use-products";

interface PromotionalGiftProps {
  promotion: PromotionGiftItem[];
}

export default function PromotionalGift({ promotion }: PromotionalGiftProps) {
  const listGift: GiftItem[] = promotion.flatMap((item) =>
    item.list_condition_and_gift_items.flatMap((gift) => gift.list_gift_items)
  );

  const listGiftIds = listGift.map((gift) => gift.product_id);
  const { data: listGiftInfo = [] } = useGiftProductsInfo(listGiftIds);

  return (
    <div className="w-full border border-line-tertiary">
      <header className="px-4 py-2.5 bg-secondary flex items-center gap-3">
        <SVGGift />
        <Typography
          level="h6-18"
          className="text-[1rem] text-txt-primary"
          fontWeight="semibold"
        >
          Quà tặng khuyến mãi
        </Typography>
      </header>
      <ol className="list-none p-5 space-y-3 py-3 px-6">
        {listGiftInfo.map((giftItem, index) => {
          return (
            <li key={giftItem.id}>
              <Link
                href={APP_ROUTE.product.bySlug(giftItem.handle)}
                className="promotional-item"
                data-index={index + 1}
              >
                <Typography className="!text-sm text-black hover:text-accent-primary hover:underline">
                  Tặng ngay{" "}
                  <span className="text-txt-class-red font-bold">
                    {listGift[index].quantity}
                  </span>{" "}
                  x{" "}
                  <span className="text-txt-class-red font-bold">
                    &quot;
                    {giftItem.title}
                  </span>{" "}
                  trị giá{" "}
                  <span className="text-txt-class-red font-bold">
                    {formatPrice(giftItem.variants[0].price / 100)}
                  </span>
                </Typography>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
