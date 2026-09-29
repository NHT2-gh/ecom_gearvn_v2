import { FilterBoxRender } from "@/components/v2/filter";
import { Typography } from "@/components/v2/ui/typography";
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";
import { FilterItemConfig, FilterValue } from "@/components/v2/filter/type";

interface FilterCollectionProps {
  filterConfigs: FilterItemConfig[];
  filterValues: Record<string, FilterValue>;
  handleFilterChange: (key: string, value: FilterValue) => void;
  handleClearAllFilters: () => void;
}

export default function FilterCollection({
  filterConfigs,
  filterValues,
  handleFilterChange,
  handleClearAllFilters,
}: FilterCollectionProps) {
  return (
    <div
      data-role="filter-collection"
      className="w-[22.1875rem] flex flex-col shrink-0 h-full max-h-[100vh] lg:max-h-[99.625rem] bg-neutral-50 border-corner-style"
    >
      <header className="w-full px-4 py-3 flex items-center gap-2">
        <Bars3BottomRightIcon className="w-6 h-6" />
        <Typography
          level="h4-24"
          className="text-[1.25rem]"
          fontWeight="semibold"
        >
          Bộ lọc tìm kiếm
        </Typography>
      </header>

      <div className="relative px-4 py-2 overflow-y-scroll scroll-smooth">
        <FilterBoxRender
          className=""
          filterValues={filterValues}
          filterConfigs={filterConfigs}
          handleFilterChange={handleFilterChange}
          handleClearAllFilters={handleClearAllFilters}
        />
      </div>
    </div>
  );
}
