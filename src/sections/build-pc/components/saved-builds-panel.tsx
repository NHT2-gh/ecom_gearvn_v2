"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { formatDate } from "@/utils/format";
import { formatPrice } from "@/utils/format";
import type { SavedBuild } from "@/types/build-pc";
import { usePCBuilder } from "@/hooks/use-pc-builder";

export function SavedBuildsPanel() {
  const {
    savedBuilds,
    loadSavedBuild,
    deleteSavedBuild,
    renameSavedBuild,
    loading,
  } = usePCBuilder();

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [deleteConfirmId, setDeleteConfirmId] = useState<number | null>(null);

  const handleLoadBuild = async (id: number) => {
    try {
      await loadSavedBuild(id);
      // toast.success("Đã tải cấu hình");
    } catch (error) {
      // toast.error("Không thể tải cấu hình");
      console.error(error);
    }
  };

  const handleDeleteBuild = async (id: number) => {
    try {
      await deleteSavedBuild(id);
      // toast.success("Đã xóa cấu hình");
      setDeleteConfirmId(null);
    } catch (error) {
      // toast.error("Không thể xóa cấu hình");
      console.error(error);
    }
  };

  const handleRenameBuild = async (id: number) => {
    if (!editName.trim()) {
      // toast.error("Tên không được để trống");
      return;
    }

    try {
      await renameSavedBuild(id, editName.trim());
      // toast.success("Đã đổi tên cấu hình");
      setEditingId(null);
      setEditName("");
    } catch (error) {
      // toast.error("Không thể đổi tên cấu hình");
      console.error(error);
    }
  };

  const startEditing = (build: SavedBuild) => {
    setEditingId(build.id || null);
    setEditName(build.name);
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditName("");
  };

  const getTotalPrice = (build: SavedBuild): number => {
    return Object.values(build.components).reduce((total, item) => {
      return total + (item?.price.discount || 0);
    }, 0);
  };

  const getComponentCount = (build: SavedBuild): number => {
    return Object.values(build.components).filter(
      (item) => item !== null && item !== undefined
    ).length;
  };

  if (savedBuilds.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-4">Cấu hình đã lưu</h2>
        <div className="text-center py-8 text-gray-500">
          <p>Chưa có cấu hình nào được lưu</p>
          <p className="text-sm mt-2">Lưu cấu hình hiện tại để sử dụng sau</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-4">
        Cấu hình đã lưu ({savedBuilds.length})
      </h2>

      <div className="space-y-3 max-h-[600px] overflow-y-auto">
        {savedBuilds.map((build) => (
          <div
            key={build.id}
            className="border border-gray-200 rounded-lg p-3 hover:border-blue-300 transition-colors"
          >
            {/* Build Name */}
            {editingId === build.id ? (
              <div className="mb-2">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full px-2 py-1 border border-blue-500 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleRenameBuild(build.id!);
                    } else if (e.key === "Escape") {
                      cancelEditing();
                    }
                  }}
                />
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleRenameBuild(build.id!)}
                    className="text-sm px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Lưu
                  </button>
                  <button
                    onClick={cancelEditing}
                    className="text-sm px-2 py-1 border border-gray-300 rounded hover:bg-gray-50"
                  >
                    Hủy
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-medium text-gray-900">{build.name}</h3>
                <button
                  onClick={() => startEditing(build)}
                  className="text-xs text-blue-600 hover:text-blue-800"
                  title="Đổi tên"
                >
                  ✎
                </button>
              </div>
            )}

            {/* Build Info */}
            <div className="text-sm text-gray-600 space-y-1 mb-3">
              <div className="flex justify-between">
                <span>Số linh kiện:</span>
                <span className="font-medium">{getComponentCount(build)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tổng giá:</span>
                <span className="font-medium text-red-600">
                  {formatPrice(getTotalPrice(build))}
                </span>
              </div>
              <div className="text-xs text-gray-400">
                {formatDate(new Date(build.createdAt))}
              </div>
            </div>

            {/* Actions */}
            {deleteConfirmId === build.id ? (
              <div className="space-y-2">
                <p className="text-sm text-red-600">
                  Xác nhận xóa cấu hình này?
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleDeleteBuild(build.id!)}
                    disabled={loading}
                    className="flex-1 text-sm px-3 py-1.5 bg-red-600 text-white rounded hover:bg-red-700 disabled:opacity-50"
                  >
                    Xóa
                  </button>
                  <button
                    onClick={() => setDeleteConfirmId(null)}
                    disabled={loading}
                    className="flex-1 text-sm px-3 py-1.5 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
                  >
                    Hủy
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => handleLoadBuild(build.id!)}
                  disabled={loading}
                  className="flex-1 text-sm px-3 py-1.5 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
                >
                  Tải
                </button>
                <button
                  onClick={() => setDeleteConfirmId(build.id!)}
                  disabled={loading}
                  className="text-sm px-3 py-1.5 border border-red-300 text-red-600 rounded hover:bg-red-50 disabled:opacity-50"
                >
                  Xóa
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
