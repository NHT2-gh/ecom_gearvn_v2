"use client";

import React from "react";
import { BreadCrumbs } from "@/components/v2/breadcrumbs";
import {
  ActionButtons,
  PCComponents,
  BuildSummary,
  SavedBuildsPanel,
} from "../components";
import { useInitPCBuilder, usePCBuilder } from "@/hooks/use-pc-builder";

export default function BuildPCPageView() {
  // Initialize PC Builder from IndexedDB
  const { hydrated } = useInitPCBuilder();
  const { resetBuild } = usePCBuilder();

  if (!hydrated) {
    return (
      <section className="container bg-white py-4 px-2.5 space-y-4">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-gray-500">Đang tải cấu hình...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container bg-white py-4 px-2.5 space-y-4">
      <BreadCrumbs data={[{ title: "Build PC" }]} />

      <header className="w-full shadow-build-pc-header py-4 px-2 rounded-sm">
        <h1 className="">Build PC</h1>
        <p className="text-[rgb(133,143,155)]">
          Chọn các linh kiện máy tính bạn cần để xây dựng cấu hình máy
        </p>
      </header>

      <div className="flex gap-4">
        <div className="w-[60%] space-y-4">
          <ActionButtons onReset={resetBuild} />
          <PCComponents />
        </div>

        <div className="w-[40%] space-y-4">
          <BuildSummary />
          <SavedBuildsPanel />
        </div>
      </div>
    </section>
  );
}
