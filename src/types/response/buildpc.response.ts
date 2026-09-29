import { FilterValue } from "@/components/v2/filter/type";

export interface ProductItemBuildPC {
  product_id: number;
  category_id: number;
  name: string;
  sku: string;
  image: string;
  haravan_handle: string;
  price: number;
  discount_price: number;
  warranty_month: number;
  brand_name: string;
  stock_remain: boolean;
}

export interface ProductBuildPCResponse {
  products: ProductItemBuildPC[];
  page: number;
  limit: number;
  total: number;
  minPrice: number;
  maxPrice: number;
  filterAttributes: { [key: string]: FilterValue };
}
