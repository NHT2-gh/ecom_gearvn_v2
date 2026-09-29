// ----------------------------------------------------------------------

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: "male" | "female" | "other";
  avatar?: string;
}

export interface Address {
  id: string;
  title: string;
  fullName: string;
  phone: string;
  address: string;
  city: string;
  district: string;
  ward: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: Date;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  total: number;
  items: number;
  trackingNumber?: string;
}

export interface ViewedProduct {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  slug: string;
  viewedAt: string;
}

// Mock Data
export const mockUser: User = {
  id: "1",
  firstName: "Nguyen",
  lastName: "Van A",
  email: "nguyenvana@example.com",
  phone: "0123456789",
  dateOfBirth: "1990-01-15",
  gender: "male",
  avatar:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
};

export const mockAddresses: Address[] = [
  {
    id: "1",
    title: "Nhà riêng",
    fullName: "Nguyen Van A",
    phone: "0123456789",
    address: "123 Nguyen Trai",
    city: "Ho Chi Minh",
    district: "District 1",
    ward: "Ward 1",
    isDefault: true,
  },
  {
    id: "2",
    title: "Văn phòng",
    fullName: "Nguyen Van A",
    phone: "0987654321",
    address: "456 Le Loi",
    city: "Ho Chi Minh",
    district: "District 3",
    ward: "Ward 5",
    isDefault: false,
  },
];

export const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "GVN001234",
    date: new Date("2024-01-15"),
    status: "delivered",
    total: 2500000,
    items: 3,
    trackingNumber: "TN123456789",
  },
  {
    id: "2",
    orderNumber: "GVN001235",
    date: new Date("2024-01-20"),
    status: "shipped",
    total: 1800000,
    items: 2,
    trackingNumber: "TN123456790",
  },
  {
    id: "3",
    orderNumber: "GVN001236",
    date: new Date("2024-01-25"),
    status: "processing",
    total: 3200000,
    items: 1,
  },
  {
    id: "4",
    orderNumber: "GVN001237",
    date: new Date("2024-01-28"),
    status: "pending",
    total: 950000,
    items: 2,
  },
];

export const mockViewedProducts: ViewedProduct[] = [
  {
    id: "1",
    name: "Gaming Laptop ASUS ROG Strix G15",
    price: 25000000,
    originalPrice: 28000000,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=300&h=300&fit=crop",
    slug: "gaming-laptop-asus-rog-strix-g15",
    viewedAt: "2024-01-28T10:30:00Z",
  },
  {
    id: "2",
    name: "Mechanical Keyboard Logitech G Pro X",
    price: 3500000,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=300&fit=crop",
    slug: "mechanical-keyboard-logitech-g-pro-x",
    viewedAt: "2024-01-27T15:45:00Z",
  },
  {
    id: "3",
    name: "Gaming Mouse Razer DeathAdder V3",
    price: 1200000,
    originalPrice: 1500000,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
    slug: "gaming-mouse-razer-deathadder-v3",
    viewedAt: "2024-01-26T09:15:00Z",
  },
  {
    id: "4",
    name: 'Monitor Gaming LG UltraGear 27"',
    price: 8500000,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop",
    slug: "monitor-gaming-lg-ultragear-27",
    viewedAt: "2024-01-25T14:20:00Z",
  },
  {
    id: "5",
    name: "Gaming Chair DXRacer Formula Series",
    price: 6500000,
    originalPrice: 7200000,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop",
    slug: "gaming-chair-dxracer-formula-series",
    viewedAt: "2024-01-24T11:30:00Z",
  },
  {
    id: "6",
    name: "Headset SteelSeries Arctis 7",
    price: 4200000,
    image:
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=300&h=300&fit=crop",
    slug: "headset-steelseries-arctis-7",
    viewedAt: "2024-01-23T16:45:00Z",
  },
];
