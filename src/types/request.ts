export interface SearchRequest {
  search: string;
  filters: Record<string, string[]>;
  pageIndex: number;
  pageSize: number;
  gearvn_store: "";
}
