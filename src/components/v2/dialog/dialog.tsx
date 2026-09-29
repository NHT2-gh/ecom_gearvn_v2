import React from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Typography } from "../ui/typography";

interface DialogProps {
  className?: string;
  onClickOutside?: () => void;
}

export function Root({
  children,
  className,
  onClickOutside = () => {},
}: { children: React.ReactNode } & DialogProps) {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only trigger if clicking on the overlay itself, not the container
    if (e.target === e.currentTarget) {
      onClickOutside();
    }
  };

  return (
    <>
      <div
        slot="dialog-overlay"
        className={cn("overlay", className)}
        onClick={handleOverlayClick}
      >
        <div
          slot="dialog-container"
          className="relative bg-white rounded-lg p-6 max-w-md w-full mx-4"
        >
          {children}
        </div>
      </div>
    </>
  );
}

export function Header({
  children,
  onClose,
  title,
  className,
}: {
  children?: React.ReactNode;
  onClose?: () => void;
  title?: string;
} & DialogProps) {
  return (
    <header
      slot="dialog-header"
      className={cn("flex items-center justify-between mb-4 h-fit", className)}
    >
      {title ? (
        <Typography level="h5-20" className="!font-semibold">
          {title}
        </Typography>
      ) : null}

      {children}

      {onClose ? (
        <Button className="absolute top-4 right-4 z-10" onClick={onClose}>
          <X size={24} className="text-black" />
        </Button>
      ) : null}
    </header>
  );
}

export function Content({
  children,
  className,
}: { children: React.ReactNode } & DialogProps) {
  return (
    <div slot="dialog-content" className={cn("", className)}>
      {children}
    </div>
  );
}
