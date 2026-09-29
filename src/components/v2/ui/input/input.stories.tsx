import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Input, { TextInput, PasswordInput, NumberInput } from "./input";

// Meta configuration
const meta = {
  title: "Design System/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile input component that supports text, password, and number types. Includes debouncing and custom change handlers.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "number"],
      description: "Type of input field",
      table: {
        defaultValue: { summary: "text" },
      },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text",
    },
    disabled: {
      control: "boolean",
      description: "Disables the input",
      table: {
        defaultValue: { summary: "false" },
      },
    },
    handleOnChange: {
      action: "changed",
      description: "Custom change handler",
    },
    handleOnSubmit: {
      action: "submitted",
      description: "Submit handler (triggered on Enter key)",
    },
    debounceTime: {
      control: "number",
      description: "Debounce delay in milliseconds",
      table: {
        defaultValue: { summary: "0" },
      },
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter text...",
  },
};

// Text Input
export const Text: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">
          Basic Text Input
        </label>
        <TextInput placeholder="Enter your name" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          With Default Value
        </label>
        <TextInput defaultValue="John Doe" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Disabled</label>
        <TextInput placeholder="Disabled input" disabled />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Password Input
export const Password: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Password Input</label>
        <PasswordInput placeholder="Enter password" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          With Default Value
        </label>
        <PasswordInput defaultValue="secret123" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Disabled</label>
        <PasswordInput placeholder="Disabled password" disabled />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Number Input
export const Number: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Number Input</label>
        <NumberInput placeholder="Enter a number" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          With Control Value
        </label>
        <NumberInput placeholder="10" controlValue min={10} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          With Default Value
        </label>
        <NumberInput defaultValue="42" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Disabled</label>
        <NumberInput placeholder="Disabled number" disabled />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// All Types
export const AllTypes: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Text</label>
        <Input type="text" placeholder="Text input" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Password</label>
        <Input type="password" placeholder="Password input" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Number</label>
        <Input type="number" placeholder="Number input" />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// With Debounce
export const WithDebounce: Story = {
  args: {
    type: "text",
    placeholder: "Type something...",
    debounceTime: 500,
  },
  decorators: [
    (Story) => (
      <div className="w-80 space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Debounced Input (500ms)
          </label>
          <p className="text-xs text-gray-500 mb-2">
            Type to see debounced action in Actions panel
          </p>
          <Story />
        </div>
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story:
          "Input with 500ms debounce. Check the Actions panel to see debounce-change events.",
      },
    },
  },
};

// Form Example
export const FormExample: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <h3 className="text-lg font-semibold mb-4">Registration Form</h3>
      <div>
        <label className="block text-sm font-medium mb-2">Full Name</label>
        <TextInput placeholder="John Doe" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <TextInput placeholder="john@example.com" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Password</label>
        <PasswordInput placeholder="Enter password" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Age</label>
        <NumberInput placeholder="18" min={18} />
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
    type: "text",
    placeholder: "Type something...",
    disabled: false,
    debounceTime: 0,
  },
};
