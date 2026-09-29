"use client";
import { BasicProduct } from "@/types/v2/product";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/v2/carousel";
import { Card } from "@/components/v2/card";

interface CarouselProductsProps {
  products: BasicProduct[];
}

export default function CarouselProducts({ products }: CarouselProductsProps) {
  return (
    <Carousel
      className="max-w-full"
      opts={{ loop: true, startIndex: 0, align: "start" }}
    >
      <CarouselContent className="gap-0">
        {products?.map((product, index) => (
          <CarouselItem key={product.id + index} className="max-w-fit">
            <Card
              className="w-[10.375rem] md:w-[13.0625rem] lg:w-[13.6875rem] h-full flex-shrink-0 mx-1 md:mx-2.5"
              product={product}
              actionButtons={{
                onAddToCart: () => console.log("Add to cart", product.id),
                onViewDetail: () => console.log("View detail", product.id),
              }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex w-[2.625rem] h-10 top-0 right-[5.125rem] left-auto translate-none text-icon-primary disabled:text-tertiary" />
      <CarouselNext className="hidden md:flex w-[2.625rem] h-10 top-0 right-6 translate-none text-icon-primary disabled:text-tertiary" />
      <div className="relative">
        <CarouselDots className="-bottom-6" />
      </div>
    </Carousel>
  );
}
