import { IconKey } from "@/utils/icon-map";

export interface Status {
  label: string;
  icon: IconKey;
  color: string;
}

export interface StatusConfig {
  [key: string]: Status;
}

export const statusConfig: StatusConfig = {
  pending: {
    label: "Mới",
    icon: "clockLucide",
    color: "text-yellow-600 bg-yellow-50 border-yellow-200",
  },
  processing: {
    label: "Đang xử lý",
    icon: "packageLucide",
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  shipped: {
    label: "Đang vận chuyển",
    icon: "truckLucide",
    color: "text-purple-600 bg-purple-50 border-purple-200",
  },
  delivered: {
    label: "Hoàn thành",
    icon: "checkLucide",
    color: "text-green-600 bg-green-50 border-green-200",
  },
  cancelled: {
    label: "Huỷ",
    icon: "cancelLucide",
    color: "text-red-600 bg-red-50 border-red-200",
  },
};
