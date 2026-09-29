import { SVGGift } from "@/assets/svgs/v2";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/v2/carousel";
import { Typography } from "@/components/v2/ui/typography";
import { cn } from "@/lib/utils";
import { Voucher } from "@/types/v2/voucher";
import { TagIcon } from "@heroicons/react/24/outline";

import React from "react";

interface Vouchers {
  vouchers: Voucher[];
}

export default function Vouchers({ vouchers }: Vouchers) {
  const [voucherActive, setVoucherActive] = React.useState<string>("");
  return (
    <div className="max-w-full bg-subtle-fuchsia space-y-5 px-3 py-[0.875rem] border border-fuchsia-300">
      <header className="flex gap-2.5 items-center">
        <TagIcon className="w-5 h-5 text-fuchsia-600" />
        <Typography level="h6-18" fontWeight="bold" className="text-[1rem]">
          Voucher
        </Typography>
      </header>

      <Carousel
        className="relative max-w-full "
        opts={{ startIndex: 0, align: "start" }}
      >
        <CarouselContent className="gap-2">
          {vouchers.map((voucher) => (
            <CarouselItem
              key={voucher.code}
              className="cursor-pointer max-w-[205px]"
            >
              <div
                className={cn("bg-white border border-line-tertiary", {
                  "border-fuchsia-500": voucherActive === voucher.code,
                })}
                onClick={() => setVoucherActive(voucher.code)}
              >
                <div
                  className={cn("px-3 py-1 border-b border-line-tertiary", {
                    "border-fuchsia-500 bg-fuchsia-500 text-white":
                      voucherActive === voucher.code,
                  })}
                >
                  <Typography level="body-14" fontWeight="semibold">
                    {voucher.code}
                  </Typography>
                </div>
                <div className="px-3 py-2.5">
                  <ul className="list-disc list-inside">
                    {voucher.detail.map((detail, index) => (
                      <li
                        key={index}
                        className="text-xs/[140%] text-txt-primary"
                      >
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="size-6 bg-primary top-1/2 rounded-full -translate-y-1/2 left-0 text-icon-primary disabled:hidden" />
        <CarouselNext className="size-6 bg-primary top-1/2 rounded-full -translate-y-1/2 right-0 text-icon-primary disabled:hidden" />
      </Carousel>
    </div>
  );
}
