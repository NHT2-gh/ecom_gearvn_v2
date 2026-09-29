import { BannerSlot } from "@/components/banner";
import { BasicProduct } from "@/types/v2/product";
import { BreadCrumbs } from "@/components/v2/breadcrumbs";
import { CollectionInfoResponse } from "@/types/response";
import { FilterItemConfig } from "@/components/v2/filter/type";
import {
  BlogSection,
  ProductRecommendation,
  ProductsCollection,
  ReviewNewsSection,
} from "../sections";
import { CampainBlock } from "../../home/sections/campain/components";

interface CollectionsViewProps {
  collectionInfo: CollectionInfoResponse;
  initialProducts: BasicProduct[];
  filterConfigs: FilterItemConfig[];
}

export default function CollectionPageView({
  collectionInfo,
  initialProducts,
  filterConfigs,
}: CollectionsViewProps) {
  return (
    <section className="w-full space-y-10">
      <div className="container">
        <BreadCrumbs
          data={[
            {
              title: collectionInfo.collection.title,
            },
          ]}
        />
        <CampainBlock
          customStyle={{
            imageBackground: "var(--color-neutral-50)",
            className: "border-corner-style mt-10",
            style: {
              ["--border-color" as string]: "var(--icon-primary)",
            },
          }}
        />
      </div>

      {/* 
      <BannerSlot
        page={"collection"}
        position={"top"}
        id={"collection-banner-top"}
        className="[&_#collection-banner-top-1-1]:w-full"
      /> */}

      <ProductsCollection
        collectionInfo={collectionInfo}
        initialProducts={initialProducts}
        filterConfigs={filterConfigs}
      />

      <BannerSlot
        page={"collection"}
        position={"middle"}
        id={"collection-banner-middle"}
        className="container"
      />

      <ProductRecommendation />

      <section className="space-y-8 container lg:flex lg:flex-row-reverse lg:gap-8">
        <ReviewNewsSection />
        <BlogSection content={collectionInfo.collection.description || ""} />
      </section>
    </section>
  );
}
