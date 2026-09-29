import { FilterItemConfig } from "@/components/v2/filter/type";
import { BuildItem, BuildPCCategory } from "@/types/build-pc";

import { ProductBuildPCResponse } from "@/types/response";

export function buildPCAdapter(
  data: ProductBuildPCResponse,
  category: BuildPCCategory
): {
  products: BuildItem[];
  filters: FilterItemConfig[];
} {
  return {
    products: data.products.map((item) => ({
      // ProductCardBase fields
      name: item.name,
      product_id: item.product_id,
      sku: item.sku,
      slug: item.haravan_handle,
      price: {
        original: item.price,
        discount: item.discount_price,
      },
      image: item.image,

      // BuildItem specific fields
      category,
      warranty: item.warranty_month,
      brandName: item.brand_name,
      stock_remain: item.stock_remain,
    })),
    filters: Object.entries(data.filterAttributes).flatMap(([key, value]) => {
      if (Array.isArray(value)) {
        return {
          key,
          label: key,
          type: "button-toggle" as const,
          options: value.map((v) => ({
            label: String(v),
            value: String(v),
          })),
        };
      }
      return {
        key,
        label: key,
        type: "input-range" as const,
        range: value as unknown as [number, number],
        options: [],
      };
    }),
  };
}
