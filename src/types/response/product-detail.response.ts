import { ProductMedia } from "../product";
import { ProductVariantResponse } from "./common";

export interface ProductInfoResponse {
  id: string;
  title: string;
  compare_at_price: number;
  price: number;
  inventory_quantity: number;
  available: boolean;
  description: string;
  handle: string;
  featured_image: string;
  vendor: string;
  sole_quantity: number;
  tags: string[];
  type: string;
  media: ProductMedia[];
  variants: ProductVariantResponse[];
  published_at: string;
  not_allow_promotion: boolean;

  //Metadata
  pagetitle: string;
  metadescription: string;
}
