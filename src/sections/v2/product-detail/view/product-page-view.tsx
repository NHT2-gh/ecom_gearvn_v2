"use client";
import React from "react";

import { BreadCrumbs } from "@/components/v2/breadcrumbs";
import { ProductInfo as ProductInfoType } from "@/types/product";
import {
  PromotionGiftItem,
  PromotionDiscountItem,
  ProductRating,
} from "@/types/response";
import {
  ProductDesc,
  ProductDetailSection,
  ProductRecommendation,
  ProductReviewSection,
} from "../sections";
import { ReviewNewsSection } from "../../collection/sections";
import { ProductDetail } from "@/types/v2/product";

interface ProductDetailPageViewProps {
  currentProduct: {
    detail: ProductDetail;
    gift: PromotionGiftItem[];
    discount: PromotionDiscountItem[];
    rating?: ProductRating;
  };
}

export default function ProductPageView({
  currentProduct,
}: ProductDetailPageViewProps) {
  return (
    <section className="w-full container min-h-[calc(100vh-100px)]">
      <BreadCrumbs
        data={[
          {
            title: currentProduct.detail.name,
          },
        ]}
      />

      <div className="w-full h-fit space-y-4 lg:space-y-0 lg:grid lg:grid-cols-[67%_1fr] lg:gap-x-4 lg:gap-y-10">
        <ProductDetailSection
          productInfo={currentProduct.detail}
          productRating={currentProduct.rating}
          promotional={{
            gift: currentProduct.gift,
            discount: currentProduct.discount,
          }}
        />
        <div className="col-span-2 xl:px-5 py-10">
          <ProductRecommendation sku={currentProduct.detail.sku} />
        </div>

        <div className="lg:flex lg:gap-8 col-span-2">
          <ProductDesc content={currentProduct.detail.desc || ""} />
          <ReviewNewsSection />
        </div>

        <div className="col-span-2 mt-4">
          <ProductReviewSection
            sku={currentProduct.detail.sku}
            rating={currentProduct.rating}
          />
        </div>
      </div>
    </section>
  );
}
