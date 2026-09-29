"use client";
import React, { useState } from "react";
import { Tab, TabItem, TabList } from "@/components/v2/tab";
import { useBlogsByCollection } from "@/hooks/queries/use-blogs";
import { Blog } from "@/types/blog";
import { HomeIcon } from "@heroicons/react/24/outline";
import { HotNews } from "../components";

const tabListData = [
  {
    label: (
      <>
        <HomeIcon className="order-0" width={16} height={16} /> Tổng hợp
      </>
    ),
    value: "all",
  },
  {
    label: "Review sản phẩm",
    value: "review",
  },
  {
    label: "Tin tức công nghệ",
    value: "news",
  },
  {
    label: "Game",
    value: "game",
  },
  {
    label: "Thủ thuật",
    value: "thu-thuat-giai-dap",
  },
  {
    label: "Khuyến mãi",
    value: "khuyen-mai",
  },
];

export default function HotNewsSection({ initBlogs }: { initBlogs: Blog[] }) {
  const [indexSelected, setIndexSelected] = useState(0);
  const blogs = useBlogsByCollection(
    tabListData[indexSelected].value,
    initBlogs,
  );

  return (
    <>
      <Tab
        style="underline"
        className="w-[80%] mb-6"
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

      <HotNews blogs={blogs.data || []} />
    </>
  );
}
