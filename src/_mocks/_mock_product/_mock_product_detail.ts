import { APP_ROUTE } from "@/config/app_route";
import { ProductVariant } from "@/types/v2/product";
import { Store } from "@/types/v2/store";
import { Voucher } from "@/types/v2/voucher";

export interface PromotionalGift {
  title: string;
  isGiff: boolean;
  content: {
    showReadMore: boolean;
    icon: "index" | "check";
    list: Array<{ text: string; link: string }>;
  };
}

export const _giff_list: PromotionalGift = {
  title: "Quà tặng khuyến mãi",
  isGiff: true,
  content: {
    showReadMore: false,
    icon: "index",
    list: [
      {
        text: "Gift Code 500,000đ - Back To School 2025 with Acer Khuyến mại mùa tựu trường",
        link: APP_ROUTE.product.bySlug(
          "gift-code-500-000d-back-to-school-2025-acer"
        ),
      },
      {
        text: "Tặng ngay 1 x Lót chuột DareU ESP102 Black trị giá 149.000₫",
        link: APP_ROUTE.product.bySlug("lot-chuot-dareu-esp102-black"),
      },
      {
        text: "Tặng ngay 1 x Đế Tản Nhiệt Cooler Master Notepal C3 trị giá 230.000₫",
        link: APP_ROUTE.product.bySlug("notepal-cooler-master-c3"),
      },
    ],
  },
};

export const _sale_promotional: PromotionalGift = {
  title: "Khuyến mãi",
  isGiff: false,
  content: {
    showReadMore: true,
    icon: "check",
    list: [
      {
        text: "Giảm ngay 100.000đ khi mua Microsoft Office kèm laptop.",
        link: APP_ROUTE.collection.byCate(
          "chuong-trinh-khuyen-mai/?id=6867ae41ca1e6c00124544d4&item_group_id=IG2"
        ),
      },
      {
        text: "Ưu đãi 50% khi mua chuột kèm Laptop Gaming (Tối đa 150.000đ).",
        link: APP_ROUTE.collection.byCate(
          "chuong-trinh-khuyen-mai/?id=68dd053bf4e61a0012f6f78b&item_group_id=IG2"
        ),
      },
      {
        text: "Ưu đãi 500.000đ khi nâng cấp RAM với Laptop Gaming.",
        link: APP_ROUTE.collection.byCate(
          "chuong-trinh-khuyen-mai/?id=68dd053bf4e61a0012f6f78b&item_group_id=IG2"
        ),
      },
    ],
  },
};

export const _variants: ProductVariant[] = [
  {
    id: "lp-001",
    name: "Laptop Pro 14 - i5 / 16GB / 512GB - Silver",
    attributes: [
      {
        id: "ver-i5-16-512",
        type: "version",
        displayName: "Phiên bản",
        value: "Intel i5 / 16GB RAM / 512GB SSD",
      },
      {
        id: "color-silver",
        type: "color",
        displayName: "Màu sắc",
        value: "Bạc",
      },
    ],
    price: {
      original: 24990000,
      discount: 22990000,
    },
    stock: {
      quantity: 15,
      status: "in_stock",
    },
  },
  {
    id: "lp-002",
    name: "Laptop Pro 14 - i5 / 16GB / 512GB - Space Gray",
    attributes: [
      {
        id: "ver-i5-16-512",
        type: "version",
        displayName: "Phiên bản",
        value: "Intel i5 / 16GB RAM / 512GB SSD",
      },
      {
        id: "color-space-gray",
        type: "color",
        displayName: "Màu sắc",
        value: "Xám không gian",
      },
    ],
    price: {
      original: 24990000,
      discount: 22990000,
    },
    stock: {
      quantity: 5,
      status: "low_stock",
    },
  },
  {
    id: "lp-003",
    name: "Laptop Pro 14 - i7 / 16GB / 512GB - Silver",
    attributes: [
      {
        id: "ver-i7-16-512",
        type: "version",
        displayName: "Phiên bản",
        value: "Intel i7 / 16GB RAM / 512GB SSD",
      },
      {
        id: "color-silver",
        type: "color",
        displayName: "Màu sắc",
        value: "Bạc",
      },
    ],
    price: {
      original: 27990000,
      discount: 25990000,
    },
    stock: {
      quantity: 10,
      status: "in_stock",
    },
  },
  {
    id: "lp-004",
    name: "Laptop Pro 14 - i7 / 16GB / 512GB - Space Gray",
    attributes: [
      {
        id: "ver-i7-16-512",
        type: "version",
        displayName: "Phiên bản",
        value: "Intel i7 / 16GB RAM / 512GB SSD",
      },
      {
        id: "color-space-gray",
        type: "color",
        displayName: "Màu sắc",
        value: "Xám không gian",
      },
    ],
    price: {
      original: 27990000,
      discount: 25990000,
    },
    stock: {
      quantity: 0,
      status: "out_of_stock",
    },
  },
  {
    id: "lp-005",
    name: "Laptop Pro 14 - i7 / 32GB / 1TB - Silver",
    attributes: [
      {
        id: "ver-i7-32-1tb",
        type: "version",
        displayName: "Phiên bản",
        value: "Intel i7 / 32GB RAM / 1TB SSD",
      },
      {
        id: "color-silver",
        type: "color",
        displayName: "Màu sắc",
        value: "Bạc",
      },
    ],
    price: {
      original: 32990000,
      discount: 30990000,
    },
    stock: {
      quantity: 8,
      status: "in_stock",
    },
  },

  {
    id: "lp-007",
    name: "Laptop Pro 14 - Ryzen 7 / 16GB / 512GB - Silver",
    attributes: [
      {
        id: "ver-r7-16-512",
        type: "version",
        displayName: "Phiên bản",
        value: "Ryzen 7 / 16GB RAM / 512GB SSD",
      },
      {
        id: "color-silver",
        type: "color",
        displayName: "Màu sắc",
        value: "Bạc",
      },
    ],
    price: {
      original: 26990000,
      discount: 24990000,
    },
    stock: {
      quantity: 12,
      status: "in_stock",
    },
  },
  {
    id: "lp-008",
    name: "Laptop Pro 14 - Ryzen 7 / 16GB / 512GB - Space Gray",
    attributes: [
      {
        id: "ver-r7-16-512",
        type: "version",
        displayName: "Phiên bản",
        value: "Ryzen 7 / 16GB RAM / 512GB SSD",
      },
      {
        id: "color-space-gray",
        type: "color",
        displayName: "Màu sắc",
        value: "Xám không gian",
      },
    ],
    price: {
      original: 26990000,
      discount: 24990000,
    },
    stock: {
      quantity: 0,
      status: "out_of_stock",
    },
  },
  {
    id: "lp-009",
    name: "Laptop Pro 14 - Ryzen 9 / 32GB / 1TB - Silver",
    attributes: [
      {
        id: "ver-r9-32-1tb",
        type: "version",
        displayName: "Phiên bản",
        value: "Ryzen 9 / 32GB RAM / 1TB SSD",
      },
      {
        id: "color-silver",
        type: "color",
        displayName: "Màu sắc",
        value: "Bạc",
      },
    ],
    price: {
      original: 35990000,
      discount: 33990000,
    },
    stock: {
      quantity: 6,
      status: "in_stock",
    },
  },
  {
    id: "lp-010",
    name: "Laptop Pro 14 - Ryzen 9 / 32GB / 1TB - Space Gray",
    attributes: [
      {
        id: "ver-r9-32-1tb",
        type: "version",
        displayName: "Phiên bản",
        value: "Ryzen 9 / 32GB RAM / 1TB SSD",
      },
      {
        id: "color-space-gray",
        type: "color",
        displayName: "Màu sắc",
        value: "Xám không gian",
      },
    ],
    price: {
      original: 35990000,
      discount: 33990000,
    },
    stock: {
      quantity: 1,
      status: "low_stock",
    },
  },
];

export const _vouchers: Voucher[] = [
  {
    code: "T1VODICH",
    discount: 10,
    type: "percent",
    minAmount: 0,
    maxAmount: 0,
    detail: [
      "Giảm ngay 3,000,000đ",
      "Tặng Window 11 Pro bản quyền khi mua các sản phẩm PC",
    ],
  },
  {
    code: "VOUCHER 2",
    discount: 10,
    type: "percent",
    minAmount: 0,
    maxAmount: 0,
    detail: [
      "Giảm ngay 3,000,000đ",
      "Tặng Window 11 Pro bản quyền khi mua các sản phẩm PC",
    ],
  },
  {
    code: "VOUCHER 3",
    discount: 10,
    type: "percent",
    minAmount: 0,
    maxAmount: 0,
    detail: [
      "Giảm ngay 3,000,000đ",
      "Tặng Window 11 Pro bản quyền khi mua các sản phẩm PC",
    ],
  },
];

export const _stores_availability: Store[] = [
  {
    address: "78-80-82 Hoàng Hoa Thám, Phường Bảy Hiền, TP.HCM",
    name: "Cửa hàng 1",
    phone: "1900.5301",
    city: "Hồ Chí Minh",
  },
  {
    address: "905 Kha Vạn Cân, Phường Linh Tây, TP.HCM",
    name: "Cửa hàng 2",
    phone: "1900.5301",
    city: "Hồ Chí Minh",
  },
];
