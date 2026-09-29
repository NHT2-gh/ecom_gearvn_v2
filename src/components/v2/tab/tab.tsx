"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Typography } from "../ui/typography";
import { TabContext } from "@/context/tab-context";

interface TabsV2Props {
  children: React.ReactNode;
  indexSelected: number;
  style?: "underline" | "box";
  size?: "sm" | "md" | "lg";
  className?: string;
  onChangeTab?: (index: number) => void;
}

export function Tab({
  style = "underline",
  size = "sm",
  className,
  onChangeTab,
  indexSelected,
  children,
}: TabsV2Props) {
  return (
    <TabContext.Provider
      value={{ indexSelected, handleOnChange: onChangeTab, style, size }}
    >
      <div className={className}>{children}</div>
      {/* {tabPanels} */}
    </TabContext.Provider>
  );
}

export function TabList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const context = React.useContext(TabContext);

  if (!context) {
    throw new Error("Tab must be used within a Tabs component");
  }

  const { style, size } = context;

  return style === "underline" ? (
    <div
      role="tablist"
      className={cn("px-1 flex items-center gap-2", className)}
    >
      {children}
    </div>
  ) : (
    <div
      role="tablist"
      className={cn(
        "w-full bg-secondary flex items-center",

        { "h-[2rem] p-[0.125rem]": size === "sm" },
        { "h-[2.25rem] p-[0.2rem]": size === "md" },
        { "h-[2.5rem] p-[0.2rem]": size === "lg" },
        className,
      )}
    >
      {children}
    </div>
  );
}

interface TabItemProps {
  className?: string;
  children: React.ReactNode;
  index: number;
}

export const TabItem = ({ className, children, index }: TabItemProps) => {
  const context = React.useContext(TabContext);

  if (!context) {
    throw new Error("Tab must be used within a Tabs component");
  }

  const { indexSelected, handleOnChange, style, size } = context;

  switch (style) {
    case "underline":
      return (
        <button
          role="tab"
          key={index}
          onClick={() => handleOnChange?.(index)}
          className={cn(
            "flex-1 !min-h-full flex items-center justify-center px-4 py-2 border-b-[0.1875rem] border-transparent transition-colors text-center",
            {
              "border-icon-red-active": indexSelected === index,
            },
            className,
          )}
        >
          <Typography
            level={size === "lg" ? "body-15" : "body-13"}
            fontWeight={indexSelected === index ? "semibold" : "normal"}
            className={cn(
              "flex items-center gap-2 transition-colors order-1 text-nowrap",
              indexSelected === index
                ? "text-txt-button-red"
                : "text-txt-tertiary",
            )}
          >
            {children}
          </Typography>
        </button>
      );
    case "box":
      return (
        <button
          role="tab"
          onClick={() => handleOnChange?.(index)}
          className={cn(
            "flex-1 px-2 h-full text-center transition-colors",
            {
              "bg-primary": indexSelected === index,
            },
            className,
          )}
        >
          <Typography
            level="body-14"
            className={
              indexSelected === index
                ? "text-txt-primary font-medium"
                : "text-txt-secondary font-medium"
            }
          >
            {children}
          </Typography>
        </button>
      );
  }
};

export const TabPanel = ({
  index,
  children,
}: {
  index: number;
  children: React.ReactNode;
}) => {
  const context = React.useContext(TabContext);

  if (!context) {
    throw new Error("TabContent must be used within a Tabs component");
  }

  const { indexSelected } = context;

  return <div>{indexSelected === index ? children : null}</div>;
};
