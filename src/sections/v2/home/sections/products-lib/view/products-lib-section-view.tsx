"use client";
import { BannerSlot } from "@/components/banner";
import { Tab, TabItem, TabList } from "@/components/v2/tab";
import { GridProducts } from "../components";
import FilterButtons from "@/components/v2/filter/filter-buttons/filter-buttons";
import { mockProductsLib } from "@/_mocks";
import { Button } from "@/components/v2/ui/button";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { SectionTitle } from "@/components/v2/section-title";
import { useState } from "react";

const tabListData = [
  { label: "Màn hình", value: "man-hinh" },
  { label: "PC", value: "pc" },
  { label: "Laptop", value: "laptop" },
  {
    label: "Bàn phím",
    value: "ban-phim",
  },
  { label: "Tai nghe", value: "tai-nghe" },
];

export default function ProductsLibSection() {
  const [indexSelected, setIndexSelected] = useState(0);
  return (
    <section className="w-full space-y-5">
      <SectionTitle title="Thư viện sản phẩm" />

      <div className="flex gap-6">
        <BannerSlot
          page={"homepage"}
          position={"products-lib"}
          id="products-lib"
          className="[&_img]:rounded-2xl hidden lg:flex"
        />

        <div className="w-full space-y-6">
          <Tab
            style="underline"
            size="lg"
            className="w-fit max-w-full md:w-full overflow-x-scroll scrollbar-hidden"
            indexSelected={indexSelected}
            onChangeTab={setIndexSelected}
          >
            <TabList>
              {tabListData.map((tab, index) => (
                <TabItem key={tab.value} index={index}>
                  {tab.label}
                </TabItem>
              ))}
            </TabList>
          </Tab>

          <FilterButtons
            onChange={(value) => console.log("Selected tab:", value)}
          />

          <GridProducts products={mockProductsLib} />

          <div className="mx-auto w-fit">
            <Button color="secondary" className="">
              Xem thêm 40 kết quả{" "}
              <ChevronDownIcon width={18} height={18} strokeWidth={2} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
