import { BannerSlot } from "@/components/banner";
import {
  CampainSection,
  CategorysSection,
  FeaturedBrandsSection,
  GroupsProductSection,
  HeroSection,
  NewAndReviewsSection,
  ProductsLibSection,
} from "../sections";

export default function HomepageView() {
  return (
    <section className="container space-y-6">
      <HeroSection />
      <CampainSection />
      <FeaturedBrandsSection />
      <ProductsLibSection />
      <BannerSlot
        page={"homepage"}
        position={"middle"}
        id="under-lib-products"
        className="p-5 grid-cols-1 md:grid-cols-2 md:[&_#image-1-20]:col-span-2 lg:[&_#image-1-20]:col-span-1 lg:grid-cols-[63%_1fr] lg:grid-rows-2 gap-y-2.5 gap-x-3"
      />
      <CategorysSection />
      <GroupsProductSection />
      <BannerSlot
        page={"homepage"}
        position={"middle"}
        id="under-group-products"
      />
      <NewAndReviewsSection />
    </section>
  );
}
