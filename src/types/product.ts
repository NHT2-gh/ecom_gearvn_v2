import { FilterItemConfig } from "@/components/v2/filter/type";
import { ProductVariantResponse, ReviewMedia } from "./response";
import { BasicProduct } from "./v2/product";

export interface Product {
  product_id: string;
  slug: string;
  sku: string;
  name: string;
  price: ProductPrice;
  image: string;
  stock: ProductStock;
  rating: ProductRating;
  brand_name: string;
}

export type ProductPrice = {
  original: number;
  discount?: number;
};

export type ProductRating = {
  rate: number;
  count: number;
  reviews?: Review[];
};

export type ProductStock = {
  stock: number;
  saled?: number;
};

export type ViewedProductCard = Pick<
  Product,
  "product_id" | "sku" | "name" | "price" | "image"
>;

export interface ProductCardBase {
  name: string;
  product_id: string | number;
  sku?: string;
  slug: string;
  price: ProductPrice;
  rating?: ProductRating;
  image: string | null;
  customBackground?: string;
  specs?: Spec[];
  gift?: boolean;
  bestSeller?: boolean;
  product_type?: string;
}

export interface FlashSaleProductCard extends ProductCardBase {
  stock: ProductStock;
}
export interface Spec {
  key: string;
  name: string;
}

export type Review = {
  id: string;
  rating: number;
  sku: string;
  content: string;
  created_at: Date;
  author: ReviewAuthor;
  images?: ReviewMedia[];
  videos?: ReviewMedia[];

  replies?: Review[];
};

export type ReviewAuthor = {
  name: string;
  avatar?: string;
};

export interface ProductInfo extends Omit<Product, "rating"> {
  available: boolean;
  media: ProductMedia[];
  tag: string[];
  type: string;
  description: string;
  variants: ProductVariantResponse[];
  published_at: Date;
  not_allow_promotion: boolean;
  metaData: {
    pagetitle: string;
    metadescription: string;
  };
}

export interface ProductDetail {
  info: ProductInfo;
  rating: ProductRating;
}

export interface ProductMedia {
  src: string;
  alt: string;
  position: number;
  media_type: "image" | "video";
}
export interface ProductCart
  extends Pick<
    Product,
    "product_id" | "sku" | "name" | "price" | "image" | "stock"
  > {
  quantity: number;
}

export interface SearchProduct {
  data: BasicProduct[];
  filterAttributes: FilterItemConfig[];
  total: number;
}

export interface UpsellProducts {
  cross_selling: ProductCardBase[];
  filters: FilterItemConfig[];
  metadata: {
    total: number;
  };
}

export interface ProductCollection {
  id: number;
  title: string;
  handle: string;
  product_type: string;
  not_allow_promotion: boolean;
  available: boolean;
  sole_quantity: number;
  tags: string;
  image: {
    src: string;
    alt: string;
  } | null;
  variants: ProductVariantResponse[];
}

export interface DataCollection {
  products: ProductCardBase[];
  filterAttributes: FilterItemConfig[];
  total: number;
  sortAttributes: { value: string; label: string }[];
}
