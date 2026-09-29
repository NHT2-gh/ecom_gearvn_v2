"use client";

import React from "react";
import { useCheckout } from "@/hooks/use-checkout";
import { cn } from "@/lib/utils";
import {
  MapPin,
  Phone,
  Clock,
  Package,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { mockShowrooms } from "@/_mocks";
import { BlockInfo } from "@/components/block-info";
import { useFormContext } from "react-hook-form";
import { CheckoutFormData } from "@/schemas/checkout-schemas";

// Mock showroom data - replace with actual API

export default function ShowroomSelector() {
  const { selectedShowroom, setSelectedShowroom, cartItems } = useCheckout();
  const [selectedTimeSlot, setSelectedTimeSlot] = React.useState<string>("");

  // Get context to display errors
  const {
    formState: { errors },
  } = useFormContext<CheckoutFormData>();
  // @ts-ignore - nested error access
  const showroomError = errors.selectedShowroom?.message as string | undefined;

  // Filter showrooms that have all cart items available
  const availableShowrooms = mockShowrooms.filter((showroom) => {
    if (!showroom.isOpen) return false;

    // Check if all cart items are available at this showroom
    return cartItems.every((item) =>
      showroom.availableProducts.includes(item.id),
    );
  });

  const getCurrentTime = () => {
    const now = new Date();
    const day = now.toLocaleDateString("en", { weekday: "long" }).toLowerCase();
    return { now, day };
  };

  const isShowroomOpen = (showroom: (typeof mockShowrooms)[0]) => {
    const { now, day } = getCurrentTime();
    const hours =
      showroom.openingHours[day as keyof typeof showroom.openingHours];
    if (!hours) return false;

    const currentTime = now.getHours() * 60 + now.getMinutes();
    const openTime =
      parseInt(hours.open.split(":")[0]) * 60 +
      parseInt(hours.open.split(":")[1]);
    const closeTime =
      parseInt(hours.close.split(":")[0]) * 60 +
      parseInt(hours.close.split(":")[1]);

    return currentTime >= openTime && currentTime <= closeTime;
  };

  const generateTimeSlots = () => {
    const slots = [];
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);

    // Today slots (if still open)
    if (now.getHours() < 20) {
      slots.push({
        id: "today-morning",
        date: "Hôm nay",
        time: "9:00 - 12:00",
        available: now.getHours() < 9,
      });
      slots.push({
        id: "today-afternoon",
        date: "Hôm nay",
        time: "14:00 - 17:00",
        available: now.getHours() < 14,
      });
      slots.push({
        id: "today-evening",
        date: "Hôm nay",
        time: "18:00 - 20:00",
        available: now.getHours() < 18,
      });
    }

    // Tomorrow slots
    slots.push({
      id: "tomorrow-morning",
      date: "Ngày mai",
      time: "9:00 - 12:00",
      available: true,
    });
    slots.push({
      id: "tomorrow-afternoon",
      date: "Ngày mai",
      time: "14:00 - 17:00",
      available: true,
    });
    slots.push({
      id: "tomorrow-evening",
      date: "Ngày mai",
      time: "18:00 - 20:00",
      available: true,
    });

    return slots;
  };

  const timeSlots = generateTimeSlots();

  return (
    <div className="space-y-6">
      {/* Error Message */}
      {showroomError && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-red-600" />
          <p className="text-sm text-red-600">{showroomError}</p>
        </div>
      )}

      {/* Showroom List */}
      <div className="space-y-4">
        {availableShowrooms.length === 0 ? (
          <div className="text-center py-8 bg-yellow-50 border border-yellow-200 rounded-lg">
            <AlertCircle className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
            <h4 className="font-semibold text-yellow-800 mb-2">
              Không có showroom khả dụng
            </h4>
            <p className="text-sm text-yellow-700">
              Hiện tại không có showroom nào có đủ sản phẩm trong giỏ hàng của
              bạn. Vui lòng chọn giao hàng tận nơi.
            </p>
          </div>
        ) : (
          availableShowrooms.map((showroom) => {
            const isSelected = selectedShowroom?.id === showroom.id;
            const isCurrentlyOpen = isShowroomOpen(showroom);

            return (
              <div
                key={showroom.id}
                onClick={() => setSelectedShowroom(showroom)}
                className={cn(
                  "relative p-4 border-2 rounded-lg cursor-pointer transition-all duration-200",
                  isSelected
                    ? "border-red-500 bg-red-50 shadow-md"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-sm",
                )}
              >
                {/* Selection Indicator */}
                <div className="absolute top-4 right-4">
                  <div
                    className={cn(
                      "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                      isSelected
                        ? "border-red-500 bg-red-500"
                        : "border-gray-300",
                    )}
                  >
                    {isSelected && (
                      <CheckCircle className="w-3 h-3 text-white" />
                    )}
                  </div>
                </div>

                {/* Showroom Info */}
                <div className="pr-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {showroom.name}
                      </h4>
                      <div className="flex items-center gap-2 text-sm">
                        <div
                          className={cn(
                            "w-2 h-2 rounded-full",
                            isCurrentlyOpen ? "bg-green-500" : "bg-red-500",
                          )}
                        />
                        <span
                          className={cn(
                            "font-medium",
                            isCurrentlyOpen ? "text-green-600" : "text-red-600",
                          )}
                        >
                          {isCurrentlyOpen ? "Đang mở cửa" : "Đã đóng cửa"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
                    <p className="text-sm text-gray-600">{showroom.address}</p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-2 mb-3">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <p className="text-sm text-gray-600">{showroom.phone}</p>
                  </div>

                  {/* Opening Hours */}
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <p className="text-sm text-gray-600">
                      Mở cửa: 8:00 - 21:00 (Thứ 2 - Chủ nhật)
                    </p>
                  </div>

                  {/* Services */}
                  <div className="flex items-start gap-2">
                    <Package className="w-4 h-4 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Dịch vụ:</p>
                      <div className="flex flex-wrap gap-1">
                        {showroom.services.map((service, index) => (
                          <span
                            key={index}
                            className="inline-block px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Time Slot Selection */}
      {selectedShowroom && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-4">
            Chọn thời gian nhận hàng
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {timeSlots.map((slot) => (
              <button
                key={slot.id}
                onClick={() => slot.available && setSelectedTimeSlot(slot.id)}
                disabled={!slot.available}
                className={cn(
                  "p-3 border rounded-lg text-left transition-colors",
                  selectedTimeSlot === slot.id
                    ? "border-red-500 bg-red-50 text-red-700"
                    : slot.available
                      ? "border-gray-300 hover:border-gray-400"
                      : "border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed",
                )}
              >
                <div className="font-medium text-sm">{slot.date}</div>
                <div className="text-xs">{slot.time}</div>
                {!slot.available && (
                  <div className="text-xs text-red-500 mt-1">Đã qua giờ</div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Instructions */}
      {selectedShowroom && (
        <BlockInfo
          title="Hướng dẫn nhận hàng"
          content={[
            "Mang theo CMND/CCCD hoặc giấy tờ tùy thân có ảnh",
            "Đến đúng thời gian đã đặt để được phục vụ nhanh chóng",
            "Có thể kiểm tra và trải nghiệm sản phẩm trước khi nhận",
            "Nhân viên sẽ hỗ trợ tư vấn và giải đáp thắc mắc",
            "Thanh toán tại showroom (tiền mặt hoặc chuyển khoản)",
          ]}
        />
      )}
    </div>
  );
}
