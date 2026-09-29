import { ButtonsToggleFilter } from "@/components/v2/filter/filter-items";
import { Typography } from "@/components/v2/ui/typography";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

export default function BuyingTrend() {
  return (
    <div className="flex place-items-baseline gap-2 h-fit w-full">
      <Typography
        level="body-14"
        fontWeight="medium"
        className="text-txt-secondary shrink-0"
      >
        Xu hướng:
      </Typography>

      <ButtonsToggleFilter
        className="w-fit flex-nowrap max-w-full scrollbar-hidden overflow-x-scroll"
        config={{
          key: "trending-filter",
          options: [
            {
              label: (
                <>
                  <ArrowTrendingUpIcon
                    strokeWidth={2}
                    className="size-4 text-icon-red-active"
                  />
                  Từ 5 - 7 triệu
                </>
              ),
              value: "5m-7m",
            },
            {
              label: (
                <>
                  <ArrowTrendingUpIcon
                    strokeWidth={2}
                    className="size-4 text-icon-red-active"
                  />
                  Từ 25 - 27 inch
                </>
              ),
              value: "25-27inch",
            },
            {
              label: (
                <>
                  <ArrowTrendingUpIcon
                    strokeWidth={2}
                    className="size-4 text-icon-red-active"
                  />
                  144Hz
                </>
              ),
              value: "144hz",
            },
          ],
        }}
      />
    </div>
  );
}
