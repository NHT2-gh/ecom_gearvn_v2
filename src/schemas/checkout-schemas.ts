import { z } from "zod";

// Phone validation for Vietnamese numbers
const phoneRegex = /^(0|\+84)[3|5|7|8|9][0-9]{8}$/;

// Tax code validation (10-13 digits)
const taxCodeRegex = /^[0-9]{10,13}$/;
// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Customer Info Schema
export const customerInfoSchema = z.object({
  fullName: z
    .string()
    .min(2, "Họ tên phải có ít nhất 2 ký tự")
    .max(50, "Họ tên không được quá 50 ký tự")
    .regex(/^[a-zA-ZÀ-ỹ\s]+$/, "Họ tên chỉ được chứa chữ cái và khoảng trắng"),
  phone: z
    .string()
    .regex(phoneRegex, "Số điện thoại không hợp lệ (VD: 0901234567)")
    .min(10, "Số điện thoại phải có ít nhất 10 số")
    .max(11, "Số điện thoại không được quá 11 số"),

  email: z
    .string()
    .regex(emailRegex, "Email không hợp lệ")
    .max(100, "Email không được quá 100 ký tự"),
});

// Address Schema
export const addressSchema = z.object({
  province: z.string().min(1, "Vui lòng chọn tỉnh/thành phố"),
  district: z.string().min(1, "Vui lòng chọn quận/huyện"),
  ward: z.string().min(1, "Vui lòng chọn phường/xã"),
  street: z
    .string()
    .min(1, "Vui lòng nhập tên đường")
    .max(100, "Tên đường không được quá 100 ký tự"),
  houseNumber: z
    .string()
    .min(1, "Vui lòng nhập số nhà")
    .max(20, "Số nhà không được quá 20 ký tự"),
});

// Showroom Schema
export const showroomSchema = z.object({
  id: z.string().min(1, "Vui lòng chọn showroom"),
  name: z.string().min(1, "Tên showroom không được để trống"),
  address: z.string().min(1, "Địa chỉ showroom không được để trống"),
  phone: z.string().regex(phoneRegex, "Số điện thoại showroom không hợp lệ"),
  availableProducts: z
    .array(z.string())
    .min(1, "Showroom phải có ít nhất 1 sản phẩm"),
});

// Invoice Info Schema
export const invoiceSchema = z.object({
  companyName: z
    .string()
    .min(2, "Tên công ty phải có ít nhất 2 ký tự")
    .max(100, "Tên công ty không được quá 100 ký tự"),
  companyAddress: z
    .string()
    .min(10, "Địa chỉ công ty phải có ít nhất 10 ký tự")
    .max(200, "Địa chỉ công ty không được quá 200 ký tự"),
  taxCode: z
    .string()
    .regex(taxCodeRegex, "Mã số thuế phải có 10-13 chữ số")
    .min(10, "Mã số thuế phải có ít nhất 10 chữ số")
    .max(13, "Mã số thuế không được quá 13 chữ số"),
  email: z
    .string()
    .regex(emailRegex, "Email không hợp lệ")
    .max(100, "Email không được quá 100 ký tự"),
});

// Shipping Service Schema
export const shippingServiceSchema = z.object({
  id: z.string().min(1, "Vui lòng chọn dịch vụ vận chuyển"),
  name: z.string().min(1, "Tên dịch vụ không được để trống"),
  fee: z.number().min(0, "Phí vận chuyển không được âm"),
  estimatedDays: z.number().min(1, "Thời gian giao hàng phải ít nhất 1 ngày"),
  description: z.string().optional(),
});

// Payment Method Schema
export const paymentMethodSchema = z.object({
  id: z.string().min(1, "Vui lòng chọn phương thức thanh toán"),
  name: z.string().min(1, "Tên phương thức không được để trống"),
  type: z.enum(["cod", "bank_transfer", "momo", "vnpay", "zalopay"], {
    message: "Loại thanh toán không hợp lệ",
  }),
  description: z.string().optional(),
  fee: z.number().min(0, "Phí thanh toán không được âm").optional(),
});

// Complete Shipping Form Schema
export const checkoutSchema = z
  .object({
    customerInfo: customerInfoSchema,
    deliveryMethod: z.enum(["home", "showroom"], {
      message: "Vui lòng chọn phương thức giao hàng",
    }),
    shippingAddress: addressSchema.optional(),
    selectedShowroom: showroomSchema.optional(),
    invoiceRequired: z.boolean(),
    invoiceInfo: invoiceSchema.optional(),
    shippingService: shippingServiceSchema.optional(),
  })
  .superRefine((data, ctx) => {
    // Validate delivery method requirements
    if (data.deliveryMethod === "home") {
      if (!data.shippingAddress) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Vui lòng nhập địa chỉ giao hàng",
          path: ["shippingAddress"],
        });
      }
      if (!data.shippingService) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Vui lòng chọn dịch vụ vận chuyển",
          path: ["shippingService"],
        });
      }
    }

    if (data.deliveryMethod === "showroom") {
      if (!data.selectedShowroom) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Vui lòng chọn Showroom nhận hàng",
          path: ["selectedShowroom"],
        });
      }
    }

    // Validate invoice requirements
    if (data.invoiceRequired && !data.invoiceInfo) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Vui lòng điền thông tin xuất hóa đơn",
        path: ["invoiceInfo"],
      });
    }
  });

// Payment Form Schema
export const paymentFormSchema = z.object({
  paymentMethod: paymentMethodSchema,
  // Add additional payment-specific fields here if needed
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "Vui lòng đồng ý với điều khoản và điều kiện",
  }),
});

// Order Completion Schema
export const orderCompletionSchema = z.object({
  orderId: z.string().min(1, "Mã đơn hàng không được để trống"),
  orderStatus: z.enum([
    "pending",
    "confirmed",
    "processing",
    "shipped",
    "delivered",
    "cancelled",
  ]),
  paymentStatus: z.enum(["pending", "paid", "failed", "refunded"]).optional(),
});

// Cart Item Schema
export const cartItemSchema = z.object({
  product_id: z.string().min(1, "ID sản phẩm không được để trống"),
  sku: z.string().min(1, "SKU không được để trống"),
  name: z.string().min(1, "Tên sản phẩm không được để trống"),
  price: z.object({
    original: z.number().min(0, "Giá gốc không được âm"),
    discount: z.number().min(0, "Giá khuyến mãi không được âm").optional(),
  }),
  image: z.string().url("URL hình ảnh không hợp lệ"),
  quantity: z.number().min(1, "Số lượng phải ít nhất 1"),
  stock: z.object({
    stock: z.number().min(0, "Tồn kho không được âm"),
  }),
});

// Complete Checkout Schema (for final validation)
export const completeCheckoutSchema = z
  .object({
    cartItems: z.array(cartItemSchema).min(1, "Giỏ hàng không được trống"),
    customerInfo: customerInfoSchema,
    deliveryMethod: z.enum(["home", "showroom"]),
    shippingAddress: addressSchema.optional(),
    selectedShowroom: showroomSchema.optional(),
    invoiceRequired: z.boolean(),
    invoiceInfo: invoiceSchema.optional(),
    shippingService: shippingServiceSchema.optional(),
    paymentMethod: paymentMethodSchema,
  })
  .superRefine((data, ctx) => {
    // Same validation logic as shippingFormSchema
    if (data.deliveryMethod === "home") {
      if (!data.shippingAddress) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Địa chỉ giao hàng là bắt buộc",
          path: ["shippingAddress"],
        });
      }
      if (!data.shippingService) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Dịch vụ vận chuyển là bắt buộc",
          path: ["shippingService"],
        });
      }
    }

    if (data.deliveryMethod === "showroom" && !data.selectedShowroom) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Showroom là bắt buộc",
        path: ["selectedShowroom"],
      });
    }

    if (data.invoiceRequired && !data.invoiceInfo) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Thông tin hóa đơn là bắt buộc",
        path: ["invoiceInfo"],
      });
    }
  });

// Type exports
export type CustomerInfoFormData = z.infer<typeof customerInfoSchema>;
export type AddressFormData = z.infer<typeof addressSchema>;
export type ShowroomFormData = z.infer<typeof showroomSchema>;
export type InvoiceFormData = z.infer<typeof invoiceSchema>;
export type CheckoutFormData = z.infer<typeof checkoutSchema>;
export type PaymentFormData = z.infer<typeof paymentFormSchema>;
export type OrderCompletionData = z.infer<typeof orderCompletionSchema>;
export type CartItemData = z.infer<typeof cartItemSchema>;
export type CompleteCheckoutData = z.infer<typeof completeCheckoutSchema>;
