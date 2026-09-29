export interface TagItem {
  code: string;
  name: string;
}

export interface ProductItem {
  product_id: number;
  variant_id: number;
}

export interface GiftItem {
  product_id: number;
  variant_id: number;
  quantity: number;
  product_image: string;
  product_title: string;
}
export interface Gift {
  condition_value: number;
  list_gift_items: GiftItem[];
  max_multiple: number;
  is_limit_multiple: boolean;
}
export interface PromotionItemBase {
  _id: string;
  code: string;
  title: string;

  start_date: string;
  end_date: string;
  updated_at: string;
  tags_array: TagItem[];

  list_item_buy: ProductItem[];
  apply_for_customer_tags: TagItem[];
}

export interface PromotionGiftItem extends PromotionItemBase {
  condition_type: string;

  status: string;
  apply_for: string;
  list_condition_and_gift_items: Gift[];

  list_item_buy: ProductItem[];
  processing_data: {
    app_collection_id: string;
    collection_id: string;
    collection_type: string;
  };
  created_at: string;
}

export interface ItemGroup {
  _id: string;
  item_type: string;
  quantity_buy: number;
  is_limit_discount_amount: boolean;
  discount_value: number | null;
  discount_type: string | null;
  discount_for: string | null;
  quantity_discount: number | null;
  app_collection_id: string;
  collection_id: string;
  collection_type: string;
  list_item_buy: {
    product_id: string;
    variant_id: string;
  }[];
  available_slots: number;
  is_limit_slots: boolean;
}

export interface PromotionDiscountItem extends PromotionItemBase {
  max_multiple: number;
  is_limit_multiple: boolean;
  item_groups: ItemGroup[];
  is_limit_slots: boolean;
  max_slots: number;
  available_slots: number;
}

export interface PromotionResponse<T> {
  success: boolean;
  data: {
    total: number;
    items: T;
  };
  error: string | null;
}
