import { FilterValue } from "@/schemas/filter-schemas";
import type { BuildPCCategory } from "@/types/build-pc";

export const queryKeys = {
  products: {
    collection: (
      slug: string,
      limit: number,
      filters?: Record<string, FilterValue>,
      promotionId?: string
    ) => ["products", "collection", slug, limit, filters, promotionId],
    buildPC: (
      category: BuildPCCategory,
      filters?: Record<string, FilterValue>
    ) => ["products", "build-pc", category, filters],
  },

  product: {
    reviews: (sku: string, page: number, limit: number) => [
      "product",
      "reviews",
      sku,
      page,
      limit,
    ],
    reviewsInfinite: (sku: string, limit: number) => [
      "product",
      "reviews-infinite",
      sku,
      limit,
    ],
    recommendation: (sku: string) => ["products", "recommendation", sku],
    search: (query: string, filters?: Record<string, FilterValue>) => [
      "products",
      "search",
      query,
      filters,
    ],
    crosssell: (
      sku: string,
      category_id: string,
      filters?: Record<string, FilterValue>
    ) => ["products", "crosssell", sku, category_id, filters],
    giftInfo: (giftIds: (number | string)[]) => [
      "product",
      "gift-info",
      giftIds,
    ],
  },

  blogs: {
    collection: (collectionName: string = "all") => [
      "blogs",
      "collection",
      collectionName,
    ],
    detail: (slug: string) => ["blogs", "detail", slug],
  },

  banners: (page: string) => ["banners", page],
};
