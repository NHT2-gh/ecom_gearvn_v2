import { CartItem } from "@/types/v2/cart";
import { _variants } from "..";

export const _cartItems: CartItem[] = [
  {
    id: "123",
    sku: "123-sku",
    slug: "man-hinh-viewsonic-va2432a-h-24-ips-120hz-vien-moang",
    name: 'Màn hình Viewsonic VA2432A-H 24" IPS 120Hz viền mỏng',
    price: {
      original: 3590000,
      discount: 2000000,
    },
    variant: _variants[0],
    featureImage:
      "https://product.hstatic.net/200000722513/product/view_va2432a-h_gearvn_9f5ded4d703e45fa9de460c8ce23bcc7.jpg",
    quantity: Math.min(1, 1),
    stock: {
      quantity: 2,
      status: "in_stock",
    },
    isSelected: false,
  },
];
