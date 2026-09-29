import { ProductCardBase } from "./product";

// Build PC Categories
export type BuildPCCategory =
  | "cpu"
  | "mainboard"
  | "ram"
  | "gpu"
  | "ssd"
  | "hdd"
  | "psu"
  | "case"
  | "cooling"
  | "monitor"
  | "keyboard"
  | "mouse";

// Build Item - represents a selected component
// Extends ProductCardBase to be compatible with ProductCard component
export interface BuildItem extends ProductCardBase {
  category: BuildPCCategory;
  warranty?: number;
  brandName?: string;
  stock_remain: boolean;
}

// Current Build - the active build being edited
export interface CurrentBuild {
  id: "current";
  components: Partial<Record<BuildPCCategory, BuildItem | null>>;
  updatedAt: number;
}

// Saved Build - a named build saved by the user
export interface SavedBuild {
  id?: number; // Auto-incremented by Dexie
  name: string;
  components: Partial<Record<BuildPCCategory, BuildItem | null>>;
  createdAt: number;
  updatedAt?: number;
  ownerId?: string; // For future server sync
}

// Category Configuration
export interface CategoryConfig {
  category: BuildPCCategory;
  category_id: number; // API category ID
  label: string;
  icon?: string;
  required?: boolean;
  description?: string;
}

// Build Summary
export interface BuildSummary {
  totalPrice: number;
  componentCount: number;
  missingCategories: BuildPCCategory[];
  isComplete: boolean;
}
