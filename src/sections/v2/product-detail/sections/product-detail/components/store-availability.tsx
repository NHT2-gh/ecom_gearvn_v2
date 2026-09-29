import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/v2/carousel";
import { Button } from "@/components/v2/ui/button";
import { Typography } from "@/components/v2/ui/typography";
import { Store } from "@/types/v2/store";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function StoreAvailability({ stores }: { stores: Store[] }) {
  return (
    <div className="max-w-full border border-line-tertiary">
      <header className="px-4 py-2.5 bg-secondary flex items-center gap-3">
        <Typography
          level="h6-18"
          className="text-[1rem] text-txt-primary"
          fontWeight="semibold"
        >
          Chi nhánh có sản phẩm
        </Typography>
      </header>
      <div className="py-5 px-4 space-y-3">
        <div className="flex items-center">
          <Typography level="body-14">
            Có <strong>{stores.length}</strong> cửa hàng có sản phẩm
          </Typography>
        </div>
        <Carousel
          className="relative w-full "
          opts={{ startIndex: 0, align: "start" }}
        >
          <CarouselContent className="gap-2">
            {stores.map((store) => (
              <CarouselItem
                key={store.name}
                className="cursor-pointer max-w-[203px] min-h-full"
              >
                <div className="h-full p-3 border border-stroke-primary bg-primary flex flex-col gap-y-1.5 justify-between">
                  <Typography level="body-14" className="text-txt-primary">
                    {store.address}
                  </Typography>

                  <div className="flex gap-2">
                    <Button
                      variant={"surface"}
                      size={"sm"}
                      className="border-none"
                    >
                      <PhoneIcon className="w-4 h-4 text-icon-red-active" />
                      <Typography className="text-txt-button-red">
                        {store.phone}
                      </Typography>
                    </Button>

                    <Button variant={"outline"} color="secondary" size={"sm"}>
                      <MapPinIcon className="w-4 h-4" />
                      <Typography className="text-txt-primary">
                        Bản đồ
                      </Typography>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="size-6 bg-primary top-1/2 rounded-full -translate-y-1/2 left-0 text-icon-primary disabled:hidden" />
          <CarouselNext className="size-6 bg-primary top-1/2 rounded-full -translate-y-1/2 right-0 text-icon-primary disabled:hidden" />
        </Carousel>
      </div>
    </div>
  );
}
