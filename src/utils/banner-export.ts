import { Banner } from "@/types/banner";
import { BannerBuilderFormData } from "@/schemas/banner-builder-schema";

/**
 * Export banner configuration to JSON string
 */
export function exportBannerToJSON(banner: BannerBuilderFormData): string {
  return JSON.stringify(banner, null, 2);
}

/**
 * Download banner configuration as JSON file
 */
export function downloadBannerJSON(
  banner: BannerBuilderFormData,
  filename?: string
): void {
  const jsonString = exportBannerToJSON(banner);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename || `banner-${banner.id}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  URL.revokeObjectURL(url);
}

/**
 * Validate and parse banner JSON
 */
export function parseBannerJSON(jsonString: string): Banner | null {
  try {
    const parsed = JSON.parse(jsonString);
    return parsed as Banner;
  } catch (error) {
    console.error("Failed to parse banner JSON:", error);
    return null;
  }
}

/**
 * Generate a unique banner ID
 */
export function generateBannerId(): string {
  return `banner-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Generate a unique image ID
 */
export function generateImageId(): string {
  return `img-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Generate a unique banner item ID
 */
export function generateBannerItemId(): string {
  return `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
