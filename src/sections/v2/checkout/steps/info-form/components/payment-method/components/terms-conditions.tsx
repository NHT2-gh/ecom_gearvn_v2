import { Checkbox } from "@/components/v2/ui/input";
import { ShieldCheckIcon } from "@heroicons/react/24/outline";
import React from "react";

export default function TermsConditions() {
  const [acceptedTerms, setAcceptedTerms] = React.useState(false);
  return (
    <div className="border border-stroke-primary p-6">
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheckIcon className="w-5 h-5 text-green-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          Điều khoản và điều kiện
        </h3>
      </div>
      <div className="space-y-4">
        <Checkbox
          checked={acceptedTerms}
          onChange={(e) => setAcceptedTerms(e.target.checked)}
          className="w-full items-start"
        >
          <span className="text-sm text-gray-700 leading-relaxed">
            Tôi đồng ý với{" "}
            <a href="#" className="text-red-600 hover:underline font-medium">
              điều khoản sử dụng
            </a>{" "}
            và{" "}
            <a href="#" className="text-red-600 hover:underline font-medium">
              chính sách bảo mật
            </a>{" "}
            của GearVN. Tôi xác nhận rằng tất cả thông tin đã cung cấp là chính
            xác.
          </span>
        </Checkbox>

        {!acceptedTerms && (
          <p className="text-xs text-gray-500">
            Vui lòng đồng ý với điều khoản để tiếp tục đặt hàng
          </p>
        )}
      </div>
    </div>
  );
}
