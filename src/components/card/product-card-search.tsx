import { APP_ROUTE } from "@/config/app_route";
import { ProductCardBase } from "@/types/product";
import Link from "next/link";
import React from "react";
import { Typography } from "@/components/v2/ui/typography";
import { formatPrice } from "@/utils/format";
import Image from "next/image";
import { BasicProduct } from "@/types/v2/product";

interface ProductCardSearchProps {
  product: Pick<BasicProduct, "slug" | "name" | "featureImage" | "price">;
  onClick?: () => void;
}

export default function ProductCardSearch({
  product,
  onClick,
}: ProductCardSearchProps) {
  return (
    <div className="flex items-center justify-between gap-2 py-3 border-b border-[#ECECEC] [&:last-child]:border-b-0">
      <div className="space-y-1.5">
        <Link
          className="block"
          href={APP_ROUTE.product.bySlug(product.slug)}
          onClick={onClick}
        >
          <Typography
            fontWeight="medium"
            className="!text-[0.8125rem]/[150%] hover:!text-accent-primary line-clamp-1"
          >
            {product.name}
          </Typography>
        </Link>
        <Typography color="primary" className="!text-xs/[125%] font-medium">
          {formatPrice(
            product.price.discount
              ? product.price.discount
              : product.price.original,
          )}
        </Typography>
        {product.price.discount && (
          <Typography
            color="secondary"
            className="!text-[0.6875rem]/[125%] line-through ml-2"
          >
            {formatPrice(product.price.original)}
          </Typography>
        )}
      </div>
      <Link
        className="w-fit h-fit shrink-0"
        href={APP_ROUTE.product.bySlug(product.slug)}
        onClick={onClick}
      >
        <Image
          className="border border-[#ECECEC] rounded-sm"
          src={
            product.featureImage
              ? product.featureImage
              : "/images/gvn-logo.webp"
          }
          alt={product.name}
          width={37}
          height={37}
          sizes="37px"
        />
      </Link>
    </div>
  );
}
