import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tab, TabItem, TabList } from "./tab";

// Mock tab data
const mockTabs = [
  { label: "Tất cả", value: "all" },
  { label: "Laptop", value: "laptop" },
  { label: "PC", value: "pc" },
  { label: "Màn hình", value: "monitor" },
];

// Meta configuration
const meta = {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Tab component with two styles: box and underline. Supports different sizes and custom tab navigation.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    style: {
      control: "select",
      options: ["box", "underline"],
      description: "Tab style variant",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Tab size (md only available for box style)",
    },
    indexSelected: {
      control: "number",
      description: "Selected tab index",
    },
    onChangeTab: {
      action: "tab-changed",
      description: "Callback when tab is changed",
    },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default - Box style
export const Default: Story = {
  args: {
    style: "box",
    size: "sm",
    indexSelected: 0,
    className: "w-[500px]",
    onChangeTab: (index) => console.log("Tab changed:", index),
    children: (
      <TabList>
        {mockTabs.map((tab, index) => (
          <TabItem key={index} index={index}>
            {tab.label}
          </TabItem>
        ))}
      </TabList>
    ),
  },
};

// Box Style - All Sizes
export const BoxStyle = {
  render: () => (
    <div className="space-y-6 w-[500px]">
      <div>
        <h3 className="text-sm font-semibold mb-3">Small (sm)</h3>
        <Tab
          style="box"
          size="sm"
          indexSelected={0}
          onChangeTab={(index) => console.log("Tab changed:", index)}
        >
          <TabList>
            {mockTabs.map((tab, index) => (
              <TabItem key={index} index={index}>
                {tab.label}
              </TabItem>
            ))}
          </TabList>
        </Tab>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Medium (md)</h3>
        <Tab
          style="box"
          size="md"
          indexSelected={0}
          onChangeTab={(index) => console.log("Tab changed:", index)}
        >
          <TabList>
            {mockTabs.map((tab, index) => (
              <TabItem key={index} index={index}>
                {tab.label}
              </TabItem>
            ))}
          </TabList>
        </Tab>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Large (lg)</h3>
        <Tab
          style="box"
          size="lg"
          indexSelected={0}
          onChangeTab={(index) => console.log("Tab changed:", index)}
        >
          <TabList>
            {mockTabs.map((tab, index) => (
              <TabItem key={index} index={index}>
                {tab.label}
              </TabItem>
            ))}
          </TabList>
        </Tab>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Box style tabs with background and padding. Available in 3 sizes: sm, md, lg.",
      },
    },
  },
} as unknown as Story;

// Underline Style - All Sizes
export const UnderlineStyle = {
  render: () => (
    <div className="space-y-6 w-[500px]">
      <div>
        <h3 className="text-sm font-semibold mb-3">Small (sm)</h3>
        <Tab
          style="underline"
          size="sm"
          indexSelected={0}
          onChangeTab={(index) => console.log("Tab changed:", index)}
        >
          <TabList>
            {mockTabs.map((tab, index) => (
              <TabItem key={index} index={index}>
                {tab.label}
              </TabItem>
            ))}
          </TabList>
        </Tab>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">Large (lg)</h3>
        <Tab
          style="underline"
          size="lg"
          indexSelected={0}
          onChangeTab={(index) => console.log("Tab changed:", index)}
        >
          <TabList>
            {mockTabs.map((tab, index) => (
              <TabItem key={index} index={index}>
                {tab.label}
              </TabItem>
            ))}
          </TabList>
        </Tab>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Underline style tabs with bottom border on active tab. Available in 2 sizes: sm, lg.",
      },
    },
  },
} as unknown as Story;

// Different Tab Counts
export const DifferentTabCounts = {
  render: () => (
    <div className="space-y-6 w-[500px]">
      <div>
        <h3 className="text-sm font-semibold mb-3">2 Tabs</h3>
        <Tab
          style="box"
          size="sm"
          indexSelected={0}
          onChangeTab={(index) => console.log("Tab changed:", index)}
        >
          <TabList>
            {mockTabs.map((tab, index) => (
              <TabItem key={index} index={index}>
                {tab.label}
              </TabItem>
            ))}
          </TabList>
        </Tab>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">3 Tabs</h3>
        <Tab
          style="box"
          size="sm"
          indexSelected={0}
          onChangeTab={(index) => console.log("Tab changed:", index)}
        >
          <TabList>
            {mockTabs.map((tab, index) => (
              <TabItem key={index} index={index}>
                {tab.label}
              </TabItem>
            ))}
          </TabList>
        </Tab>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">5 Tabs</h3>
        <Tab
          className="w-full"
          style="box"
          size="sm"
          indexSelected={0}
          onChangeTab={(index) => console.log("Tab changed:", index)}
        >
          <TabList>
            {mockTabs.map((tab, index) => (
              <TabItem key={index} index={index}>
                {tab.label}
              </TabItem>
            ))}
          </TabList>
        </Tab>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-3">5 Tabs</h3>
        <Tab
          className="w-full"
          style="box"
          size="sm"
          indexSelected={0}
          onChangeTab={(index) => console.log("Tab changed:", index)}
        >
          <TabList>
            {mockTabs.map((tab, index) => (
              <TabItem key={index} index={index}>
                {tab.label}
              </TabItem>
            ))}
          </TabList>
        </Tab>
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          "Tabs automatically adjust width based on the number of items. Works with 2 to 5+ tabs.",
      },
    },
  },
} as unknown as Story;

// Interactive Playground
export const Playground = {
  args: {
    style: "box",
    size: "sm",
    tabsNavigation: mockTabs,
  },
  argTypes: {
    style: {
      control: "select",
      options: ["box", "underline"],
      description: "Select tab style",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Select tab size",
    },
  },
  render: ({
    style,
    size,
  }: {
    style: "box" | "underline";
    size: "sm" | "md" | "lg";
  }) => {
    return (
      <div className="w-[500px]">
        {style === "box" ? (
          <Tab
            style="box"
            size={size as "sm" | "md" | "lg"}
            indexSelected={0}
            onChangeTab={(index) => console.log("Tab changed:", index)}
          >
            <TabList>
              {mockTabs.map((tab, index) => (
                <TabItem key={index} index={index}>
                  {tab.label}
                </TabItem>
              ))}
            </TabList>
          </Tab>
        ) : (
          <Tab
            style="underline"
            size={size === "md" ? "sm" : (size as "sm" | "lg")}
            indexSelected={0}
            onChangeTab={(index) => console.log("Tab changed:", index)}
          >
            <TabList>
              {mockTabs.map((tab, index) => (
                <TabItem key={index} index={index}>
                  {tab.label}
                </TabItem>
              ))}
            </TabList>
          </Tab>
        )}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground to test different tab configurations. Use Controls panel to change style and size.",
      },
    },
  },
} as unknown as Story;
