import {
  GetManyProductRatingResponse,
  ProductInfoItem,
  ProductRating,
  SearchProductsInfoRespone,
  SearchResponse,
} from "@/types/response";
import { apiService } from "./api";
import { API_ENDPOINT } from "@/config/api_endpoint";
import { FilterValue } from "@/components/v2/filter/type";

class SearchService {
  async searchProduct(
    query: string,
    page: number,
    limit: number,
    filters?: { key: string; values: FilterValue }[]
  ): Promise<SearchResponse> {
    const response = await apiService.post<SearchResponse>(
      API_ENDPOINT.search.nextjsServer["nextjs-server-search"](),
      "NEXTJS_SERVER",
      {
        body: {
          search: query,
          filters: filters,
          pageIndex: page,
          pageSize: limit,
          gearvn_store: "",
        },
      }
    );

    return response;
  }

  async getBatchProductInfo(
    haravan_ids: (number | string)[]
  ): Promise<ProductInfoItem[]> {
    const response = await apiService.post<SearchProductsInfoRespone>(
      API_ENDPOINT.search.nextjsServer["nextjs-server-get-products-info"](),
      "NEXTJS_SERVER",
      {
        body: {
          haravan_ids,
        },
      }
      // {
      //   params: {
      //     q: `filter=(id:product in ${haravan_ids.join(",")})`,
      //     page: 1,s
      //     limit: haravan_ids.length,
      //   },
      // }
    );

    return response.products;
  }

  async getBatchRating(skus: string[]): Promise<ProductRating[]> {
    const response = await apiService.post<GetManyProductRatingResponse>(
      API_ENDPOINT.search.nextjsServer["nextjs-server-get-products-rating"](),
      "NEXTJS_SERVER",
      {
        body: {
          skus: skus,
        },
      }
    );

    return response.ratings;
  }
}

export const searchService = new SearchService();
