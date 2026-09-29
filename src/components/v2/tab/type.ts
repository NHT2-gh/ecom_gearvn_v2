export type TabNavigation = {
  label: string;
  value: string;
  icon?: React.ReactNode;
};
interface Tab {
  tabsNavigation: TabNavigation[];
  onChangeTab?: (value: string) => void;
  className?: string;
}

interface UnderlineTab extends Tab {
  style: "underline";
  size?: "sm" | "lg";
}

interface BoxTab extends Tab {
  style: "box";
  size?: "sm" | "md" | "lg";
}

export type TabProps = UnderlineTab | BoxTab;

export interface TabSubComponentProps {
  tabsNavigation: TabNavigation[];
  activeTab: string;
  size?: "sm" | "md" | "lg";
  handleTabChange: (tabValue: string) => void;
  className?: string;
}
