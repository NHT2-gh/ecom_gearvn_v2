import ToC from "@/components/v2/toc/toc";
import Description from "@/sections/v2/product-detail/sections/product-desc/components/description";

export default function BlogSection({ content }: { content: string }) {
  return (
    <section className="w-full lg:max-w-[828px] space-y-[0.875rem]">
      <ToC />
      <Description description={content} />
    </section>
  );
}
