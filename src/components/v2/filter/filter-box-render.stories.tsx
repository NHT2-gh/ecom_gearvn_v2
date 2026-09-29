import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { _filterConfigs } from "@/_mocks";
import FilterBoxRender from "./filter-box-render";

const meta = {
  title: "Components/Filter Box",
  component: FilterBoxRender,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A filter component that allows users to filter products based on various criteria such as price, brand, and category.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof FilterBoxRender>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    filterConfigs: _filterConfigs,
    handleFilterChange: (key, value) => {
      console.log("handleFilterChange:", key, value);
    },
    handleClearAllFilters: () => {
      console.log("handleClearAllFilters");
    },
    filterValues: {},
  },
};
