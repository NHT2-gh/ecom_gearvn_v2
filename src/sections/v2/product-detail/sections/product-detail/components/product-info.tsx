import Link from "next/link";
import { formatPrice } from "@/utils/format";
import { ProductRating } from "@/types/response";
import { Badge } from "@/components/v2/ui/bagde";
import { ProductDetail } from "@/types/v2/product";
import { Typography } from "@/components/v2/ui/typography";
import { ReviewRatingStar } from "@/components/v2/rating";

interface ProductInfoProps {
  product: ProductDetail;
  rating?: ProductRating;
  currentVariant: ProductDetail["variants"][number];
}

export default function ProductInfo({
  product,
  rating,
  currentVariant,
}: ProductInfoProps) {
  return (
    <div className="w-full space-y-4 p-6">
      <Typography
        level="h4-24"
        aria-label="Product Name"
        fontWeight="semibold"
        className="text-txt-primary"
      >
        {product.name}
      </Typography>

      <div className="flex flex-wrap items-center space-x-2">
        <Typography level="body-14" className="text-txt-secondary">
          No.{product.id}
        </Typography>

        <span className="min-w-[1px] min-h-2.5 bg-stroke-tertiary" />
        {/* {rating && ( */}
        <>
          <Typography
            level="body-14"
            fontWeight="medium"
            className="text-txt-primary"
          >
            {rating?.avg_rating || 0}
          </Typography>

          <ReviewRatingStar rating={rating?.avg_rating || 0} />

          <Link href={"#reviews"}>
            <Typography
              fontWeight="semibold"
              level="body-12"
              className="text-txt-button-link"
            >
              {rating?.total_rating || 0} Đánh giá
            </Typography>
          </Link>

          <span className="min-w-[1px] min-h-2.5 bg-stroke-tertiary" />
        </>
        {/* )} */}
        <Link href={"#specifications"}>
          <Typography
            fontWeight="semibold"
            level="body-12"
            className="text-txt-button-link"
          >
            Thông số kỹ thuật
          </Typography>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Badge variant={"flag"} color="fuchsia">
          Trả góp 0%
        </Badge>
        <Badge variant={"flag"} color="violet">
          Hàng về sớm
        </Badge>
      </div>

      <div>
        <div className="flex items-center gap-2">
          <Typography
            level="h2-32"
            aria-label="Product Price"
            fontWeight="semibold"
            className="text-txt-class-red inline"
          >
            {formatPrice(
              currentVariant.price.discount ?? currentVariant.price.original
            )}
          </Typography>

          {currentVariant.price.discount &&
            Math.max(
              Math.round(
                ((currentVariant.price.original -
                  currentVariant.price.discount) /
                  currentVariant.price.original) *
                  100
              ),
              0
            ) > 0 && (
              <Typography
                level="body-13"
                fontWeight="semibold"
                className="text-txt-class-red inline border border-stroke-primary px-2 py-1 h-fit "
              >
                Giảm{" "}
                {formatPrice(
                  currentVariant.price.original - currentVariant.price.discount
                )}
              </Typography>
            )}
        </div>

        {currentVariant.price.discount && (
          <Typography
            level="h6-18"
            fontWeight="medium"
            color="secondary"
            className="line-through text-txt-secondary"
          >
            {formatPrice(currentVariant.price.original)}
          </Typography>
        )}
      </div>
    </div>
  );
}
