import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Typography } from "./typography";

// Meta configuration
const meta = {
  title: "Design System/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible typography component with predefined text styles for headings, body text, captions, and paragraphs. Supports polymorphic rendering with the `as` prop.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: [
        "h1-36",
        "h2-32",
        "h3-28",
        "h4-24",
        "h5-20",
        "h6-18",
        "h7-16",
        "body-15",
        "body-14",
        "body-13",
        "body-12",
        "caption-11",
        "caption-10",
        "caption-9",
        "paragraph-16",
        "paragraph-14",
      ],
      description: "Typography level/style",
      table: {
        defaultValue: { summary: "body-14" },
      },
    },
    as: {
      control: "select",
      options: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "span",
        "b",
        "em",
        "div",
      ],
      description: "HTML element to render",
    },
    children: {
      control: "text",
      description: "Content to display",
    },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: "Typography Component",
    level: "body-14",
  },
};

// Headings
export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography level="h1-36">Heading 1 - 36px</Typography>
      <Typography level="h2-32">Heading 2 - 32px</Typography>
      <Typography level="h3-28">Heading 3 - 28px</Typography>
      <Typography level="h4-24">Heading 4 - 24px</Typography>
      <Typography level="h5-20">Heading 5 - 20px</Typography>
      <Typography level="h6-18">Heading 6 - 18px</Typography>
      <Typography level="h7-16">Heading 7 - 16px (Bold)</Typography>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Body Text
export const BodyText: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <div>
        <Typography level="body-15" className="font-semibold mb-1">
          Body 15px
        </Typography>
        <Typography level="body-15">
          This is body text at 15px. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Typography>
      </div>
      <div>
        <Typography level="body-14" className="font-semibold mb-1">
          Body 14px (Default)
        </Typography>
        <Typography level="body-14">
          This is body text at 14px. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Typography>
      </div>
      <div>
        <Typography level="body-13" className="font-semibold mb-1">
          Body 13px
        </Typography>
        <Typography level="body-13">
          This is body text at 13px. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Typography>
      </div>
      <div>
        <Typography level="body-12" className="font-semibold mb-1">
          Body 12px
        </Typography>
        <Typography level="body-12">
          This is body text at 12px. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Captions
export const Captions: Story = {
  render: () => (
    <div className="space-y-3">
      <div>
        <Typography level="caption-11" className="font-semibold">
          Caption 11px
        </Typography>
        <Typography level="caption-11">
          Small caption text for labels and metadata
        </Typography>
      </div>
      <div>
        <Typography level="caption-10" className="font-semibold">
          Caption 10px
        </Typography>
        <Typography level="caption-10">
          Smaller caption text for fine print
        </Typography>
      </div>
      <div>
        <Typography level="caption-9" className="font-semibold">
          Caption 9px
        </Typography>
        <Typography level="caption-9">
          Smallest caption text for minimal details
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Paragraphs
export const Paragraphs: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <div>
        <Typography level="paragraph-16" className="font-semibold mb-2">
          Paragraph 16px
        </Typography>
        <Typography level="paragraph-16">
          This is paragraph text at 16px with 160% line height for better
          readability. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </Typography>
      </div>
      <div>
        <Typography level="paragraph-14" className="font-semibold mb-2">
          Paragraph 14px
        </Typography>
        <Typography level="paragraph-14">
          This is paragraph text at 14px with 160% line height for better
          readability. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// All Levels
export const AllLevels: Story = {
  render: () => (
    <div className="space-y-2">
      <Typography level="h1-36">h1-36: The quick brown fox</Typography>
      <Typography level="h2-32">h2-32: The quick brown fox</Typography>
      <Typography level="h3-28">h3-28: The quick brown fox</Typography>
      <Typography level="h4-24">h4-24: The quick brown fox</Typography>
      <Typography level="h5-20">h5-20: The quick brown fox</Typography>
      <Typography level="h6-18">h6-18: The quick brown fox</Typography>
      <Typography level="h7-16">h7-16: The quick brown fox</Typography>
      <Typography level="body-15">body-15: The quick brown fox</Typography>
      <Typography level="body-14">body-14: The quick brown fox</Typography>
      <Typography level="body-13">body-13: The quick brown fox</Typography>
      <Typography level="body-12">body-12: The quick brown fox</Typography>
      <Typography level="caption-11">
        caption-11: The quick brown fox
      </Typography>
      <Typography level="caption-10">
        caption-10: The quick brown fox
      </Typography>
      <Typography level="caption-9">caption-9: The quick brown fox</Typography>
      <Typography level="paragraph-16">
        paragraph-16: The quick brown fox
      </Typography>
      <Typography level="paragraph-14">
        paragraph-14: The quick brown fox
      </Typography>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Polymorphic Rendering
export const PolymorphicRendering: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <Typography level="body-14" className="font-semibold mb-2">
          Same style, different elements:
        </Typography>
        <Typography level="h4-24" as="h2">
          h4 style as h2 element
        </Typography>
        <Typography level="body-14" as="span">
          body-14 style as span element
        </Typography>
        <Typography level="caption-11" as="div">
          caption-11 style as div element
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// With Custom Styling
export const WithCustomStyling: Story = {
  render: () => (
    <div className="space-y-4">
      <Typography level="h3-28" className="text-red-600 font-bold">
        Custom Red Heading
      </Typography>
      <Typography level="body-14" className="text-blue-500 italic">
        Custom Blue Italic Text
      </Typography>
      <Typography level="paragraph-16" className="text-gray-600 underline">
        Custom Gray Underlined Paragraph
      </Typography>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Use Cases
export const UseCases: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <article>
        <Typography level="h2-32" className="mb-4">
          Article Title
        </Typography>
        <Typography level="caption-11" className="text-gray-500 mb-4">
          Published on December 7, 2024 by John Doe
        </Typography>
        <Typography level="paragraph-16" className="mb-4">
          This is the introduction paragraph with comfortable line height for
          reading. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
        <Typography level="h4-24" className="mb-2">
          Section Heading
        </Typography>
        <Typography level="paragraph-14">
          This is a section with slightly smaller paragraph text. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </article>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};

// Interactive Playground
export const Playground: Story = {
  args: {
    children: "Customize this text",
    level: "body-14",
  },
};
