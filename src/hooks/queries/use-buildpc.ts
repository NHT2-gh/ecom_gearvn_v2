import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKeys } from "@/config/query-keys";
import { buildPCService } from "@/services/pc-builder.api";
import type { BuildPCCategory } from "@/types/build-pc";
import { FilterValue } from "@/components/v2/filter/type";

export default function useProductsBuildPC(
  category: BuildPCCategory,
  filters?: Record<string, FilterValue>
) {
  return useInfiniteQuery({
    queryKey: queryKeys.products.buildPC(category, filters),
    queryFn: async ({ pageParam = 1 }) => {
      const response = await buildPCService.getProductsByComponent(
        category,
        pageParam,
        20,
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
    // Hydrate with server-side data if provided
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      // Check if there are more reviews to fetch
      const totalReviews = lastPage?.total;
      const totalFetched = lastPageParam * lastPage?.limit;
      return totalFetched < totalReviews ? lastPageParam + 1 : undefined;
    },
  });
}
