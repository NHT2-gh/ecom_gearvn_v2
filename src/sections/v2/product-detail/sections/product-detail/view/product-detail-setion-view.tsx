import React, { useState } from "react";
import {
  ActionsButton,
  ProductGallery,
  ProductInfo,
  ProductVariants,
  PromotionalGift,
  PromotionalDiscount,
  ProductInfoTabs,
  Vouchers,
  StoreAvailability,
} from "../components";
import {
  ProductRating,
  PromotionDiscountItem,
  PromotionGiftItem,
} from "@/types/response";
import { _stores_availability, _variants, _vouchers } from "@/_mocks";
import { ProductDetail } from "@/types/v2/product";

interface ProductDetailSectionProps {
  productInfo: ProductDetail;
  productRating?: ProductRating;
  promotional?: {
    gift: PromotionGiftItem[];
    discount: PromotionDiscountItem[];
  };
}

export default function ProductDetailSetion({
  productInfo,
  productRating,
  promotional,
}: ProductDetailSectionProps) {
  const [currentVariant, setCurrentVariant] = useState(_variants[0]);
  return (
    <div className="w-full space-y-5 lg:grid lg:grid-cols-[34.75rem_1fr] lg:grid-rows-[28.5625rem_1fr] xl:grid-cols-[41.25rem_1fr] lg:gap-x-10 lg:gap-y-8 lg:col-span-2">
      {/* <div className="w-full shrink-0 space-y-8 lg:w-[55%] py-4"> */}
      <div
        aria-label="Ảnh sản phẩm"
        className="w-full flex flex-col gap-5 items-center"
      >
        <ProductGallery media={productInfo.medias} />
      </div>

      <div className="w-full space-y-5 lg:row-span-2">
        <ProductInfo
          product={productInfo}
          rating={productRating}
          currentVariant={currentVariant}
        />
        <ProductVariants
          variants={_variants}
          onChangeVariant={(variant) => setCurrentVariant(variant)}
        />

        <Vouchers vouchers={_vouchers} />

        <ActionsButton
          available={currentVariant.stock.quantity > 0}
          handleBuyNow={() => console.log("Buy now")}
          handleConsult={() => console.log("Consult")}
        />

        <StoreAvailability stores={_stores_availability} />

        {promotional?.gift && promotional?.gift.length > 0 && (
          <PromotionalGift promotion={promotional?.gift} />
        )}
        {promotional?.discount && promotional?.discount.length > 0 && (
          <PromotionalDiscount promotion={promotional?.discount} />
        )}
      </div>

      <div className="space-y-6">
        <ProductInfoTabs />
      </div>
      {/* </div> */}
    </div>
  );
}
