import type { BuildPCCategory, CategoryConfig } from "@/types/build-pc";

export const PC_BUILDER_CATEGORIES: CategoryConfig[] = [
  {
    category: "cpu",
    category_id: 265604,
    label: "CPU - Bộ vi xử lý",
    required: true,
    description: "Bộ xử lý trung tâm của máy tính",
  },
  {
    category: "mainboard",
    category_id: 265603,
    label: "Mainboard - Bo mạch chủ",
    required: true,
    description: "Bo mạch chủ kết nối các linh kiện",
  },
  {
    category: "ram",
    category_id: 265617,
    label: "RAM - Bộ nhớ trong",
    required: true,
    description: "Bộ nhớ truy cập ngẫu nhiên",
  },
  {
    category: "gpu",
    category_id: 265605,
    label: "GPU - Card màn hình",
    required: false,
    description: "Card đồ họa rời (tùy chọn)",
  },
  {
    category: "ssd",
    category_id: 265608,
    label: "SSD - Ổ cứng",
    required: true,
    description: "Ổ lưu trữ SSD tốc độ cao",
  },
  {
    category: "hdd",
    category_id: 265616,
    label: "HDD - Ổ cứng",
    required: false,
    description: "Ổ cứng dung lượng lớn (tùy chọn)",
  },
  {
    category: "psu",
    category_id: 265602,
    label: "PSU - Nguồn máy tính",
    required: true,
    description: "Bộ nguồn cấp điện",
  },
  {
    category: "case",
    category_id: 265622,
    label: "Case - Vỏ máy tính",
    required: true,
    description: "Vỏ case chứa linh kiện",
  },
  {
    category: "cooling",
    category_id: 265599,
    label: "Cooling - Tản nhiệt",
    required: false,
    description: "Hệ thống làm mát (tùy chọn)",
  },
  {
    category: "monitor",
    category_id: 265612,
    label: "Monitor - Màn hình",
    required: false,
    description: "Màn hình hiển thị",
  },
  {
    category: "keyboard",
    category_id: 265598,
    label: "Keyboard - Bàn phím",
    required: false,
    description: "Bàn phím cơ/màng",
  },
  {
    category: "mouse",
    category_id: 265606,
    label: "Mouse - Chuột",
    required: false,
    description: "Chuột gaming/văn phòng",
  },
];

/**
 * Get required categories only
 */
export const REQUIRED_CATEGORIES: BuildPCCategory[] =
  PC_BUILDER_CATEGORIES.filter((config) => config.required).map(
    (config) => config.category
  );

/**
 * Get optional categories only
 */
export const OPTIONAL_CATEGORIES: BuildPCCategory[] =
  PC_BUILDER_CATEGORIES.filter((config) => !config.required).map(
    (config) => config.category
  );

/**
 * Get category configuration by category key
 */
export function getCategoryConfig(
  category: BuildPCCategory
): CategoryConfig | undefined {
  return PC_BUILDER_CATEGORIES.find((config) => config.category === category);
}

/**
 * Get category label by category key
 */
export function getCategoryLabel(category: BuildPCCategory): string {
  const config = getCategoryConfig(category);
  return config?.label || category;
}

/**
 * Check if a category is required
 */
export function isCategoryRequired(category: BuildPCCategory): boolean {
  const config = getCategoryConfig(category);
  return config?.required || false;
}

/**
 * Get API category_id from BuildPCCategory
 */
export function getCategoryId(category: BuildPCCategory): number {
  const config = getCategoryConfig(category);
  if (!config) {
    throw new Error(`Invalid category: ${category}`);
  }
  return config.category_id;
}
