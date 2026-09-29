export function buildQueryParams<T extends Record<string, unknown>>(
  params: T
): string {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;

    // Convert Date -> YYYY-MM-DD
    if (value instanceof Date) {
      searchParams.set(key, value.toISOString().split("T")[0]);
    } else {
      searchParams.set(key, String(value));
    }
  });

  const queryString = searchParams.toString();
  return queryString ? `?${queryString}` : "";
}
