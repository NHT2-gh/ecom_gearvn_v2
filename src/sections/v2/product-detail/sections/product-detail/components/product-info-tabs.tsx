import React from "react";
import { Badge } from "@/components/v2/ui/bagde";
import { SVGTruck, SVGUsers } from "@/assets/svgs/v2";
import { Policy, Specification } from "./product-info/tab-content";
import { FireIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import { Tab, TabItem, TabList, TabPanel } from "@/components/v2/tab";

export default function ProductInfoTabs() {
  const [tabIndex, setTabIndex] = React.useState<number>(0);
  return (
    <Tab
      indexSelected={tabIndex}
      onChangeTab={(tabValue) => setTabIndex(tabValue)}
      style="underline"
      className="space-y-6"
    >
      <TabList>
        <TabItem index={0}>Thông số nổi bật</TabItem>
        <TabItem index={1}>Chính sách sản phẩm</TabItem>
        <TabItem index={2}>Mua kèm giá sốc</TabItem>
      </TabList>

      <TabPanel index={0}>
        <Specification
          highLight={[
            { key: "spec_screen_size", value: "24 inches" },
            { key: "spec_panel_type", value: "IPS" },
          ]}
          performanceForGame={[
            {
              name: "Borderlands",
              fps: 95,
            },
            {
              name: "Apex Legends",
              fps: 140,
            },
          ]}
        />
      </TabPanel>

      <TabPanel index={1}>
        <Policy
          policies={[
            {
              icon: (
                <ShieldCheckIcon
                  width={20}
                  height={20}
                  stroke="var(--bg-primary)"
                  className="[&_path]:fill-[var(--icon-red-active)]"
                />
              ),
              title: "Hàng chính hãng - Bảo hành 24 tháng",
              content:
                "Trong thời gian này nếu sản phẩm gặp lỗi sẽ được bảo hành theo chính sách bảo hành của hãng.",
            },

            {
              icon: <SVGTruck width={20} height={20} />,
              title: "Giao hàng miễn phí toàn quốc",
              content:
                "Sản phẩm sẽ được FPT Shop giao hàng miễn phí trên phạm vi toàn quốc.",
            },

            {
              icon: <SVGUsers width={20} height={20} />,
              title: "Kỹ thuật viên hỗ trợ trực tuyến",
              content:
                "Quý khách sẽ nhận được sự hỗ trợ, tư vấn trực tuyến từ đội chuyên gia kỹ thuật FPT Shop đầy kinh nghiệm.",
            },
          ]}
        />
      </TabPanel>

      <TabPanel index={2}>
        <div>Bundle</div>
      </TabPanel>
    </Tab>
  );
}
