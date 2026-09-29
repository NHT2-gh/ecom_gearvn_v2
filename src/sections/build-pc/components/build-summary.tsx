"use client";

import React, { useState } from "react";
import { usePCBuilder } from "@/hooks/use-pc-builder";
import { REQUIRED_CATEGORIES } from "@/config/pc-builder-categories";
import { formatPrice } from "@/utils/format";
import toast from "react-hot-toast";
import { Input } from "@/components/v2/ui/input";
import { Button } from "@/components/v2/ui/button";
import * as Dialog from "@/components/v2/dialog";

export function BuildSummary() {
  const { buildSummary, saving, saveCurrentAsNamedBuild } =
    usePCBuilder(REQUIRED_CATEGORIES);

  const [isSaveModalOpen, setIsSaveModalOpen] = useState(false);
  const [buildName, setBuildName] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const handleSaveBuild = async () => {
    if (!buildName.trim()) {
      toast.error("Vui lòng nhập tên cấu hình");
      return;
    }

    try {
      setIsSaving(true);
      await saveCurrentAsNamedBuild(buildName.trim());
      toast.success("Đã lưu cấu hình thành công!");
      setBuildName("");
      setIsSaveModalOpen(false);
    } catch (error) {
      toast.error("Không thể lưu cấu hình");
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-4 sticky top-[100px]">
        <h2 className="text-lg font-semibold mb-4">Tổng quan cấu hình</h2>

        <div className="space-y-3">
          {/* Component Count */}
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Số linh kiện:</span>
            <span className="font-medium">{buildSummary.componentCount}</span>
          </div>

          {/* Total Price */}
          <div className="flex justify-between items-center pt-3 border-t border-stroke">
            <span className="text-gray-600">Tổng giá:</span>
            <span className="text-xl font-bold text-red-600">
              {formatPrice(buildSummary.totalPrice)}
            </span>
          </div>

          {/* Missing Components Warning */}
          {buildSummary.missingCategories.length > 0 && (
            <div className="bg-yellow-50 border border-yellow-200 rounded p-3">
              <p className="text-sm text-yellow-800 font-medium mb-1">
                Thiếu {buildSummary.missingCategories.length} linh kiện bắt buộc
              </p>
              <p className="text-xs text-yellow-600">
                Vui lòng chọn đủ các linh kiện để hoàn thiện cấu hình
              </p>
            </div>
          )}

          {/* Complete Status */}
          {buildSummary.isComplete && (
            <div className="bg-green-50 border border-green-200 rounded p-3">
              <p className="text-sm text-green-800 font-medium">
                ✓ Cấu hình đã hoàn thiện
              </p>
            </div>
          )}

          {/* Auto-save Status */}
          {saving && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-gray-500"></div>
              <span>Đang lưu...</span>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-4 space-y-2">
          <Button
            onClick={() => setIsSaveModalOpen(true)}
            disabled={buildSummary.componentCount === 0}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Lưu cấu hình
          </Button>
        </div>
      </div>

      {/* Save Modal */}
      {isSaveModalOpen && (
        <Dialog.Root onClickOutside={() => setIsSaveModalOpen(false)}>
          <Dialog.Header
            onClose={() => setIsSaveModalOpen(false)}
            title="Lưu cấu hình "
          />

          <Dialog.Content>
            <div className="mb-4">
              <label
                htmlFor="build-name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Tên cấu hình
              </label>
              <Input
                id="build-name"
                type="text"
                value={buildName}
                onChange={(e) => setBuildName(e.target.value)}
                placeholder="VD: Gaming PC 2024"
                className="w-full px-3 py-2 !border !border-gray-300 "
                autoFocus
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSaveBuild();
                  }
                }}
              />
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => {
                  setIsSaveModalOpen(false);
                  setBuildName("");
                }}
                disabled={isSaving}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50"
              >
                Hủy
              </Button>
              <Button
                onClick={handleSaveBuild}
                disabled={isSaving || !buildName.trim()}
                className="flex-1 px-4 py-2 bg-accent-primary text-white rounded-md hover:bg-accent-primary/80 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {isSaving ? "Đang lưu..." : "Lưu"}
              </Button>
            </div>
          </Dialog.Content>
        </Dialog.Root>
      )}
    </>
  );
}
