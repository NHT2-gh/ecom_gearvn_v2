import { apiService } from "./api";
import { API_ENDPOINT } from "@/config/api_endpoint";
import {
  ProductItem,
  PromotionDiscountItem,
  PromotionGiftItem,
  PromotionResponse,
} from "@/types/response";
import { searchService } from "./search.api";
import { CombineProductInfo } from "@/adapters/product.adapter";
import { ProductCardBase } from "@/types/product";
import { BasicProduct } from "@/types/v2/product";

class PromotionService {
  constructor() {}

  async getGiffPromotion(
    productsId: (string | number)[]
  ): Promise<Pick<PromotionResponse<PromotionGiftItem[]>, "data">> {
    const response = await apiService.get<
      Pick<PromotionResponse<PromotionGiftItem[]>, "data">
    >(API_ENDPOINT.products.promotion.giff(), "GEARVN_DOMAIN", {
      params: {
        list_product_id: productsId.join(","),
      },
    });

    return response;
  }

  async getDiscountPromotion(
    productsId: (string | number)[]
  ): Promise<Pick<PromotionResponse<PromotionDiscountItem[]>, "data">> {
    const response = await apiService.get<
      Pick<PromotionResponse<PromotionDiscountItem[]>, "data">
    >(API_ENDPOINT.products.promotion.buyAndDiscount(), "GEARVN_DOMAIN", {
      params: {
        list_product_id: productsId.join(","),
      },
    });

    return response;
  }

  async getListItemDiscountPromotion(
    id: string,
    item_group_id: string
  ): Promise<BasicProduct[]> {
    try {
      const response = await apiService.get<
        Pick<PromotionResponse<ProductItem[]>, "data">
      >(API_ENDPOINT.products.promotion.listItemDiscount(), "GEARVN_DOMAIN", {
        params: {
          id,
          item_group_id,
          page: 1,
          limit: 50,
        },
      });

      const productsId = response.data.items.map((p) => p.product_id);
      const productsInfo = await searchService.getBatchProductInfo(productsId);

      const listItemsDiscount: BasicProduct[] = productsInfo.map((item) => {
        return CombineProductInfo(item);
      });
      return listItemsDiscount;
    } catch (error) {
      console.error("Error fetching list item discount promotion:", error);
      throw error;
    }
  }
}

export const promotionService = new PromotionService();
