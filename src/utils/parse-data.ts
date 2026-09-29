import { Spec as V2Spec } from "@/types/v2/product";
import { Spec as OldSpec } from "@/types/product";
import { iconMap } from "./icon-map";
import { FilterItemConfig } from "@/components/v2/filter/type";

export function parseSpecs(tags: string | string[]): V2Spec[] {
  if (!tags) return [];
  const seen = new Set<string>(); // để kiểm tra trùng lặp
  const result: { key: string; value: string }[] = [];
  if (Array.isArray(tags)) {
    tags.forEach((tag) => {
      const [rawKey, rawValue] = tag.split(":");
      if (!rawKey || !rawValue) return null;

      // Chuẩn hóa key → bỏ tiền tố như "filter_", "spec_", "hl_"
      const key = rawKey
        // .replace(/^filter_/, "")
        // .replace(/^spec_/, "")
        .replace(/^hl_/, "")
        .toLowerCase()
        .trim();

      if (!(key in iconMap)) return null;
      const name = rawValue.trim();

      if (seen.has(key)) return null;
      seen.add(key);
      result.push({ key, value: name });
    });
  } else {
    tags
      .split(",")
      .map((item) => item.trim())
      .map((pair) => {
        const [rawKey, rawValue] = pair.split(":");
        if (!rawKey || !rawValue) return null;

        // Chuẩn hóa key → bỏ tiền tố như "filter_", "spec_", "hl_"
        const key = rawKey
          // .replace(/^filter_/, "")
          // .replace(/^spec_/, "")
          .replace(/^hl_/, "")
          .toLowerCase()
          .trim();

        if (!(key in iconMap)) return null;
        const name = rawValue.trim();

        if (seen.has(key)) return null;
        seen.add(key);
        result.push({ key, value: name });
      });
  }
  return result;
}

// Helper function to convert V2Spec to OldSpec for backward compatibility
export function convertToOldSpecs(v2Specs: V2Spec[]): OldSpec[] {
  return v2Specs.map((spec) => ({
    key: spec.key,
    name: spec.value,
  }));
}

export function parseFilterTags(tags: string[]): FilterItemConfig[] {
  const filter = new Map<string, string[]>(); // để kiểm tra trùng lặp
  tags.forEach((tag) => {
    const [rawKey, rawValue] = tag.split(":");
    if (!rawKey || !rawValue) return null;

    if (rawKey.startsWith("filter_") || rawKey.startsWith("spec_Thương hiệu")) {
      const removePrefix = rawKey
        .replace(/^filter_/, "")
        .replace(/^spec_/, "")
        .trim();

      if (filter.has(removePrefix)) {
        filter.get(removePrefix)?.push(rawValue);
      } else {
        filter.set(removePrefix, [rawValue]);
      }
    }
  });

  const result: FilterItemConfig[] = [];

  filter.forEach((value, key) => {
    result.push({
      key: key,
      label: key,
      type: value.length > 3 ? "checkbox" : "button-toggle",
      options: value.map((item) => ({ label: item, value: item })),
    });
  });

  return result;
}

export function extractTextFromHtml(
  html: string,
  charLimit: number = 70
): string {
  if (!html) return "";

  // Remove HTML tags
  const textOnly = html.replace(/<[^>]*>/g, "");

  // Decode HTML entities
  const decoded = textOnly
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&amp;/g, "&");

  // Trim whitespace and get first charLimit characters
  const trimmed = decoded.trim();
  return trimmed.length > charLimit
    ? trimmed.substring(0, charLimit) + "..."
    : trimmed;
}
