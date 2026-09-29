"use client";

import { Button } from "@/components/v2/ui/button";
import { Typography } from "@/components/v2/ui/typography";
import { cn } from "@/lib/utils";
import { IconKey, iconMap } from "@/utils/icon-map";

export default function StepProgressItem({
  active = false,
  step,
  onSelect,
}: {
  active?: boolean;
  step: {
    icon: IconKey;
    label: string;
  };
  onSelect?: () => void;
}) {
  const Icon = iconMap[step.icon];

  return (
    <div
      className={cn(
        "relative before:absolute before:top-[50%] before:translate-y-[-50%] before:z-[10] before:content-[''] before:-left-[12.75rem] before:border-t-1 before:border-icon-quaternary before:w-[194px] after:absolute after:top-[50%] after:translate-y-[-50%] after:z-[10] after:content-[''] after:-left-3 after:size-2 after:rounded-full after:bg-icon-quaternary [&:first-child]:before:hidden [&:first-child]:after:hidden",
        {
          "before:border-icon-primary ": active,
          "after:bg-icon-primary ": active,
        },
      )}
    >
      <Button
        variant="outline"
        color="secondary"
        size="md"
        onClick={onSelect}
        className={cn({
          "bg-secondary border-1 !border-stroke-primary border-corner-style":
            active,
        })}
        style={{
          ["--border-size" as string]: "1.5px",
          ["--border-width" as string]: "6px",
          ["--border-color" as string]: "var(--icon-primary)",
        }}
      >
        {active ? (
          <Icon width={16} height={16} />
        ) : (
          <Icon width={16} height={16} />
        )}

        <Typography
          level="body-12"
          fontWeight="semibold"
          className="text-txt-primary"
        >
          {step.label}
        </Typography>
      </Button>
    </div>
  );
}
