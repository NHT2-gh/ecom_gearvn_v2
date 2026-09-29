import { API_ENDPOINT } from "@/config/api_endpoint";
import { apiService } from "./api";
import { ProductBuildPCResponse } from "@/types/response/buildpc.response";
import { buildPCAdapter } from "@/adapters/build-pc.adapter";
import { FilterValue } from "@/schemas";
import type { BuildPCCategory } from "@/types/build-pc";
import { getCategoryId } from "@/config/pc-builder-categories";

class BuildPCService {
  constructor() {}

  async getProductsByComponent(
    category: BuildPCCategory,
    page = 1,
    limit = 20,
    filters?: Record<string, FilterValue>
  ) {
    const category_id = getCategoryId(category);
    
    const response = await apiService.get<ProductBuildPCResponse>(
      API_ENDPOINT["build-pc"](),
      "BUILDPC_API_DOMAIN",
      {
        params: {
          category_id,
          page,
          limit,
          filterAttributes: filters,
        },
      }
    );

    try {
      const { products, filters } = buildPCAdapter(response, category);

      return {
        products,
        filters,
        total: response.total,
        page: response.page,
        limit: response.limit,
      };
    } catch (error) {
      console.log(error);
      return {
        products: [],
        filters: [],
        total: 0,
        page: 1,
        limit: 24,
      };
    }
  }
}

export const buildPCService = new BuildPCService();
