"use client";

import React from "react";
import { useCheckout } from "@/hooks/use-checkout";
import { cn } from "@/lib/utils";
import { Truck, Clock, Shield, CheckCircle } from "lucide-react";
import { formatPrice } from "@/utils/format";
import { mockShippingServices } from "@/_mocks";
import { BlockInfo } from "@/components/block-info";

// Mock shipping services - replace with actual API

export default function ShippingServiceSelector() {
  const { shippingService, setShippingService, shippingAddress } =
    useCheckout();
  const [loading, setLoading] = React.useState(false);

  // Calculate shipping fees based on address and cart items
  React.useEffect(() => {
    if (shippingAddress.province && shippingAddress.district) {
      setLoading(true);
      // Simulate API call to calculate shipping fees
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [shippingAddress]);

  const handleServiceSelect = (service: (typeof mockShippingServices)[0]) => {
    setShippingService(service);
  };

  const availableServices = mockShippingServices.filter(
    (service) => service.available
  );

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Chọn dịch vụ vận chuyển
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Chọn dịch vụ vận chuyển phù hợp với nhu cầu của bạn
        </p>
      </div>

      {loading ? (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-8 bg-gray-200 rounded" />
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-48 mb-2" />
                      <div className="h-3 bg-gray-200 rounded w-32" />
                    </div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded w-20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {availableServices.map((service) => {
            const isSelected = shippingService?.id === service.id;

            return (
              <div
                key={service.id}
                onClick={() => handleServiceSelect(service)}
                className={cn(
                  "relative border-2 rounded-lg p-4 cursor-pointer transition-all duration-200",
                  isSelected
                    ? "border-red-500 bg-red-50 shadow-md"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-sm",
                  service.id === "free" && "pointer-events-none opacity-50"
                )}
              >
                {/* Selection Indicator */}
                <div className="absolute top-4 right-4">
                  <div
                    className={cn(
                      "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                      isSelected
                        ? "border-red-500 bg-red-500"
                        : "border-gray-300"
                    )}
                  >
                    {isSelected && (
                      <CheckCircle className="w-3 h-3 text-white" />
                    )}
                  </div>
                </div>

                {/* Service Content */}
                <div className="pr-8">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      {/* Service Logo */}
                      <div className="w-12 h-8 bg-gray-100 rounded flex items-center justify-center">
                        <Truck className="w-6 h-6 text-gray-600" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {service.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-bold text-red-600">
                        {formatPrice(service.fee)}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>{service.estimatedDays} ngày</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, index) => (
                      <span
                        key={index}
                        className={cn(
                          "inline-flex items-center gap-1 px-2 py-1 text-xs rounded-full",
                          isSelected
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-600"
                        )}
                      >
                        <Shield className="w-3 h-3" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Shipping Notes */}
      <BlockInfo
        color="green"
        icon={
          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
            <Truck className="w-4 h-4 text-green-600" />
          </div>
        }
        title="Miễn phí vận chuyển"
        content="Đơn hàng từ 500.000đ được miễn phí vận chuyển toàn quốc"
      />
    </div>
  );
}
