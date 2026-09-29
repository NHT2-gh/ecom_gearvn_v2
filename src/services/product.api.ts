import { apiService } from "./api";
import { API_ENDPOINT } from "@/config/api_endpoint";
import { ProductInfo, UpsellProducts } from "@/types/product";
import {
  CombineProductInfo,
  filterAttributesAdapter,
  ProductCrosssellAdapter,
  productInfoAdapter,
  productRatingAdapter,
  productRecommendationAdapter,
  productsforGroupAdapter,
} from "@/adapters/product.adapter";
import {
  CollectionInfoResponse,
  filterAttributes,
  ProductCollectionReorderResponse,
  ProductCollectionResponse,
  ProductInfoResponse,
  ProductRatingResponse,
  ProductRecommendationResponse,
  PromotionGiftItem,
  PromotionResponse,
  UpsellConfigResponse,
  UpsellProductResponse,
} from "@/types/response";
import { searchService } from "./search.api";
import { parseFilterTags } from "@/utils/parse-data";

import { promotionService } from "./promotion.api";
import {
  BasicProduct,
  CampainProduct,
  ProductDetail,
  ProductReview,
} from "@/types/v2/product";
import { FilterItemConfig, FilterValue } from "@/components/v2/filter/type";

class ProductService {
  constructor() {}

  async getProductsCollection(
    slug: string,
    params?: {
      limit?: number;
      page?: number;
    },
    reorder?: boolean
  ): Promise<{
    data: BasicProduct[] | CampainProduct[];
    filtersConfig: FilterItemConfig[];
  }> {
    const response = await apiService.get<ProductCollectionResponse>(
      API_ENDPOINT.products.collection.index(slug, false, "products.json"),
      "API_DOMAIN",
      {
        params: {
          limit: params?.limit ?? 15,
          page: params?.page ?? 1,
          include: "metafields[product]",
        },
      }
    );
    let productsId: (string | number)[] = [];
    let filterResponse: filterAttributes[] = [];
    let finalProducts: BasicProduct[] = [];

    if (reorder) {
      const skus = response.products.map((p) => p.variants[0].sku);

      try {
        const reorderResponse = await this.reorderProductsCollection(
          slug,
          [],
          skus,
          params?.page,
          params?.limit
        );

        const reorderedProducts = reorderResponse.data;

        filterResponse = reorderResponse.filterAttributes;
        productsId = [...new Set(reorderedProducts.map((p) => p.haravan_id))];
        const productsSku = [...new Set(reorderedProducts.map((p) => p.sku))];

        const [productsInfo, productsRating, productsPromotion] =
          await Promise.all([
            searchService.getBatchProductInfo(productsId),
            searchService.getBatchRating(productsSku),
            promotionService.getGiffPromotion(productsId),
          ]);
        const productsCollection = reorderedProducts.map(async (p) => {
          const info = productsInfo.find(
            (i) => i.id.toString() === p.haravan_id.toString()
          );
          const rating = productsRating.find((r) => r.product_sku === p.sku);

          if (info) {
            try {
              const productSearch = CombineProductInfo(info, rating);
              return productSearch;
            } catch (error) {
              console.error(`CombineProductInfo ${p.handle} error`, error);
              return null;
            }
          } else {
            const product = response.products.find(
              (item) => item.id === p.haravan_id
            );

            if (product) {
              try {
                const productSearch = productsforGroupAdapter(product);
                return productSearch;
              } catch {
                return null;
              }
            }
          }

          return null;
        });

        finalProducts = (await Promise.all(productsCollection)).filter(
          (p) => p !== null
        ) as BasicProduct[];
      } catch (error) {
        console.error("Error during reorder:", error);
      }
    } else {
      finalProducts = response.products.map((product) =>
        productsforGroupAdapter(product)
      );
      return {
        data: finalProducts,
        filtersConfig: [],
      };
    }

    return {
      data: finalProducts,
      filtersConfig: filterAttributesAdapter(filterResponse),
    };
  }

  async getProductDetail(slug: string): Promise<ProductDetail> {
    const response = await apiService.get<ProductInfoResponse>(
      API_ENDPOINT.products.detail.info(slug),
      "API_DOMAIN"
    );

    const product = productInfoAdapter(response);

    return product;
  }

  async getProductReviews(
    sku: string,
    params?: {
      page?: number;
      limit?: number;
    }
  ): Promise<ProductReview> {
    const response = await apiService.get<ProductRatingResponse>(
      API_ENDPOINT.products.detail.reviews(),
      "WEBAPI_DOMAIN",
      {
        params: {
          sku,
          page: params?.page ?? 1,
          limit: params?.limit ?? 10,
        },
      }
    );

    const productRating = productRatingAdapter(response);
    return productRating;
  }

  async getProductRecommendation(sku: string): Promise<BasicProduct[]> {
    const response = await apiService.get<ProductRecommendationResponse>(
      API_ENDPOINT.products.detail.recommendation(),
      "WEBAPI_DOMAIN",
      {
        params: {
          sku,
        },
      }
    );

    const products = productRecommendationAdapter(response.recommendations);
    return products;
  }

  async getFilterAttributes(slug: string): Promise<FilterItemConfig[]> {
    const response = await apiService.get<string[]>(
      API_ENDPOINT.products.collection.index(slug, false),
      "API_DOMAIN",
      {
        params: {
          view: "get-tag",
        },
      }
    );

    const filter = parseFilterTags(response);

    return filter;
  }

  async getConfigCrossSell({
    sku,
  }: {
    sku: string;
  }): Promise<UpsellConfigResponse[]> {
    const response = await apiService.get<UpsellConfigResponse[]>(
      API_ENDPOINT.products.detail.upsell.config(),
      "WEBAPI_DOMAIN",
      {
        params: {
          sku: sku,
        },
      }
    );

    return response;
  }

  async getUpsellProducts(
    sku: string,
    category_id: number,
    page: number,
    limit: number,
    filter?: Record<string, FilterValue>
  ): Promise<UpsellProducts> {
    const response = await apiService.post<UpsellProductResponse>(
      API_ENDPOINT.products.detail.upsell.products(),
      "WEBAPI_DOMAIN",
      {
        body: {
          main_product_sku: sku,
          sort: "newest",
          page: page,
          limit: limit,
          category_id: category_id,
          name: "",
          filterAttributes: filter,
        },
      }
    );

    const products = ProductCrosssellAdapter(response);
    return products;
  }

  async getCollectionInfo(slug: string): Promise<CollectionInfoResponse> {
    const response = apiService.get<CollectionInfoResponse>(
      API_ENDPOINT.products.collection.index(slug, true),
      "API_DOMAIN"
    );

    return response;
  }

  async reorderProductsCollection(
    slug: string,
    filter: { key: string; values: FilterValue }[],
    skus: string[],
    page?: number,
    limit?: number
  ): Promise<ProductCollectionReorderResponse> {
    try {
      const endpoint = `${API_ENDPOINT.products.reorder.nextjsServer()}`;

      const response = await apiService.post<ProductCollectionReorderResponse>(
        endpoint,
        "NEXTJS_SERVER",
        {
          body: {
            collection_handle: slug,
            collection_type: "custom",
            products: skus ?? [""],
            gearvn_store: "",
            pageIndex: page ?? 1,
            pageSize: limit ?? 50,
            filters: filter,
          },
        }
      );

      return response;
    } catch (error) {
      return {
        success: false,
        code: 500,
        message: "Error during reorder",
        data: [],
        total: 0,
        filterAttributes: [],
        activeFilters: [],
        sortAttributes: [],
      };
    }
  }
}

export const productService = new ProductService();
