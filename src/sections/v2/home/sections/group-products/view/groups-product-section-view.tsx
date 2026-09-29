import GroupLayout from "@/components/v2/common/layout/group-layout";
import { productService } from "@/services/product.api";
import CarouselProducts from "../components/carousel-products";

export default async function GroupsProductSectionView() {
  const [pc_products_group, laptop_gaming_group, mouses_gaming_group] =
    await Promise.all([
      productService.getProductsCollection("pc-gvn"),
      productService.getProductsCollection("laptop-gaming-ban-chay"),
      productService.getProductsCollection("chuot-may-tinh"),
    ]);

  return (
    <div className="max-w-full space-y-6">
      <GroupLayout
        groupTitle="Chuột bán chạy"
        featureImage="/images/groups-product-feature-image/PC GVN.webp"
        categorys={{
          key: "category",
          label: "Danh mục",
          type: "button-toggle",
          options: [
            { label: "Logitech", value: "logitech" },
            { label: "Razer", value: "razer" },
            { label: "Corsair", value: "corsair" },
            { label: "Asus", value: "asus" },
            { label: "Dare-U", value: "dare-u" },
            { label: "Rappo", value: "rappo" },
          ],
        }}
      >
        <CarouselProducts products={mouses_gaming_group?.data || []} />
      </GroupLayout>

      <GroupLayout
        groupTitle="PC bán chạy"
        featureImage="/images/groups-product-feature-image/PC GVN-2.webp"
        categorys={{
          key: "category",
          label: "Danh mục",
          type: "button-toggle",
          options: [
            { label: "PC I3", value: "pc-i3" },
            { label: "PC I5", value: "pc-i5" },
            { label: "PC I7", value: "pc-i7" },
            { label: "PC I9", value: "pc-i9" },
            { label: "PC R3", value: "pc-r3" },
            { label: "PC R5", value: "pc-r5" },
            { label: "PC R7", value: "pc-r7" },
            { label: "PC R9", value: "pc-r9" },
          ],
        }}
      >
        <CarouselProducts products={pc_products_group?.data || []} />
      </GroupLayout>

      <GroupLayout
        groupTitle="Laptop gaming bán chạy"
        featureImage="/images/groups-product-feature-image/PC GVN-3.webp"
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
        <CarouselProducts products={laptop_gaming_group?.data || []} />
      </GroupLayout>
    </div>
  );
}
