import GroupLayout from "@/components/v2/common/layout/group-layout";
import CarouselProducts from "@/sections/v2/home/sections/group-products/components/carousel-products";
import { productService } from "@/services/product.api";

export default async function ProductsRecommendationSection() {
  const productsRecommendation = await productService.getProductsCollection(
    "man-hinh-duoi-5-trieu"
  );

  return (
    <section aria-label="Product recommendations" className="container">
      <GroupLayout
        groupTitle="Gợi ý cho bạn"
        featureImage="/images/groups-product-feature-image/PC GVN-4.webp"
        categorys={{
          key: "category",
          label: "Danh mục",
          type: "button-toggle",
          options: [
            { label: "ASUS", value: "asus" },
            { label: "MSI", value: "msi" },
            { label: "LENOVO", value: "lenovo" },
            { label: "DELL", value: "dell" },
            { label: "LG", value: "lg" },
            { label: "ACER", value: "acer" },
          ],
        }}
      >
        <CarouselProducts products={productsRecommendation?.data || []} />
      </GroupLayout>
    </section>
  );
}
