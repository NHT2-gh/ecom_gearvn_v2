import { ProductVariant } from "@/types/v2/product";
type AttributeOption = {
  id: string;
  label: string;
};

type AttributeCombinationMap = {
  [type: string]: {
    [optionId: string]: {
      option: AttributeOption;
      related: {
        [relatedType: string]: Set<string>; // set of optionIds
      };
    };
  };
};

export function buildAttributeCombinationMap(
  variants: ProductVariant[]
): AttributeCombinationMap {
  const map: AttributeCombinationMap = {};

  variants.forEach((variant) => {
    variant.attributes.forEach((attr) => {
      if (!map[attr.type]) {
        map[attr.type] = {};
      }

      if (!map[attr.type][attr.id]) {
        map[attr.type][attr.id] = {
          option: {
            id: attr.id,
            label: attr.value,
          },
          related: {},
        };
      }

      variant.attributes.forEach((relatedAttr) => {
        if (relatedAttr.type === attr.type) return;

        if (!map[attr.type][attr.id].related[relatedAttr.type]) {
          map[attr.type][attr.id].related[relatedAttr.type] = new Set();
        }

        map[attr.type][attr.id].related[relatedAttr.type].add(relatedAttr.id);
      });
    });
  });

  return map;
}

export function isOptionDisabled(
  map: AttributeCombinationMap,
  targetType: string,
  optionId: string,
  selected: Record<string, string>
): boolean {
  return Object.entries(selected).some(([selectedType, selectedId]) => {
    if (selectedType === targetType) return false;

    const relatedSet = map[selectedType]?.[selectedId]?.related[targetType];

    return relatedSet && !relatedSet.has(optionId);
  });
}
export function findVariantBySelectedAttributes(
  variants: ProductVariant[],
  selected: Record<string, string>
): ProductVariant | undefined {
  if (!Object.keys(selected).length) return undefined;

  return variants.find((variant) =>
    Object.entries(selected).every(([type, selectedId]) =>
      variant.attributes.some(
        (attr) => attr.type === type && attr.id === selectedId
      )
    )
  )
}
