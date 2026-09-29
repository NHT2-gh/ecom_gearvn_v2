import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tooltip, TooltipTrigger, TooltipContent } from "./tooltip";
import Button from "../button/button";
import { Info, HelpCircle, AlertCircle } from "lucide-react";

// Meta configuration
const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A tooltip component built on Radix UI that displays helpful information on hover. Supports multiple positions and custom styling.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};

// Positions
export const Positions: Story = {
  render: () => (
    <div className="flex flex-col gap-20 items-center">
      <div className="flex gap-20 items-center">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Top</Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Tooltip on top</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Right</Button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Tooltip on right</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Bottom</Button>
          </TooltipTrigger>
          <TooltipContent side="bottom">
            <p>Tooltip on bottom</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">Left</Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Tooltip on left</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <Info size={20} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Information tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <HelpCircle size={20} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Help tooltip</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <button className="rounded-full p-2 hover:bg-gray-100">
            <AlertCircle size={20} />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Alert tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Different Offsets
export const WithOffsets: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Offset 0</Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={0}>
          <p>No offset</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Offset 5</Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={5}>
          <p>5px offset</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Offset 10</Button>
        </TooltipTrigger>
        <TooltipContent sideOffset={10}>
          <p>10px offset</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Rich Content
export const RichContent: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Multiline</Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-1">
            <p className="font-semibold">Title</p>
            <p className="text-xs">This is a multiline tooltip</p>
            <p className="text-xs">with multiple paragraphs</p>
          </div>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">With List</Button>
        </TooltipTrigger>
        <TooltipContent>
          <div className="space-y-1">
            <p className="font-semibold">Features:</p>
            <ul className="text-xs list-disc list-inside">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </ul>
          </div>
        </TooltipContent>
      </Tooltip>
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
        <h3 className="text-sm font-semibold mb-3">Button Actions</h3>
        <div className="flex gap-2">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm">Save</Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Save changes (Ctrl+S)</p>
            </TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="outline">
                Cancel
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Discard changes (Esc)</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Form Fields</h3>
        <div className="flex items-center gap-2">
          <label htmlFor="email">Email</label>
          <Tooltip>
            <TooltipTrigger asChild>
              <Info size={16} className="text-gray-500 cursor-help" />
            </TooltipTrigger>
            <TooltipContent>
              <p>We&apos;ll never share your email</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Disabled Elements</h3>
        <Tooltip>
          <TooltipTrigger asChild>
            <span className="inline-block">
              <Button disabled>Disabled</Button>
            </span>
          </TooltipTrigger>
          <TooltipContent>
            <p>This action is currently unavailable</p>
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Interactive Playground
export const Playground: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">Hover me</Button>
      </TooltipTrigger>
      <TooltipContent side="top" sideOffset={5}>
        <p>Customizable tooltip</p>
      </TooltipContent>
    </Tooltip>
  ),
};
