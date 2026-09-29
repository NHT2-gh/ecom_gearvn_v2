import React from "react";

import { productService } from "@/services/product.api";
import { CampainProduct } from "@/types/v2/product";
import { CampainBlock, FlashSaleBlock } from "../components";

export default async function CampainSectionView() {
  const campain_products = await productService.getProductsCollection(
    "man-hinh-duoi-5-trieu",
  );

  const gearvn_sale_products = await productService.getProductsCollection(
    "gaming-gear-sales-b2s",
  );

  return (
    <section className="space-y-10">
      <CampainBlock />
      <FlashSaleBlock
        products={gearvn_sale_products.data as CampainProduct[]}
        categorys={{
          key: "category",
          label: "Danh mục",
          type: "button-toggle",
          options: [
            { label: "Logitech", value: "logitech" },
            { label: "Razer", value: "razer" },
            { label: "Corsair", value: "corsair" },
          ],
        }}
      />
    </section>
  );
}
