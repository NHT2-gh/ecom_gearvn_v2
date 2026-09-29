import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/v2/carousel";
import { Card } from "@/components/v2/card";
import Image from "next/image";
import { CampainProduct as CampainProductType } from "@/types/v2/product";
import { ProgressBar } from "@/components/v2/card/sub-components";
import { Button } from "@/components/v2/ui/button";
import { Typography } from "@/components/v2/ui/typography";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { productService } from "@/services/product.api";
import { cn } from "@/lib/utils";

interface CampainBlockProps {
  collectionSlug?: string;
  customStyle?: {
    className?: string;
    style?: React.CSSProperties;
    imageHeader?: string;
    imageBackground?: string;
    imageHeaderTagCard?: string;
  };
}

export default async function CampainBlock({
  collectionSlug,
  customStyle,
}: CampainBlockProps) {
  const { data: campain_products } = await productService.getProductsCollection(
    collectionSlug || "man-hinh-duoi-5-trieu",
  );
  return (
    <div
      className={cn(
        "relative w-full h-fit py-10 px-6 space-y-8",
        customStyle?.className,
      )}
      style={{
        ...customStyle?.style,
        background:
          customStyle?.imageBackground ||
          "url('/images/campain/CampainBlockBackground.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <header>
        <Image
          priority
          unoptimized
          src={
            customStyle?.imageHeader ||
            "/images/campain/CampainBlockHeader.webp"
          }
          alt={"Image show campain name"}
          width={241}
          height={60}
          className="mx-auto"
        />
      </header>

      <Carousel className="max-w-full" opts={{ startIndex: 0, align: "start" }}>
        <CarouselContent className="gap-0 h-fit pt-[1rem]">
          {campain_products?.map((product, index) => (
            <CarouselItem
              key={product.id + index}
              className="max-w-fit overflow-y-visible"
            >
              <Card
                className="w-[13.6875rem] h-[20.375rem] flex-shrink-0 mx-1 border-none"
                product={product}
                custom={{
                  hearderTag: {
                    imageTag:
                      customStyle?.imageHeaderTagCard ||
                      "/images/image-tag-header-card.png",
                  },
                }}
              >
                {(product as CampainProductType).stock && (
                  <ProgressBar
                    mode="light"
                    progress={(product as CampainProductType).stock.saled || 0}
                    total={(product as CampainProductType).stock.quantity}
                  />
                )}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex bg-secondary w-[2.625rem] h-10 top-[3.75rem] right-[5.125rem] left-auto translate-none text-icon-primary disabled:opacity-30" />
        <CarouselNext className="hidden md:flex bg-secondary w-[2.625rem] h-10 top-[3.75rem] right-6 translate-none text-icon-primary  disabled:opacity-30" />
        <div className="relative">
          <CarouselDots className="-bottom-6" />
        </div>
      </Carousel>

      <Button
        color="secondary"
        className="hidden md:flex absolute h-[2.625rem] w-[8.4375rem] top-[3.75rem] right-[9.125rem]"
      >
        <Typography
          level="h6-18"
          className="text-[1rem] text-txt-primary "
          fontWeight="semibold"
        >
          Xem tất cả
        </Typography>
        <ArrowRightIcon className="w-5 h-5 text-icon-primary" />
      </Button>
    </div>
  );
}
