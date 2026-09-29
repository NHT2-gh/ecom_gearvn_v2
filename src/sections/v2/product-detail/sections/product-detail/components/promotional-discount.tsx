import React from "react";
import Link from "next/link";
import { APP_ROUTE } from "@/config/app_route";
import { Button } from "@/components/v2/ui/button";
import { PromotionDiscountItem } from "@/types/response";
import { Typography } from "@/components/v2/ui/typography";
import { ChevronDownIcon, GiftIcon } from "@heroicons/react/24/outline";

interface DiscountItem {
  title: string;
  link: string;
}

export default function PromotinalDiscount({
  promotion,
}: {
  promotion: PromotionDiscountItem[];
}) {
  const discountItems: DiscountItem[] = promotion.map((item) => {
    const _idDiscountItem = item._id;
    const _idItemGroup = item.item_groups.find(
      (group) => group.item_type === "ITEM_DISCOUNT"
    )?._id;
    return {
      title: item.title,
      link: `${APP_ROUTE.collection.byCate(
        "chuong-trinh-khuyen-mai"
      )}/?id=${_idDiscountItem}&item_group_id=${_idItemGroup}`,
    };
  });

  const [visibleItems, setVisibleItems] = React.useState(3);

  return (
    <div className="w-full border border-line-tertiary">
      <header className="px-4 py-2.5 bg-secondary ">
        <Typography
          level="h6-18"
          className="text-[1rem] text-txt-primary"
          fontWeight="semibold"
        >
          Quà tặng và ưu đãi khác
        </Typography>
      </header>

      <div className="px-4 py-5 space-y-5">
        <ol className="list-none space-y-3">
          {discountItems.slice(0, visibleItems).map((item, index) => {
            return (
              <li key={index}>
                <div className="!text-sm text-black flex gap-3">
                  <GiftIcon
                    width={18}
                    height={18}
                    fill="var(--icon-tertiary)"
                    stroke="var(--bg-primary)"
                    className="shrink-0"
                  />

                  <Typography level="paragraph-14">
                    {item.title}

                    <Link
                      href={item.link}
                      className="ml-2 text-blue-400 hover:underline"
                    >
                      <Button variant={"plain"} color="info">
                        Xem chi tiết
                      </Button>
                    </Link>
                  </Typography>
                </div>
              </li>
            );
          })}
        </ol>

        {discountItems.length > visibleItems && (
          <div className="flex items-center justify-center">
            <Button
              size={"sm"}
              variant="outline"
              color="secondary"
              onClick={() => setVisibleItems(discountItems.length)}
            >
              Xem thêm {discountItems.length - visibleItems} ưu đãi khác
              <ChevronDownIcon className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
