import { MapPin, Truck } from "lucide-react";

export const mockShowrooms = [
  {
    id: "showroom-hcm-1",
    name: "GearVN Quận 1",
    address: "78-80 Hoàng Hoa Thám, Phường 12, Quận Tân Bình, TP.HCM",
    phone: "028 7300 6200",
    coordinates: { lat: 10.7769, lng: 106.6951 },
    openingHours: {
      monday: { open: "08:00", close: "21:00" },
      tuesday: { open: "08:00", close: "21:00" },
      wednesday: { open: "08:00", close: "21:00" },
      thursday: { open: "08:00", close: "21:00" },
      friday: { open: "08:00", close: "21:00" },
      saturday: { open: "08:00", close: "21:00" },
      sunday: { open: "08:00", close: "21:00" },
    },
    services: [
      "Trải nghiệm sản phẩm",
      "Tư vấn kỹ thuật",
      "Bảo hành",
      "Lắp đặt",
    ],
    availableProducts: ["123"], // All products available
    maxPickupDays: 7,
    isOpen: true,
  },
  {
    id: "showroom-hcm-2",
    name: "GearVN Quận 7",
    address: "123 Nguyễn Văn Linh, Phường Tân Phú, Quận 7, TP.HCM",
    phone: "028 7300 6201",
    coordinates: { lat: 10.7329, lng: 106.7172 },
    openingHours: {
      monday: { open: "08:00", close: "21:00" },
      tuesday: { open: "08:00", close: "21:00" },
      wednesday: { open: "08:00", close: "21:00" },
      thursday: { open: "08:00", close: "21:00" },
      friday: { open: "08:00", close: "21:00" },
      saturday: { open: "08:00", close: "21:00" },
      sunday: { open: "08:00", close: "21:00" },
    },
    services: ["Trải nghiệm sản phẩm", "Tư vấn kỹ thuật", "Bảo hành"],
    availableProducts: ["123"],
    maxPickupDays: 7,
    isOpen: true,
  },
  {
    id: "showroom-hn-1",
    name: "GearVN Hà Nội",
    address: "56 Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Hà Nội",
    phone: "024 7300 6200",
    coordinates: { lat: 21.0285, lng: 105.8542 },
    openingHours: {
      monday: { open: "08:00", close: "21:00" },
      tuesday: { open: "08:00", close: "21:00" },
      wednesday: { open: "08:00", close: "21:00" },
      thursday: { open: "08:00", close: "21:00" },
      friday: { open: "08:00", close: "21:00" },
      saturday: { open: "08:00", close: "21:00" },
      sunday: { open: "08:00", close: "21:00" },
    },
    services: [
      "Trải nghiệm sản phẩm",
      "Tư vấn kỹ thuật",
      "Bảo hành",
      "Lắp đặt",
    ],
    availableProducts: [], // No products available
    maxPickupDays: 7,
    isOpen: false, // Temporarily closed
  },
];

export const mockShippingServices = [
  {
    id: "ghtk-standard",
    providerId: "ghtk",
    name: "Giao hàng tiết kiệm - Tiêu chuẩn",
    description: "Giao hàng trong 2-3 ngày làm việc",
    fee: 40000,
    estimatedDays: 3,
    features: ["Bảo hiểm hàng hóa", "Theo dõi đơn hàng", "Giao hàng tận nơi"],
    logo: "/images/shipping/ghtk.png",
    available: true,
  },
  {
    id: "free",
    providerId: "free",
    name: "Miễn phí",
    description: "Tự động áp dụng miễn phí giao hàng cho đơn từ 500k",
    fee: 0,
    estimatedDays: 4,
    features: [
      "Bảo hiểm hàng hóa",
      "Mạng lưới toàn quốc",
      "Dịch vụ chính thức",
    ],
    logo: "/images/shipping/vnpost.png",
    available: true,
  },
];

export const deliveryOptions = [
  {
    value: "home" as const,
    title: "Giao hàng tận nơi",
    description: "Giao hàng đến địa chỉ của bạn",
    icon: Truck,
    features: [
      "Giao hàng trong 2-3 ngày",
      "Kiểm tra hàng trước khi thanh toán",
      "Miễn phí giao hàng cho đơn từ 500k",
    ],
    estimatedTime: "2-3 ngày làm việc",
  },
  {
    value: "showroom" as const,
    title: "Nhận tại showroom",
    description: "Đến showroom để nhận hàng và trải nghiệm",
    icon: MapPin,
    features: [
      "Nhận hàng ngay trong ngày",
      "Được tư vấn và kiểm tra kỹ",
      "Miễn phí hoàn toàn",
    ],
    estimatedTime: "Trong ngày",
  },
];
