export interface filterAttributesValue {
  label: string;
  value: string;
  count?: number;
}

export interface filterAttributes {
  key: string;
  label: string;
  values: number[] | filterAttributesValue[];
}

export interface ProductRating {
  product_sku: string;
  total_rating: number;
  avg_rating: number;
  // star_rating_1: number;
  // star_rating_2: number;
  // star_rating_3: number;
  // star_rating_4: number;
  // star_rating_5: number;
}

export interface ProductVariantResponse {
  id: string;
  title: string;
  sku: string;
  compare_at_price: number;
  price: number;
  inventory_quantity: number;
  available: boolean;
}
