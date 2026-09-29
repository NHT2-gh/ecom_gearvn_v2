import React from "react";

export const TabContext = React.createContext<{
  indexSelected: number;
  size?: "sm" | "md" | "lg";
  style?: "underline" | "box";
  handleOnChange?: (index: number) => void;
}>({
  indexSelected: 0,
  size: "sm",
  style: "underline",
  handleOnChange: () => {
    console.log("handleOnChange");
  },
});
