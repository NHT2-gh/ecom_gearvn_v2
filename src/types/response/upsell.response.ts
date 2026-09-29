import { ProductRecommendation } from "./product-recommendation.response";

export interface FilterAttributesCrossSell {
  id: string;
  type: "multi-select" | "range";
  label: string;

  // for filter type "multi-select"
  options?: {
    value: string;
    label: string;
  }[];

  // for filter type "range"
  min?: number;
  max?: number;
  initValue?: [number, number];
}

export interface UpsellProductResponse {
  status: string;
  message: string;
  metadata: { total: number }; // total product cross selling
  filters: FilterAttributesCrossSell[];
  cross_selling: ProductRecommendation[];
}

export interface UpsellConfigResponse {
  image: string;
  title: string;
  category: string;
  is_active: boolean;
  category_id: number;
}
