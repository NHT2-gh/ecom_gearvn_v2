import { TagType } from "@/components/v2/card/sub-components/tag-header-card";
import { Review } from "./review";
import { ProductRating } from "../response";

export type ProductPrice = {
  original: number;
  discount?: number;
};

export type ProductReview = {
  rate: number;
  count: number;
  reviews?: Review[];
};

export type ProductStock = {
  quantity: number;
  status: "in_stock" | "low_stock" | "out_of_stock";
  saled?: number;
};

export interface Spec {
  key: string;
  value: string;
}

export interface BasicProduct {
  id: string;
  name: string;
  slug: string;
  sku: string;
  price: ProductPrice;
  featureImage: string | null;
  highlightSpecs?: Spec[];
  rating?: ProductRating;
}

export interface CampainProduct extends BasicProduct {
  stock: ProductStock;
}

export interface LibProduct extends BasicProduct {
  tags: string[];
  headerTagType?: TagType;
}

export interface ProductMedia {
  src: string;
  alt: string;
  position: number;
  media_type: "image" | "video";
}

export interface ProductAttribute {
  id: string;
  type: string;
  displayName: string;
  value: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  attributes: ProductAttribute[];
  price: ProductPrice;
  stock: ProductStock;
}

export interface ProductDetail extends Omit<BasicProduct, "price"> {
  desc: string;
  medias: ProductMedia[];
  tags: string[];
  variants: ProductVariant[];

  publishedAt: Date;
}
