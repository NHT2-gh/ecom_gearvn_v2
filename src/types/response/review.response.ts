import { ProductRating } from "./common";

interface Review {
  comment_id: string;
  sku: string;
  comment: string;
  rating_star: number;
  images: ReviewMedia[];
  videos: ReviewMedia[];
  review_date: string;
  created_on: string;
  updated_on: string;
  username: string;
}

export interface ReviewMedia {
  url: string;
  thumb: string;
  alt: string;
}

export interface MetadataRating {
  total_page: number;
  page: number;
  limit: number;
  total_rating: number;
  avg_rating: number;
}
export interface ProductRatingResponse {
  reviews: Review[];
  metadata: MetadataRating;
}
export interface GetManyProductRatingResponse {
  ratings: ProductRating[];
}
