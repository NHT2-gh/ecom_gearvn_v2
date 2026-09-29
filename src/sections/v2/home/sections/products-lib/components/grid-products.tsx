import { Card } from "@/components/v2/card";
import { Badge } from "@/components/v2/ui/bagde";
import { Checkbox } from "@/components/v2/ui/input";
import { LibProduct } from "@/types/v2/product";

interface GridProducts {
  products: LibProduct[];
}
export default function GridProducts({ products }: GridProducts) {
  return (
    <div
      role="list"
      aria-label="Products list"
      className="w-full grid grid-cols-2 gap-2 justify-center md:grid-cols-[repeat(auto-fill,minmax(217px,1fr))] md:justify-between gap-y-6"
    >
      {Array.from({ length: 12 }, (_, i) => products[i % products.length]).map(
        (product, i) => (
          <Card
            role="listitem"
            aria-label={product.name}
            key={product.id + "_" + i}
            product={product}
            custom={{
              hearderTag: {
                tagType: product.headerTagType ? product.headerTagType : "none",
              },
            }}
            actionButtons={{
              onAddToCart: () => {
                console.log("Add to cart:", product.name);
              },
              onViewDetail: () => {
                console.log("View detail:", product.name);
              },
            }}
            className="mx-auto"
          >
            <div className="max-w-full overflow-hidden flex items-center gap-2">
              {product.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant={"flag"}
                  size="lg"
                  color={index === 0 ? "fuchsia" : "violet"}
                  className="flex-1"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <Checkbox
              className="order-4"
              label="So sánh sản phẩm"
              onChange={(e) => {
                console.log(
                  "selected product for comparison",
                  product.slug,
                  e.target.checked,
                );
              }}
            />
          </Card>
        ),
      )}
    </div>
  );
}
