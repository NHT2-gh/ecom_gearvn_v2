import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./button";
import { ButtonColors } from "./type";

// Meta configuration
const meta = {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile button component with multiple variants, sizes, and colors. Supports loading states and can be rendered as a child component using the asChild prop.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "surface", "outline", "ghost", "plain"],
      description: "Visual style variant of the button",
      table: {
        defaultValue: { summary: "solid" },
      },
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the button",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    color: {
      control: "select",
      options: ButtonColors,
      description: "Color theme of the button",
      table: {
        defaultValue: { summary: "primary" },
      },
    },
    isLoading: {
      control: "boolean",
      description: "Shows loading state with reduced opacity",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    onClick: {
      action: "clicked",
      description: "Click event handler",
    },
    children: {
      control: "text",
      description: "Button content",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: "Button",
    variant: "solid",
    size: "md",
    color: "primary",
  },
};

// Variants showcase
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Solid</h3>
        <div className="flex gap-2 flex-wrap">
          {ButtonColors.map((color) => (
            <Button key={color} variant="solid" color={color}>
              {color}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Surface</h3>
        <div className="flex gap-2 flex-wrap">
          {ButtonColors.map((color) => (
            <Button key={color} variant="surface" color={color}>
              {color}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Outline</h3>
        <div className="flex gap-2 flex-wrap">
          {ButtonColors.map((color) => (
            <Button key={color} variant="outline" color={color}>
              {color}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Ghost</h3>
        <div className="flex gap-2 flex-wrap">
          {ButtonColors.map((color) => (
            <Button key={color} variant="ghost" color={color}>
              {color}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Plain</h3>
        <div className="flex gap-2 flex-wrap">
          {ButtonColors.map((color) => (
            <Button key={color} variant="plain" color={color}>
              {color}
            </Button>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Sizes showcase
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {(["sm", "md", "lg", "xl"] as const).map((size) => (
        <div key={size}>
          <h3 className="text-sm font-semibold mb-3 capitalize">{size}</h3>
          <div className="flex gap-2 items-center flex-wrap">
            {ButtonColors.map((color) => (
              <Button key={color} size={size} color={color}>
                {color}
              </Button>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// States showcase
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Normal</h3>
        <div className="flex gap-2 flex-wrap">
          {ButtonColors.map((color) => (
            <Button key={color} color={color}>
              {color}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Loading</h3>
        <div className="flex gap-2 flex-wrap">
          {ButtonColors.map((color) => (
            <Button key={color} color={color} isLoading>
              {color}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Disabled</h3>
        <div className="flex gap-2 flex-wrap">
          {ButtonColors.map((color) => (
            <Button key={color} color={color} disabled>
              {color}
            </Button>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Interactive playground
export const Playground: Story = {
  args: {
    children: "Click me",
    variant: "solid",
    size: "md",
    color: "primary",
    isLoading: false,
    disabled: false,
  },
};

// With icons example
export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-2 flex-wrap">
      <Button>
        <span>🚀</span>
        Launch
      </Button>

      <Button variant="outline">
        <span>📧</span>
        Email
      </Button>
      <Button variant="ghost">
        <span>⚙️</span>
        Settings
      </Button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Full width example
export const FullWidth: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-2">
      <Button className="w-full">Full Width Button</Button>
      <Button className="w-full" variant="outline">
        Full Width Outline
      </Button>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
