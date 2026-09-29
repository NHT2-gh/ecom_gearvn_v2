"use client";
import React from "react";
import { BuildItem } from ".";
import { PC_BUILDER_CATEGORIES } from "@/config/pc-builder-categories";
import { ModalSelectionProduct } from "./modal-selection-product";
import type { BuildPCCategory } from "@/types/build-pc";

export default function PCComponents() {
  const [selectCategory, setSelectCategory] =
    React.useState<BuildPCCategory | null>(null);

  return (
    <div
      role="listitem"
      className="shadow-build-pc-header p-2 rounded-sm space-y-2"
    >
      {PC_BUILDER_CATEGORIES.map((config) => (
        <BuildItem
          key={config.category}
          category={config.category}
          label={config.label}
          required={config.required}
          onSelect={() => setSelectCategory(config.category)}
        />
      ))}
      {selectCategory && (
        <ModalSelectionProduct
          category={selectCategory}
          onClose={() => setSelectCategory(null)}
        />
      )}
    </div>
  );
}
