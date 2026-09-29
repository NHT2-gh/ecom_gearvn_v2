import { Typography } from "@/components/v2/ui/typography";
import React from "react";

export default function FormSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="px-5 pt-5 pb-8 space-y-5 border border-stroke-primary">
      <header className="space-y-2 text-left">
        <Typography
          level="h5-20"
          className="text-[1.125rem] text-txt-primary"
          fontWeight="semibold"
        >
          {title}
        </Typography>

        {description && (
          <Typography
            level="body-14"
            className="text-txt-secondary"
            fontWeight="normal"
          >
            {description}
          </Typography>
        )}
      </header>
      {children}
    </div>
  );
}
