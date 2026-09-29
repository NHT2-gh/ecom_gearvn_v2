import { filterAttributes, ProductVariantResponse } from "./common";

export interface SearchProductItem {
  id: string;
  product_type: string;
  handle: string;
  sku: string;
  haravan_id: number;
  title: string;
  allow_backorder: number;
  product_type_no_space: string;
  vendor_no_space: string;
  is_software: number;
  price: number;
  weight: number;
  stockRemain: boolean;
  brand_label: string;
}

export interface SearchResponse {
  success: boolean;
  code: number;
  data: SearchProductItem[];
  total: number;
  filterAttributes: filterAttributes[];
}

export interface ProductInfoItem {
  id: number;
  available: boolean;
  featured_image: string;
  images: string[];
  handle: string;
  tags: string[];
  title: string;
  type: string;
  url: string;
  // pagetitle: string;
  // metadescription: string;
  variants: ProductVariantResponse[];
  not_allow_promotion: boolean;
  sole_quantity: number;
}
export interface SearchProductsInfoRespone {
  products: ProductInfoItem[];
  total: number;
}
