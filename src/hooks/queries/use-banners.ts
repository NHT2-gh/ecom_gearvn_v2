import { BANNER_PATH } from "@/config/banner_path";
import { queryKeys } from "@/config/query-keys";
import { Banner } from "@/types/banner";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export function useBanners(
  page: keyof typeof BANNER_PATH
): UseQueryResult<Banner[], Error> {
  return useQuery({
    queryKey: queryKeys.banners(page),
    queryFn: async () => {
      const res = await fetch(BANNER_PATH[page]);
      if (!res.ok) throw new Error("Failed to load banners");
      const banners = await res.json();
      return banners;
    },
    staleTime: 10 * 60 * 1000,
  });
}

export function useBannersTemplate(
  page: string
): UseQueryResult<Banner | undefined, Error> {
  return useQuery({
    queryKey: queryKeys.banners(page),
    queryFn: async () => {
      const res = await fetch("/jsons/banners-template.json");
      if (!res.ok) throw new Error("Failed to load banners");
      const banners = await res.json();
      return banners;
    },
    staleTime: 30 * 60 * 1000,
  });
}
