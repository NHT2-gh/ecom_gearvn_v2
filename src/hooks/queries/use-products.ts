import { queryKeys } from "@/config/query-keys";
import { FilterValue, validateFilterValues } from "@/schemas/filter-schemas";
import { productService } from "@/services/product.api";
import { searchService } from "@/services/search.api";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  getProductsCollectionServerAction,
  getProductSearchServerAction,
} from "@/lib/server-actions/product.action";
import { BasicProduct, CampainProduct } from "@/types/v2/product";

interface UseProductsCollectionParams {
  slug: string;
  limit?: number;
  include?: string;
  initialData?: BasicProduct[] | CampainProduct[];
  filters: Record<string, FilterValue>;
  promotionId?: string;
}
export function useProductsCollection({
  slug,
  limit = 24,
  initialData,
  filters,
  promotionId,
}: UseProductsCollectionParams) {
  // Only use initialData if there are no filters applied
  const shouldUseInitialData = !filters || Object.keys(filters).length === 0;

  return useInfiniteQuery({
    queryKey: queryKeys.products.collection(slug, limit, filters, promotionId),
    queryFn: async ({ pageParam = 1 }) => {
      const response = await getProductsCollectionServerAction(
        slug,
        pageParam,
        limit,
        filters
      );

      return response;
    },

    staleTime: 10 * 60 * 1000,
    retry: 2,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    networkMode: "online",
    initialPageParam: 1,
    // Only hydrate with server-side data on initial load (no filters)
    initialData:
      shouldUseInitialData && initialData
        ? {
            pages: [initialData],
            pageParams: [1],
          }
        : undefined,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPageParam + 1;
    },
    getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
      return firstPageParam - 1;
    },
  });
}

export function useProductReviews({
  sku,
  page = 1,
  limit = 20,
}: {
  sku: string;
  page?: number;
  limit?: number;
}) {
  return useQuery({
    queryKey: queryKeys.product.reviews(sku, page, limit),
    queryFn: async () => {
      const response = await productService.getProductReviews(sku, {
        page,
        limit,
      });
      return response;
    },
    enabled: !!sku,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  });
}

export function useProductReviewsInfinite({
  sku,
  limit = 5,
}: {
  sku: string;
  limit?: number;
}) {
  return useInfiniteQuery({
    queryKey: queryKeys.product.reviewsInfinite(sku, limit),
    queryFn: async ({ pageParam = 1 }) => {
      const response = await productService.getProductReviews(sku, {
        page: pageParam,
        limit,
      });

      return response;
    },
    enabled: !!sku,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      // Check if there are more reviews to fetch
      const totalReviews = lastPage.count;
      const totalFetched = lastPageParam * limit;
      return totalFetched < totalReviews ? lastPageParam + 1 : undefined;
    },
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  });
}

export function useProductRecommendation({ sku }: { sku: string }) {
  return useQuery({
    queryKey: queryKeys.product.recommendation(sku),
    queryFn: async () => {
      const response = await productService.getProductRecommendation(sku);
      return response;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
  });
}

export function useProductSearch({
  query,
  filters,
  limit = 20,
}: {
  query: string;
  filters?: Record<string, FilterValue>;
  limit?: number;
}) {
  return useInfiniteQuery({
    queryKey: queryKeys.product.search(query, filters),
    queryFn: async ({ pageParam = 1 }) => {
      // Validate filters before calling API

      const response = await getProductSearchServerAction(
        query,
        pageParam,
        limit,
        filters
      );

      return response;
    },
    staleTime: 5 * 60 * 1000, // coi dữ liệu fresh 5 phút
    retry: 2, // thử lại 2 lần nếu fail
    refetchOnWindowFocus: true, // cho phép refetch, nhưng...
    refetchOnReconnect: true, // ...chỉ khi mạng ổn định
    networkMode: "online", // chỉ gọi API khi online

    initialPageParam: 1,
    // Hydrate with server-side data if provided
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPageParam + 1;
    },
    getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
      return firstPageParam - 1;
    },
  });
}

export function useProductCrosssell({
  sku,
  category_id,
  limit = 30,
  filters,
}: {
  sku: string;
  category_id: number;
  limit?: number;
  filters?: Record<string, FilterValue>;
}) {
  return useInfiniteQuery({
    queryKey: queryKeys.product.crosssell(sku, category_id.toString(), filters),
    queryFn: async ({ pageParam = 1 }) => {
      // Validate filters before calling API
      let validatedFilters = filters;
      if (filters) {
        const validationResult = validateFilterValues(filters);
        if (!validationResult.success) {
          console.warn("Invalid filters:", validationResult.error);
          validatedFilters = undefined;
        } else {
          validatedFilters = validationResult.data;
        }
      }

      const response = await productService.getUpsellProducts(
        sku,
        category_id,
        pageParam,
        limit,
        validatedFilters
      );
      return response;
    },
    staleTime: 5 * 60 * 1000, // coi dữ liệu fresh 5 phút
    retry: 2, // thử lại 2 lần nếu fail
    refetchOnWindowFocus: true, // cho phép refetch, nhưng...
    refetchOnReconnect: true, // ...chỉ khi mạng ổn định
    networkMode: "online", // chỉ gọi API khi online
    initialPageParam: 1,
    // Hydrate with server-side data if provided
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPageParam + 1;
    },
    getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
      return firstPageParam - 1;
    },
  });
}

export function useGiftProductsInfo(giftIds: (number | string)[]) {
  return useQuery({
    queryKey: queryKeys.product.giftInfo(giftIds),
    queryFn: async () => {
      const response = await searchService.getBatchProductInfo(giftIds);
      return response;
    },
    enabled: giftIds.length > 0,
    staleTime: 1000 * 60 * 30, // 30 minutes
    gcTime: 1000 * 60 * 60, // 1 hour
  });
}
