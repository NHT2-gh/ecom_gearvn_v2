import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Card, { backgroundMap } from "./base-card";
import { BasicProduct } from "@/types/v2/product";
import { TagType } from "./sub-components/tag-header-card";
import { ProgressBar, Tags } from "./sub-components";

type BackgroundCard = "BG03" | "BG04" | "BG05";

// Mock product data
const mockProduct: BasicProduct = {
  id: "1",
  name: "Laptop Gaming ASUS ROG Strix G16 G615JMR S5155W",
  slug: "laptop-gaming-asus-rog-strix-g16-g615jmr-s5155w",
  price: {
    original: 46990000,
    discount: 41890000,
  },
  sku: "SKU-001",
  featureImage:
    "https://product.hstatic.net/200000722513/product/rog_strix_g16_2025_g615_3_d66ab4_cd80734735b14547adeb6ac31bee983c_grande.png",
  highlightSpecs: [
    { key: "spec_screen", value: "24 inch" },
    { key: "spec_hz", value: "100 Hz" },
    { key: "spec_resolution", value: `Full HD \n (1920 x 1080)` },
  ],
};

// const mockProductNoDiscount: BasicProduct = {
//   id: "2",
//   name: "Mechanical Keyboard RGB",
//   slug: "mechanical-keyboard-rgb",
//   price: {
//     original: 2500000,
//   },
//   featureImage:
//     "https://product.hstatic.net/200000722513/product/rog_strix_g16_2025_g615_3_d66ab4_cd80734735b14547adeb6ac31bee983c_grande.png",
//   highlightSpecs: [
//     { key: "screen", name: "24 inch" },
//     { key: "hz", name: "100 Hz" },
//     { key: "resolution", name: "Full HD (1920 x 1080)" },
//   ],
// };

// Meta configuration
const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A product card component that displays product information with an image, specs, price, and optional action buttons.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    product: {
      description: "Product data to display",
      control: false,
      table: {
        type: { summary: "BasicProduct" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    custom: {
      description: "Custom configuration for header and background",
      control: "object",
      table: {
        type: { detail: "object" },
      },
    },
    actionButtons: {
      description: "Action buttons to display",
      control: "object",
      table: {
        type: { detail: "object" },
      },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

// Default story - Interactive playground with background control
export const Default = {
  render: () => <Card product={mockProduct} />,
  parameters: {
    docs: {
      description: {
        story: "BaseCard with default options.",
      },
    },
  },
} as unknown as Story;

// Expanded Custom - Interactive playground with all controls
export const ExpandedCustom = {
  args: {
    background: "BG01" as BackgroundCard,
    tagType: "none",
    imageTag: "",
    additionalContent: "none",
    showActionButtons: false,
  },
  argTypes: {
    background: {
      control: "select",
      options: ["BG01", "BG03", "BG04", "BG05"],
      description: "Select background gradient for the card",
    },
    tagType: {
      control: "select",
      options: ["none", "sole", "bestSeller", "flashShipping"],
      description: "Select header tag type (none to hide tag)",
    },
    imageTag: {
      control: "text",
      description: "Image tag URL (overrides tagType if provided)",
    },
    additionalContent: {
      control: "select",
      options: ["none", "progressBar", "tags"],
      description: "Select additional content to display in the card",
    },
    showActionButtons: {
      control: "boolean",
      description: "Show action buttons (Add to cart, View detail)",
    },
  },
  render: ({
    background,
    tagType,
    imageTag,
    additionalContent,
    showActionButtons,
  }: {
    background: BackgroundCard;
    tagType: "none" | TagType;
    imageTag: string;
    additionalContent: "none" | "progressBar" | "tags";
    showActionButtons: boolean;
  }) => {
    const renderAdditionalContent = () => {
      switch (additionalContent) {
        case "progressBar":
          return (
            <ProgressBar
              mode={
                backgroundMap["light"].includes(background) ? "light" : "dark"
              }
              progress={5}
              total={10}
            />
          );
        case "tags":
          return <Tags tags={["Trả góp 0%", "Hàng về sớm"]} />;
        case "none":
        default:
          return null;
      }
    };

    return (
      <Card
        product={mockProduct}
        custom={{
          background,
          hearderTag:
            tagType !== "none" || imageTag
              ? {
                  tagType:
                    tagType !== "none" ? (tagType as TagType) : undefined,
                  imageTag: imageTag || undefined,
                }
              : undefined,
        }}
        actionButtons={
          showActionButtons
            ? {
                onAddToCart: () => console.log("Add to cart"),
                onViewDetail: () => console.log("View detail"),
              }
            : undefined
        }
      >
        {renderAdditionalContent()}
      </Card>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive card with full customization controls. Adjust background, header tag, additional content, and action buttons using the Controls panel.",
      },
    },
  },
} as unknown as Story;

// Background Variants Showcase
export const BackgroundVariants = {
  render: () => (
    <div className="flex flex-wrap justify-center gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-3">BG03 - Light (Default)</h3>
        <Card product={mockProduct} custom={{ background: "BG03" }} />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">BG04 - Blue Gradient</h3>
        <Card product={mockProduct} custom={{ background: "BG04" }} />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">BG05 - Dark</h3>
        <Card product={mockProduct} custom={{ background: "BG05" }} />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story: "Showcase of all available background variants",
      },
    },
  },
} as unknown as Story;
