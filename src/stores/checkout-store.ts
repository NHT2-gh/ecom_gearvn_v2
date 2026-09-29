import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductCart } from "@/types/product";
import { _cartItems } from "@/_mocks/_mock_checkout/_mock_cart_items";
import { CartItem } from "@/types/v2/cart";
import {
  CheckoutStep,
  CustomerInfo,
  InvoiceInfo,
  PaymentMethod,
  ShippingAddress,
  ShippingService,
  Showroom,
  Voucher,
} from "@/types/v2/checkout";
import { _vouchers } from "@/_mocks/_mock_checkout/_mock_vouchers";

// Types

// Store Interface
interface CheckoutState {
  // Current step
  currentStep: CheckoutStep;

  // Cart data
  cartItems: CartItem[];

  // Customer info
  customerInfo: CustomerInfo;

  // Delivery method
  deliveryMethod: "home" | "showroom" | null;

  // Address (for home delivery)
  shippingAddress: ShippingAddress;

  // Showroom (for pickup)
  selectedShowroom: Showroom | null;

  // Invoice info
  invoiceRequired: boolean;
  invoiceInfo: InvoiceInfo;

  // Shipping & Payment
  shippingService: ShippingService | null;
  paymentMethod: PaymentMethod | null;

  // Order totals
  subtotal: number;
  shippingFee: number;
  productDiscount: number;
  voucherDiscount: number;

  appliedVouchers: Voucher[];
  total: number;

  // Order info (after completion)
  orderId: string | null;
  orderStatus:
    | "pending"
    | "confirmed"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled";

  // Actions
  setCurrentStep: (step: CheckoutStep) => void;

  // Cart actions
  updateCartItems: (items: CartItem[]) => void;
  removeCartItem: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;

  // Customer actions
  updateCustomerInfo: (info: Partial<CustomerInfo>) => void;

  // Delivery actions
  setDeliveryMethod: (method: "home" | "showroom") => void;
  updateShippingAddress: (address: Partial<ShippingAddress>) => void;
  setSelectedShowroom: (showroom: Showroom | null) => void;

  // Invoice actions
  toggleInvoiceRequired: () => void;
  updateInvoiceInfo: (info: Partial<InvoiceInfo>) => void;

  // Shipping & Payment actions
  setShippingService: (service: ShippingService | null) => void;
  setPaymentMethod: (method: PaymentMethod | null) => void;

  // Calculation actions
  calculateTotals: () => void;

  // Order actions
  setOrderId: (orderId: string) => void;
  setOrderStatus: (status: CheckoutState["orderStatus"]) => void;

  // Reset actions
  resetCheckout: () => void;
  resetToCart: () => void;
}

// Initial state
const initialState = {
  currentStep: "cart" as CheckoutStep,
  cartItems: _cartItems,
  customerInfo: {
    fullName: "",
    phone: "",
    email: "",
  },
  deliveryMethod: null,
  shippingAddress: {
    province: "",
    district: "",
    ward: "",
    street: "",
    houseNumber: "",
  },
  selectedShowroom: null,
  invoiceRequired: false,
  invoiceInfo: {
    companyName: "",
    companyAddress: "",
    taxCode: "",
    email: "",
  },
  shippingService: null,
  paymentMethod: null,
  subtotal: 0,
  shippingFee: 0,
  appliedVouchers: _vouchers,
  productDiscount: 0,
  voucherDiscount: 0,
  total: 0,
  orderId: null,
  orderStatus: "pending" as const,
};

// Store implementation
export const useCheckoutStore = create<CheckoutState>()(
  // persist(
  (set, get) => ({
    ...initialState,

    // Navigation
    setCurrentStep: (step) => set({ currentStep: step }),

    // Cart actions
    updateCartItems: (items) => {
      set({ cartItems: items });
      get().calculateTotals();
    },

    removeCartItem: (productId) => {
      const items = get().cartItems.filter((item) => item.id !== productId);
      set({ cartItems: items });
      get().calculateTotals();
    },

    updateCartItemQuantity: (productId, quantity) => {
      const items = get().cartItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      );
      set({ cartItems: items });
      get().calculateTotals();
    },

    // Customer actions
    updateCustomerInfo: (info) => {
      set((state) => ({
        customerInfo: { ...state.customerInfo, ...info },
      }));
    },

    // Delivery actions
    setDeliveryMethod: (method) => {
      set({ deliveryMethod: method });
      // Reset opposite method data
      if (method === "home") {
        set({ selectedShowroom: null });
      } else {
        set({
          shippingAddress: {
            province: "",
            district: "",
            ward: "",
            street: "",
            houseNumber: "",
          },
        });
      }
    },

    updateShippingAddress: (address) =>
      set((state) => ({
        shippingAddress: { ...state.shippingAddress, ...address },
      })),

    setSelectedShowroom: (showroom) => set({ selectedShowroom: showroom }),

    // Invoice actions
    toggleInvoiceRequired: () =>
      set((state) => ({ invoiceRequired: !state.invoiceRequired })),

    updateInvoiceInfo: (info) =>
      set((state) => ({
        invoiceInfo: { ...state.invoiceInfo, ...info },
      })),

    // Shipping & Payment actions
    setShippingService: (service) => {
      set({ shippingService: service });
      get().calculateTotals();
    },

    setPaymentMethod: (method) => set({ paymentMethod: method }),

    // Calculation
    calculateTotals: () => {
      const { cartItems, shippingService } = get();

      const subtotal = cartItems.reduce((sum, item) => {
        const price = item.price.original;
        return sum + price * item.quantity;
      }, 0);

      const productDiscount = cartItems.reduce((sum, item) => {
        const price = item.price.discount || item.price.original;
        const discountPrice = item.price.original - price;
        return sum + discountPrice * item.quantity;
      }, 0);

      const voucherDiscount = get().appliedVouchers.reduce((sum, voucher) => {
        return sum + voucher.value;
      }, 0);

      const shippingFee = shippingService?.fee || 0;
      const total = subtotal + shippingFee - productDiscount - voucherDiscount;

      set({ subtotal, shippingFee, total, productDiscount, voucherDiscount });
    },

    // Order actions
    setOrderId: (orderId) => set({ orderId }),
    setOrderStatus: (status) => set({ orderStatus: status }),

    // Reset actions
    resetCheckout: () => set(initialState),

    resetToCart: () =>
      set({
        currentStep: "cart",
        deliveryMethod: null,
        shippingAddress: initialState.shippingAddress,
        selectedShowroom: null,
        invoiceRequired: false,
        invoiceInfo: initialState.invoiceInfo,
        shippingService: null,
        paymentMethod: null,
        orderId: null,
        orderStatus: "pending",
      }),
  }),

  // {
  //   name: "checkout-storage",
  //   partialize: (state) => ({
  //     // Only persist essential data
  //     cartItems: state.cartItems,
  //     customerInfo: state.customerInfo,
  //     deliveryMethod: state.deliveryMethod,
  //     shippingAddress: state.shippingAddress,
  //     selectedShowroom: state.selectedShowroom,
  //     invoiceRequired: state.invoiceRequired,
  //     invoiceInfo: state.invoiceInfo,
  //     shippingService: state.shippingService,
  //     paymentMethod: state.paymentMethod,
  //   }),
  // },
);
// );
