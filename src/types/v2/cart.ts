import { BasicProduct, ProductStock, ProductVariant } from "./product";

export interface CartItem extends BasicProduct {
  stock: ProductStock;
  quantity: number;
  variant: ProductVariant;
  isSelected: boolean;
}
