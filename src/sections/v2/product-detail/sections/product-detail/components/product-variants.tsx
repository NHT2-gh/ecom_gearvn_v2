import { ButtonsToggleFilter } from "@/components/v2/filter/filter-items";
import { Tab, TabItem, TabList } from "@/components/v2/tab";
import { Typography } from "@/components/v2/ui/typography";
import {
  buildAttributeCombinationMap,
  findVariantBySelectedAttributes,
  isOptionDisabled,
} from "@/helper/product-variant-helper";
import { ProductVariant } from "@/types/v2/product";
import { useEffect, useMemo, useState } from "react";

interface ProductVariantsProps {
  variants: ProductVariant[];
  onChangeVariant: (variant: ProductVariant) => void;
}

const AttributesName = {
  version: "Phiên bản",
  color: "Màu",
};

export default function ProductVariants({
  variants,
  onChangeVariant,
}: ProductVariantsProps) {
  const combinationMap = useMemo(
    () => buildAttributeCombinationMap(variants),
    [variants],
  );

  const [selectedTab, setSelectedTab] = useState<string>(
    Object.keys(combinationMap)[0] || "",
  );

  const [selectedAttributes, setSelectedAttributes] = useState<
    Record<keyof typeof combinationMap, string>
  >(
    variants[0].attributes.reduce(
      (acc, attr) => {
        acc[attr.type] = attr.id;
        return acc;
      },
      {} as Record<keyof typeof combinationMap, string>,
    ),
  );

  useEffect(() => {
    const variant = findVariantBySelectedAttributes(
      variants,
      selectedAttributes,
    );
    if (variant) {
      onChangeVariant(variant);
    }
  }, [selectedAttributes]);

  return (
    <div
      aria-label="Product Variant Box"
      className="w-full border border-line-tertiary"
    >
      <header className="px-4 py-2.5 bg-secondary ">
        <Typography
          level="h6-18"
          className="text-[1rem] text-txt-primary"
          fontWeight="semibold"
        >
          Chọn cấu hình
        </Typography>
      </header>

      <div className="bg-primary px-4 space-y-4 min-h-[13rem] h-fit">
        <Tab
          style="underline"
          size="sm"
          indexSelected={Object.keys(combinationMap).indexOf(selectedTab)}
          onChangeTab={(index) => {
            setSelectedTab(Object.keys(combinationMap)[index]);
          }}
        >
          <TabList>
            {Object.entries(combinationMap).map(([key, _], index) => (
              <TabItem key={key} index={index}>
                {AttributesName[key as keyof typeof AttributesName] || key}
              </TabItem>
            ))}
          </TabList>
        </Tab>
        <div className="pt-3 pb-5">
          <ButtonsToggleFilter
            config={{
              key: selectedTab,
              options: Object.keys(combinationMap[selectedTab] || {}).map(
                (value) => ({
                  label: String(
                    combinationMap[selectedTab][value].option.label,
                  ),
                  value,
                  disable: isOptionDisabled(
                    combinationMap,
                    selectedTab,
                    value,
                    selectedAttributes,
                  ),
                }),
              ),
            }}
            value={[selectedAttributes[selectedTab]]}
            isMultiSelect={false}
            onChange={(value) => {
              setSelectedAttributes((prev) => ({
                ...prev,
                [selectedTab]: String(value[0]),
              }));
            }}
          />
        </div>
      </div>
    </div>
  );
}
