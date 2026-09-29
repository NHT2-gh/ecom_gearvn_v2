import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Badge from "./bagde";
import { BadgeColors, BadgeVariants, BadgeSizes } from "./type";
import { Star, Heart, Zap } from "lucide-react";

// Meta configuration
const meta = {
  title: "Design System/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile badge component with multiple variants (combo, mini, flag), sizes, and colors. Supports icons and closeable functionality.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: BadgeVariants,
      description: "Visual style variant of the badge",
      table: {
        defaultValue: { summary: "combo" },
      },
    },
    size: {
      control: "select",
      options: BadgeSizes,
      description: "Size of the badge",
      table: {
        defaultValue: { summary: "md" },
      },
    },
    color: {
      control: "select",
      options: BadgeColors,
      description: "Color theme of the badge",
      table: {
        defaultValue: { summary: "red" },
      },
    },
    children: {
      control: "text",
      description: "Badge content",
    },
    onClose: {
      action: "closed",
      description: "Close handler (for combo and flag variants)",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: "Badge",
    variant: "combo",
    size: "md",
    color: "red",
  },
};

// Combo Variant
export const Combo: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">All Colors</h3>
        <div className="flex gap-2 flex-wrap">
          {BadgeColors.map((color) => (
            <Badge key={color} variant="combo" color={color}>
              {color}
            </Badge>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Sizes</h3>
        <div className="flex gap-2 items-center flex-wrap">
          {BadgeSizes.map((size) => (
            <Badge key={size} variant="combo" size={size} color="red">
              {size}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Mini Variant (Icon only)
export const Mini: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">With Icons</h3>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="mini" color="red" icon={<Star size={12} />} />
          <Badge variant="mini" color="green" icon={<Heart size={12} />} />
          <Badge variant="mini" color="yellow" icon={<Zap size={12} />} />
          <Badge variant="mini" color="sky" icon={<Star size={12} />} />
          <Badge variant="mini" color="orange" icon={<Heart size={12} />} />
          <Badge variant="mini" color="fuchsia" icon={<Zap size={12} />} />
          <Badge variant="mini" color="violet" icon={<Star size={12} />} />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Sizes</h3>
        <div className="flex gap-2 items-center flex-wrap">
          <Badge
            variant="mini"
            size="sm"
            color="red"
            icon={<Star size={10} />}
          />
          <Badge
            variant="mini"
            size="md"
            color="red"
            icon={<Star size={12} />}
          />
          <Badge
            variant="mini"
            size="lg"
            color="red"
            icon={<Star size={14} />}
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Flag Variant
export const Flag: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">All Colors</h3>
        <div className="flex gap-2 flex-wrap">
          {BadgeColors.map((color) => (
            <Badge key={color} variant="flag" color={color}>
              {color}
            </Badge>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Sizes</h3>
        <div className="flex gap-2 items-center flex-wrap">
          {BadgeSizes.map((size) => (
            <Badge key={size} variant="flag" size={size} color="green">
              {size}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Combo</h3>
        <div className="flex gap-2 flex-wrap">
          {BadgeColors.map((color) => (
            <Badge key={color} variant="combo" color={color}>
              {color}
            </Badge>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Mini</h3>
        <div className="flex gap-2 flex-wrap">
          {BadgeColors.map((color) => (
            <Badge
              key={color}
              variant="mini"
              color={color}
              icon={<Star size={12} />}
            />
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Flag</h3>
        <div className="flex gap-2 flex-wrap">
          {BadgeColors.map((color) => (
            <Badge key={color} variant="flag" color={color}>
              {color}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Use Cases
export const UseCases: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">Status Indicators</h3>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="combo" color="green">
            Active
          </Badge>
          <Badge variant="combo" color="yellow">
            Pending
          </Badge>
          <Badge variant="combo" color="red">
            Inactive
          </Badge>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Tags</h3>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="flag" color="sky">
            React
          </Badge>
          <Badge variant="flag" color="violet">
            TypeScript
          </Badge>
          <Badge variant="flag" color="orange">
            Next.js
          </Badge>
          <Badge variant="flag" color="fuchsia">
            Tailwind
          </Badge>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Notifications</h3>
        <div className="flex gap-2 flex-wrap items-center">
          <span className="relative">
            Messages
            <Badge
              variant="mini"
              color="red"
              icon={<span className="text-[10px]">5</span>}
              className="absolute -top-2 -right-2"
            />
          </span>
          <span className="relative">
            Alerts
            <Badge
              variant="mini"
              color="yellow"
              icon={<span className="text-[10px]">3</span>}
              className="absolute -top-2 -right-2"
            />
          </span>
        </div>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Interactive Playground
export const Playground: Story = {
  args: {
    children: "Badge",
    variant: "combo",
    size: "md",
    color: "red",
  },
};
