"use client";
import React, { useState } from "react";
import { GroupShortVideoReview, GroupVideoReview } from "../components";
import {
  mockShortsReview,
  mockVideoReview,
} from "@/_mocks/_mock_shorts_review/_mock_shorts_review";
import GroupNews from "../components/group-news";
import { Tab, TabPanel, TabItem, TabList } from "@/components/v2/tab/tab";
import useWindowSize from "@/hooks/use-window-size";

export default function ReviewNewsSection() {
  const [index, setIndex] = useState(0);
  const { width } = useWindowSize();
  return (
    <section className="w-full space-y-6 lg:w-[23.75rem] ">
      {width < 1135 ? (
        <Tab
          style="underline"
          onChangeTab={(index) => setIndex(index)}
          indexSelected={index}
          className="space-y-3"
        >
          <TabList>
            <TabItem index={0}>Review sản phẩm</TabItem>
            <TabItem index={1}>Video sản phẩm </TabItem>
            <TabItem index={2}>Tin tức sản phẩm</TabItem>
          </TabList>

          <TabPanel index={0}>
            <GroupShortVideoReview shorts={mockShortsReview} />
          </TabPanel>
          <TabPanel index={1}>
            <GroupVideoReview videos={mockVideoReview} />
          </TabPanel>
          <TabPanel index={2}>
            <GroupNews cate={"thu-thuat-giai-dap"} />
          </TabPanel>
        </Tab>
      ) : (
        <>
          <GroupShortVideoReview shorts={mockShortsReview} />
          <GroupVideoReview videos={mockVideoReview} />
          <GroupNews cate={"thu-thuat-giai-dap"} />
        </>
      )}
    </section>
  );
}
