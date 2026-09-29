"use client";

import React from "react";
import { useFormContext } from "react-hook-form";
import { InvoiceFormData, CheckoutFormData } from "@/schemas/checkout-schemas";
import { useCheckout } from "@/hooks/use-checkout";
import { cn } from "@/lib/utils";
import { Building, MapPin, Hash, Mail, Info } from "lucide-react";
import { BlockInfo } from "@/components/block-info";
import { Input } from "@/components/v2/ui/input";

export default function InvoiceForm() {
  const { invoiceRequired, toggleInvoiceRequired, updateInvoiceInfo } =
    useCheckout();

  const {
    register,
    formState: { errors, isValid },
    watch,
  } = useFormContext<CheckoutFormData>();

  // Watch for changes and update store
  React.useEffect(() => {
    if (invoiceRequired) {
      const subscription = watch((value) => {
        if (value.invoiceInfo) {
          updateInvoiceInfo(value.invoiceInfo as InvoiceFormData);
        }
      });
      return () => subscription.unsubscribe();
    }
  }, [watch, updateInvoiceInfo, invoiceRequired]);

  // Reset invoice info when disabled (Logic already in store/checkout hook likely, but kept here as per original)
  React.useEffect(() => {
    if (!invoiceRequired) {
      updateInvoiceInfo({
        companyName: "",
        companyAddress: "",
        taxCode: "",
        email: "",
      });
    }
  }, [invoiceRequired, updateInvoiceInfo]);

  // Helper validation status specific to invoice info
  // Since isValid refers to the WHOLE form now, we need to check only invoice errors
  const isInvoiceValid =
    !errors.invoiceInfo?.companyName &&
    !errors.invoiceInfo?.companyAddress &&
    !errors.invoiceInfo?.taxCode &&
    !errors.invoiceInfo?.email;

  // Note: RHF 'isValid' is global. If we want local valid status, we check if errors.invoiceInfo is empty.
  // However, errors only appear if touched or triggered.
  // The original code used 'isValid' from local object.
  // We can approximate this by checking if there are any errors in invoiceInfo.

  const hasInvoiceErrors = !!errors.invoiceInfo;

  return (
    <div className="space-y-6">
      {/* Invoice Toggle */}
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 text-gray-600 flex items-center justify-center">
            {/* FileText icon replacement or import if needed, keeping original if possible */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file-text"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" x2="8" y1="13" y2="13" />
              <line x1="16" x2="8" y1="17" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <div>
            <h4 className="font-medium text-gray-900">Xuất hóa đơn VAT</h4>
            <p className="text-sm text-gray-600">
              Hóa đơn điện tử sẽ được gửi qua email
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={toggleInvoiceRequired}
          className={cn(
            "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
            invoiceRequired ? "bg-red-600" : "bg-gray-200",
          )}
        >
          <span
            className={cn(
              "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
              invoiceRequired ? "translate-x-6" : "translate-x-1",
            )}
          />
        </button>
      </div>

      {/* Invoice Form */}
      {invoiceRequired && (
        <div className="space-y-4 p-4 border border-gray-200 rounded-lg">
          <div className="space-y-4">
            {/* Company Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Building className="w-4 h-4 inline mr-1" />
                Tên công ty <span className="text-red-500">*</span>
              </label>
              <Input
                name="invoiceInfo.companyName"
                placeholder="Nhập tên công ty đầy đủ"
              />
            </div>

            {/* Company Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                Địa chỉ công ty <span className="text-red-500">*</span>
              </label>
              <Input
                name="invoiceInfo.companyAddress"
                placeholder="Nhập địa chỉ công ty đầy đủ"
              />
            </div>

            {/* Tax Code */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Hash className="w-4 h-4 inline mr-1" />
                Mã số thuế <span className="text-red-500">*</span>
              </label>
              <Input
                name="invoiceInfo.taxCode"
                placeholder="Nhập mã số thuế (10-13 chữ số)"
                maxLength={13}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Mail className="w-4 h-4 inline mr-1" />
                Email nhận hóa đơn <span className="text-red-500">*</span>
              </label>
              <Input
                name="invoiceInfo.email"
                type="email"
                placeholder="Nhập email để nhận hóa đơn điện tử"
              />
            </div>
          </div>
        </div>
      )}

      {/* Invoice Information */}
      <BlockInfo
        title={"Thông tin về hóa đơn VAT"}
        content={[
          "Hóa đơn điện tử được xuất theo Thông tư 78/2021/TT-BTC",
          "Thời gian xuất hóa đơn: trong vòng 24h sau khi giao hàng thành công",
          "Hóa đơn sẽ được gửi qua email đã đăng ký",
          "Không thể thay đổi thông tin sau khi đã xuất hóa đơn",
          "Liên hệ hotline nếu cần hỗ trợ về hóa đơn: 1900-xxxx",
        ]}
        icon={<Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />}
      />

      {/* Tax Code Lookup Helper */}
      {invoiceRequired && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <div className="flex gap-3">
            <Hash className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="font-medium text-yellow-900 mb-2">
                Tra cứu mã số thuế
              </h5>
              <p className="text-sm text-yellow-800 mb-2">
                Bạn có thể tra cứu mã số thuế của công ty tại:
              </p>
              <a
                href="https://tracuunnt.gdt.gov.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 hover:text-blue-800 underline"
              >
                Trang tra cứu của Tổng cục Thuế →
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
