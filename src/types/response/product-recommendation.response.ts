import { ProductRating } from "./common";

//Product recommendation
export interface ProductRecommendation {
  id: string;
  sku: string;
  title: string;
  category: string;
  brand: string;
  thumbnail: string;
  price: {
    original: number;
    discounted: number;
  };
  tags: string;
  urls: [
    {
      product_page: string;
    }
  ];
  ratings: ProductRating;
}

export interface ProductRecommendationResponse {
  status: string;
  message: string;
  recommendations: ProductRecommendation[];
  metadata: {
    total_recommendations: number;
  };
}
