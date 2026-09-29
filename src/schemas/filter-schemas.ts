import { z } from "zod";

// Base filter value schemas
export const numberRangeFilterSchema = z
  .tuple([
    z.number().min(0, "Giá trị tối thiểu phải >= 0"),
    z.number().min(0, "Giá trị tối đa phải >= 0"),
  ])
  .refine(([min, max]) => min <= max, {
    message: "Giá trị tối thiểu phải nhỏ hơn hoặc bằng giá trị tối đa",
  });

export const singleNumberFilterSchema = z.number().min(0, "Giá trị phải >= 0");

export const multiSelectFilterSchema = z
  .array(z.string().min(1, "Giá trị không được để trống"))
  .min(1, "Phải chọn ít nhất 1 giá trị");

// Filter value union type
export const filterValueSchema = z.union([
  numberRangeFilterSchema,
  singleNumberFilterSchema,
  multiSelectFilterSchema,
  z.null(),
]);

// Filter item config schemas
const baseFilterItemConfigSchema = z.object({
  name: z.string().min(1, "Tên filter không được để trống"),
  label: z.string().optional(),
});

export const sliderFilterItemConfigSchema = baseFilterItemConfigSchema
  .extend({
    type: z.literal("slider"),
    min: z.number(),
    max: z.number(),
    step: z.number().positive().optional(),
    mode: z.enum(["single", "double"]).optional(),
  })
  .refine((data) => data.min < data.max, {
    message: "Giá trị min phải nhỏ hơn max",
    path: ["min"],
  });

export const selectFilterItemConfigSchema = baseFilterItemConfigSchema.extend({
  type: z.literal("multi-select"),
  options: z
    .array(
      z.object({
        label: z.string().min(1, "Label không được để trống"),
        value: z.string().min(1, "Value không được để trống"),
      })
    )
    .min(1, "Phải có ít nhất 1 option"),
});

export const inputRangeFilterItemConfigSchema =
  baseFilterItemConfigSchema.extend({
    type: z.literal("input-range"),
    range: z.tuple([z.number(), z.number()]).refine(([min, max]) => min < max, {
      message: "Range min phải nhỏ hơn max",
    }),
    options: z
      .array(
        z.object({
          label: z.string().min(1, "Label không được để trống"),
          value: z.string().min(1, "Value không được để trống"),
        })
      )
      .min(1, "Phải có ít nhất 1 option"),
  });

export const filterItemConfigSchema = z.discriminatedUnion("type", [
  sliderFilterItemConfigSchema,
  selectFilterItemConfigSchema,
  inputRangeFilterItemConfigSchema,
]);

// Filter values record schema
export const filterValuesSchema = z.record(
  z.string().min(1, "Key không được để trống"),
  filterValueSchema
);

// Search/API filter schemas
export const apiFilterItemSchema = z.record(
  z.string().min(1, "Filter key không được để trống"),
  z.union([
    z.string().min(1, "Filter value không được để trống"),
    z.array(z.string().min(1, "Filter value không được để trống")),
  ])
);

export const apiFiltersSchema = z
  .array(apiFilterItemSchema)
  .optional()
  .refine(
    (filters) => {
      if (!filters) return true;
      // Validate that all filter objects have at least one key
      return filters.every((filter) => Object.keys(filter).length > 0);
    },
    {
      message: "Mỗi filter phải có ít nhất 1 key-value pair",
    }
  );

// Search request schema
export const searchRequestSchema = z.object({
  search: z.string().min(1, "Từ khóa tìm kiếm không được để trống"),
  filters: z
    .record(
      z.string().min(1, "Filter key không được để trống"),
      z.array(z.string().min(1, "Filter value không được để trống"))
    )
    .optional()
    .default({}),
  pageIndex: z.number().int().min(1, "Page index phải >= 1"),
  pageSize: z
    .number()
    .int()
    .min(1, "Page size phải >= 1")
    .max(100, "Page size không được vượt quá 100"),
  gearvn_store: z.string().default(""),
});

// Product search params schema (for useProductSearch hook)
export const productSearchParamsSchema = z.object({
  query: z.string().min(1, "Query không được để trống"),
  filters: apiFiltersSchema,
  limit: z
    .number()
    .int()
    .min(1, "Limit phải >= 1")
    .max(100, "Limit không được vượt quá 100")
    .optional()
    .default(20),
});

// Filter attributes value schema (from API response)
export const filterAttributesValueSchema = z.object({
  label: z.string(),
  value: z.string(),
  count: z.number().int().min(0),
});

// Filter attributes schema (from API response)
export const filterAttributesSchema = z.object({
  key: z.string(),
  label: z.string(),
  values: z.union([z.array(z.number()), z.array(filterAttributesValueSchema)]),
});

// Helper function to validate filter values before API call
export function validateFilterValues(
  filterValues: Record<string, FilterValue>
) {
  return filterValuesSchema.safeParse(filterValues);
}

// Helper function to convert UI filter values to API format
export function convertFilterFormat(
  filters?: Record<string, FilterValue>
): { key: string; values: FilterValue }[] | undefined {
  if (!filters || Object.keys(filters).length === 0) {
    return undefined;
  }

  return Object.entries(filters).map(([key, value]) => {
    return {
      key,
      values: value,
    };
  });
}
// Helper function to validate API filters before sending
export function validateApiFilters(filters: unknown) {
  return apiFiltersSchema.safeParse(filters);
}

// Type exports
export type FilterValue = z.infer<typeof filterValueSchema>;
export type FilterItemConfig = z.infer<typeof filterItemConfigSchema>;
export type FilterValues = z.infer<typeof filterValuesSchema>;
export type ApiFilters = z.infer<typeof apiFiltersSchema>;
export type SearchRequest = z.infer<typeof searchRequestSchema>;
export type ProductSearchParams = z.infer<typeof productSearchParamsSchema>;
export type FilterAttributes = z.infer<typeof filterAttributesSchema>;
export type FilterAttributesValue = z.infer<typeof filterAttributesValueSchema>;
