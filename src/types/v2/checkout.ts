export interface CustomerInfo {
  fullName: string;
  phone: string;
  email: string;
}

export interface ShippingAddress {
  province: string;
  district: string;
  ward: string;
  street: string;
  houseNumber: string;
}

export interface Showroom {
  id: string;
  name: string;
  address: string;
  phone: string;
  availableProducts: string[]; // product IDs available at this showroom
}

export interface InvoiceInfo {
  companyName: string;
  companyAddress: string;
  taxCode: string;
  email: string;
}

export interface ShippingService {
  id: string;
  name: string;
  fee: number;
  estimatedDays: number;
  description: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: "cod" | "bank_transfer" | "momo" | "vnpay" | "zalopay";
  description?: string;
  fee?: number;
}

export interface Voucher {
  code: string;
  value: number;
}

export type CheckoutStep = "cart" | "confirmAndPay" | "complete";
