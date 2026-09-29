import { ProductCollection } from "../product";
import { filterAttributes } from "./common";

export interface ProductCollectionReorder {
  id: number;
  price: number;
  product_type: string;
  handle: string;
  sku: string;
  haravan_id: number | string;
  title: string;
  allow_backorder: number;
  stockRemain: boolean;
  level: string;
}

export interface ProductCollectionReorderResponse {
  success: boolean;
  code: number;
  message?: string;
  data: ProductCollectionReorder[];
  total: number;
  filterAttributes: filterAttributes[];
  activeFilters: [];
  sortAttributes: { value: string; label: string }[];
}

export interface ProductCollectionResponse {
  products: ProductCollection[];
}

export interface CollectionInfoResponse {
  collection: {
    id: number;
    title: string;
    handle: string;
    description: string; //html
    products_count: number;
  };
}
