import { SectionTitle } from "@/components/v2/section-title";
import ToC from "@/components/v2/toc/toc";
import React from "react";
import Description from "../components/description";

interface ProductDescProps {
  content: string;
}

function splitDescription(description: string): string {
  if (!description) return "";

  const spanIndex = description.indexOf("##");

  if (spanIndex !== -1) {
    const afterSpanIndex = spanIndex + "##".length;
    const remainingDesc = description.substring(afterSpanIndex).trim();
    return remainingDesc;
  }

  return description;
}

export default function ProductDesc({ content }: ProductDescProps) {
  const remainingDescription = splitDescription(content);
  return (
    <section className="grow max-w-[828px] space-y-5">
      <SectionTitle title="Thông tin sản phẩm" />
      <ToC />
      <Description description={remainingDescription} />
    </section>
  );
}
