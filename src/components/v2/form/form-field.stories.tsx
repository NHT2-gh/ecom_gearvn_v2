import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "./form-field";
import { TextInput, PasswordInput, NumberInput } from "../ui/input";
import { Button } from "../ui/button";

type MessageType = "success" | "error" | "info";

// Meta configuration
const meta = {
  title: "Components/FormField",
  component: FormField,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A form field wrapper component that provides label, hint tooltip, validation messages, and flexible layouts. Works with any input component.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    layout: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "Layout direction",
      table: {
        defaultValue: { summary: "vertical" },
      },
    },
    fieldType: {
      control: "select",
      options: ["input", "password", "number"],
      description: "Input type",
      table: {
        defaultValue: { summary: "input" },
      },
    },

    fieldConfig: {
      control: "object",
      description: "Input configuration",
    },
    options: {
      control: "object",
      description: "FormField options",
      message: {
        control: "object",
        description: "Validation or info message",
      },
      hint: {
        control: "object",
        description: "Hint tooltip configuration",
      },
    },
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    label: "Email",
    fieldConfig: { placeholder: "Enter your email" },
    fieldType: "input",
    layout: "vertical",
    args: { required: false },
  } as any,
};

// Variants - Different Input Types
export const Variants = {
  render: () => (
    <div className="w-96 space-y-4">
      <FormField
        name="text-input"
        options={{ label: "Text Input", required: false }}
        fieldType="input"
        fieldConfig={{ placeholder: "Enter text" }}
      />

      <FormField
        name="password-input"
        options={{ label: "Password Input", required: false }}
        fieldType="input"
        fieldConfig={{ type: "password", placeholder: "Enter password" }}
      />

      <FormField
        name="number-input"
        options={{ label: "Number Input", required: false }}
        fieldType="input"
        fieldConfig={{ type: "number", placeholder: "Enter number", min: 0 }}
      />
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "FormField works with different input types: TextInput, PasswordInput, NumberInput via fieldConfig.",
      },
    },
  },
} as unknown as Story;

// With States - Interactive control for all states
export const WithStates = {
  args: {
    required: false,
    messageType: "none" as MessageType | "none",
    showHint: false,
  },
  argTypes: {
    required: {
      control: "boolean",
      description: "Show required asterisk",
    },
    messageType: {
      control: "select",
      options: ["none", "success", "error", "info"],
      description: "Message type to display",
    },
    showHint: {
      control: "boolean",
      description: "Show hint tooltip",
    },
  },
  render: ({
    required,
    messageType,
    showHint,
  }: {
    required: boolean;
    messageType: MessageType | "none";
    showHint: boolean;
  }) => {
    // Mock messages for each type
    const messageMap: Record<MessageType, string> = {
      success: "Email is available and valid",
      error: "Please enter a valid email address",
      info: "We will send you a verification email",
    };

    return (
      <div className="w-96">
        <FormField
          name="email-input"
          fieldConfig={{ placeholder: "example@email.com" }}
          options={{
            label: "Email Address",
            required: required,
            message:
              messageType !== "none"
                ? {
                    type: messageType as MessageType,
                    text: messageMap[messageType as MessageType],
                  }
                : undefined,
            hint: showHint ? "Enter a valid email address" : undefined,
          }}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to test all FormField states. Control required, message types (success, error, info), and hint tooltip using the Controls panel.",
      },
    },
  },
} as unknown as Story;

// Complete Form - Full registration form with submit button
export const CompleteForm = {
  render: () => (
    <form
      className="w-96 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted");
      }}
    >
      <h2 className="text-2xl font-bold mb-6">Registration Form</h2>

      <FormField
        name="full-name"
        options={{ label: "Full Name", required: true }}
        fieldConfig={{ placeholder: "John Doe" }}
      />

      <FormField
        name="email"
        options={{
          label: "Email",
          required: true,
          hint: "We will send a verification email",
        }}
        fieldConfig={{ placeholder: "john@example.com" }}
      />

      <FormField
        name="password"
        options={{
          label: "Password",
          required: true,
          hint: "Must be at least 8 characters with numbers and symbols",
          message: {
            type: "info",
            text: "Use a strong password",
          },
        }}
        fieldConfig={{ type: "password", placeholder: "Enter password" }}
      />

      <FormField
        name="confirm-password"
        options={{
          label: "Confirm Password",
          required: true,
        }}
        fieldConfig={{ type: "password", placeholder: "Confirm password" }}
      />

      <FormField
        name="age"
        options={{
          label: "Age",
          required: true,
          hint: "You must be 18 or older to register",
        }}
        fieldConfig={{ type: "number", placeholder: "18", min: 18 }}
      />

      <FormField
        name="phone-number"
        options={{
          label: "Phone Number",
          required: true,
          message: {
            type: "info",
            text: "Optional - for account recovery",
          },
        }}
        fieldConfig={{ placeholder: "+1 234 567 8900" }}
      />

      <div className="flex gap-3 pt-4">
        <Button
          type="submit"
          variant="solid"
          color="primary"
          className="flex-1"
        >
          Submit
        </Button>
        <Button
          type="button"
          variant="outline"
          color="secondary"
          className="flex-1"
        >
          Cancel
        </Button>
      </div>
    </form>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Complete registration form example with multiple fields, validation hints, messages, and submit/cancel buttons. Demonstrates real-world usage.",
      },
    },
  },
} as unknown as Story;
