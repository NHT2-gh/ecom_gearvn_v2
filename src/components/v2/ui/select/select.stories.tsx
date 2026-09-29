import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Select, Option } from "./select";

const meta = {
  title: "Design System/Select",
  component: Select,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile select component that supports text, password, and number types. Includes debouncing and custom change handlers.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disables the select",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    // handleOnChange: {
    //   action: "changed",
    //   description: "Custom change handler",
    // },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    disabled: false,
    children: (
      <>
        <Option value="1">Option 1</Option>
        <Option value="2">Option 2</Option>
        <Option value="3">Option 3</Option>
      </>
    ),
  },
};
