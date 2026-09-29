/* eslint-disable @typescript-eslint/no-explicit-any */
// Checkout-related types
export interface CheckoutFormErrors {
  [key: string]: string | undefined;
}

export interface CheckoutValidationResult {
  isValid: boolean;
  errors: CheckoutFormErrors;
}

// Shipping-related types
export interface ShippingCalculation {
  baseRate: number;
  distanceMultiplier: number;
  weightMultiplier: number;
  totalFee: number;
  estimatedDays: number;
}

export interface DeliveryTimeSlot {
  id: string;
  label: string;
  startTime: string;
  endTime: string;
  available: boolean;
  additionalFee?: number;
}

export interface ShippingProvider {
  id: string;
  name: string;
  logo: string;
  description: string;
  services: ShippingService[];
  coverage: string[]; // Province codes
}

export interface ShippingService {
  id: string;
  providerId: string;
  name: string;
  description: string;
  fee: number;
  estimatedDays: number;
  maxWeight: number; // in kg
  maxDimensions: {
    length: number;
    width: number;
    height: number;
  };
  features: string[];
  timeSlots?: DeliveryTimeSlot[];
}

// Payment-related types
export interface PaymentProvider {
  id: string;
  name: string;
  logo: string;
  type: "cod" | "bank_transfer" | "e_wallet" | "credit_card";
  description: string;
  fee: number;
  feeType: "fixed" | "percentage";
  minAmount?: number;
  maxAmount?: number;
  processingTime: string;
  available: boolean;
}

export interface PaymentMethod {
  id: string;
  providerId: string;
  name: string;
  type: "cod" | "bank_transfer" | "momo" | "vnpay" | "zalopay" | "credit_card";
  description?: string;
  fee?: number;
  feeType?: "fixed" | "percentage";
  logo?: string;
  instructions?: string[];
  processingTime?: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  accountHolder: string;
  branch?: string;
  swiftCode?: string;
}

export interface PaymentInstructions {
  method: PaymentMethod;
  bankAccount?: BankAccount;
  qrCode?: string;
  steps: string[];
  notes?: string[];
  expiryTime?: Date;
}

// Order-related types
export interface OrderItem {
  productId: string;
  sku: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  weight?: number;
  dimensions?: {
    length: number;
    width: number;
    height: number;
  };
}

export interface OrderSummary {
  items: OrderItem[];
  subtotal: number;
  shippingFee: number;
  paymentFee: number;
  discount: number;
  tax: number;
  total: number;
  currency: string;
}

export interface OrderTracking {
  orderId: string;
  trackingNumber?: string;
  status:
    | "pending"
    | "confirmed"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled";
  statusHistory: {
    status: string;
    timestamp: Date;
    description: string;
    location?: string;
  }[];
  estimatedDelivery?: Date;
  actualDelivery?: Date;
}

// Showroom-related types
export interface ShowroomLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  email?: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  openingHours: {
    [key: string]: {
      open: string;
      close: string;
      closed?: boolean;
    };
  };
  services: string[];
  images?: string[];
  availableProducts: string[]; // Product IDs
  maxPickupDays: number;
}

export interface PickupTimeSlot {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  available: boolean;
  maxOrders?: number;
  currentOrders?: number;
}

// Promotion and discount types
export interface Coupon {
  code: string;
  name: string;
  description: string;
  type: "percentage" | "fixed" | "shipping" | "product";
  value: number;
  minOrderAmount?: number;
  maxDiscountAmount?: number;
  validFrom: Date;
  validTo: Date;
  usageLimit?: number;
  usedCount: number;
  applicableProducts?: string[];
  applicableCategories?: string[];
  firstTimeOnly?: boolean;
}

export interface DiscountCalculation {
  couponCode?: string;
  discountType: "coupon" | "promotion" | "loyalty" | "bulk";
  discountAmount: number;
  description: string;
  appliedTo: "subtotal" | "shipping" | "specific_items";
}

// Form state types
export interface CheckoutFormState {
  currentStep: number;
  completedSteps: number[];
  formData: {
    customer: CustomerFormData;
    delivery: DeliveryFormData;
    payment: PaymentFormData;
  };
  errors: {
    [stepKey: string]: CheckoutFormErrors;
  };
  touched: {
    [stepKey: string]: {
      [fieldKey: string]: boolean;
    };
  };
}

export interface CustomerFormData {
  gender: "male" | "female" | "other";
  fullName: string;
  phone: string;
  email?: string;
  dateOfBirth?: string;
}

export interface DeliveryFormData {
  method: "home" | "showroom";
  address?: {
    province: string;
    district: string;
    ward: string;
    street: string;
    houseNumber: string;
    note?: string;
  };
  showroom?: {
    id: string;
    pickupDate?: string;
    pickupTimeSlot?: string;
  };
  shippingService?: string;
  deliveryNote?: string;
}

export interface PaymentFormData {
  method: string;
  agreeToTerms: boolean;
  subscribeNewsletter?: boolean;
  savePaymentMethod?: boolean;
}

// API response types
export interface CheckoutApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
  meta?: {
    timestamp: string;
    requestId: string;
  };
}

export interface CreateOrderRequest {
  customerInfo: CustomerFormData;
  deliveryInfo: DeliveryFormData;
  paymentInfo: PaymentFormData;
  items: OrderItem[];
  couponCode?: string;
  notes?: string;
}

export interface CreateOrderResponse {
  orderId: string;
  orderNumber: string;
  status: string;
  total: number;
  paymentInstructions?: PaymentInstructions;
  estimatedDelivery?: string;
  trackingInfo?: {
    trackingNumber: string;
    trackingUrl: string;
  };
}

// Utility types
export type CheckoutStepKey = "cart" | "shipping" | "payment" | "completion";

export type FormFieldError = string | undefined;

export type ValidationRule<T = any> = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: T) => boolean | string;
};

export type FormValidationRules<T> = {
  [K in keyof T]?: ValidationRule<T[K]>;
};

// Event types
export interface CheckoutEvent {
  type: "step_change" | "form_submit" | "validation_error" | "order_created";
  step?: CheckoutStepKey;
  data?: any;
  timestamp: Date;
}

export interface CheckoutAnalytics {
  sessionId: string;
  userId?: string;
  events: CheckoutEvent[];
  startTime: Date;
  completionTime?: Date;
  abandonedAt?: CheckoutStepKey;
  conversionFunnel: {
    [step in CheckoutStepKey]: {
      entered: number;
      completed: number;
      abandoned: number;
    };
  };
}
