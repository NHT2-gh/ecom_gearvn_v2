import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import FilterValuesRender from "./filter-values-render";
import { _filterConfigs, _filterValues } from "@/_mocks";

const meta = {
  title: "Components/Filter Values",
  component: FilterValuesRender,
  tags: ["autodocs"],
  argTypes: {
    filterValues: {
      control: "object",
      description: "Filter values to render",
    },
  },
} satisfies Meta<typeof FilterValuesRender>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    filterValues: _filterValues,
    filterConfigs: _filterConfigs,
    onDeleteItem: (keyFilter, keyValue) => {
      console.log("Deleting:", keyValue, "From filter: ", keyFilter);
    },
  },
};
