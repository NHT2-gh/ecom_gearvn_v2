import {
  ButtonsToggle,
  FilterItemConfig,
  InputRange,
} from "@/components/v2/filter/type";
import {
  ProductCardBase,
  ProductInfo,
  UpsellProducts,
  ProductRating,
  ProductCollection,
} from "@/types/product";
import {
  ProductInfoResponse,
  ProductRatingResponse,
  ProductRecommendation,
  SearchProductItem,
  filterAttributesValue,
  filterAttributes,
  UpsellProductResponse,
  ProductInfoItem,
  ProductRating as ManyProductRatingResponse,
} from "@/types/response";
import {
  BasicProduct,
  CampainProduct,
  ProductDetail,
} from "@/types/v2/product";
import { parseSpecs, convertToOldSpecs } from "@/utils/parse-data";

export const productsforGroupAdapter = (
  product: ProductCollection,
): BasicProduct | CampainProduct => {
  return {
    id: product.id.toString(),
    name: product.title,
    slug: product.handle,
    sku: product.variants[0].sku,
    price: {
      original:
        product.variants[0].compare_at_price > 0
          ? product.variants[0].compare_at_price
          : product.variants[0].price,
      discount:
        product.variants[0].compare_at_price > 0
          ? product.variants[0].price
          : undefined,
    },
    featureImage: product.image ? product.image.src : null,
    highlightSpecs:
      parseSpecs(product.tags).length > 0 ? parseSpecs(product.tags) : [],
    stock: {
      quantity: product.variants[0].inventory_quantity,
      saled: product.sole_quantity ? product.sole_quantity : 0,
      status: "in_stock",
    },
  };
};

export const productInfoAdapter = (
  data: ProductInfoResponse,
): ProductDetail => {
  return {
    id: data.id,
    name: data.title,
    desc: data.description,
    slug: data.handle,
    featureImage: data.featured_image,
    medias: data.media,
    tags: data.tags,
    sku: data.variants[0].sku,

    variants: data.variants.map((variant) => {
      return {
        id: variant.id,
        name: variant.title,
        attributes: [],
        price: {
          original:
            variant.compare_at_price > 0
              ? variant.compare_at_price / 100
              : variant.price / 100,
          discount:
            variant.compare_at_price > 0 ? variant.price / 100 : undefined,
        },
        stock: {
          status: variant.inventory_quantity > 0 ? "in_stock" : "out_of_stock",
          quantity: variant.inventory_quantity,
        },
      };
    }),
    publishedAt: new Date(data.published_at),
  };
};

export const productRatingAdapter = (
  data: ProductRatingResponse,
): ProductRating => {
  return {
    rate: data.metadata.avg_rating,
    count: data.metadata.total_rating,
    reviews: data.reviews.map((review) => {
      return {
        id: review.comment_id,
        sku: review.sku,
        rating: review.rating_star,
        content: review.comment,
        created_at: new Date(review.review_date),
        author: {
          name: review.username,
          avatar: undefined,
        },
        images: review.images,
        videos: review.videos,
      };
    }),
  };
};

export const productRecommendationAdapter = (
  data: ProductRecommendation[],
): BasicProduct[] => {
  return data.map((product) => {
    return {
      id: product.id,
      sku: product.sku,
      name: product.title,
      slug: product.urls[0].product_page.split("/").pop() || "",
      price: {
        original: product.price.original,
        discount: product.price.discounted,
      },
      featureImage: product.thumbnail,
      highlightSpecs:
        parseSpecs(product.tags).length > 0
          ? parseSpecs(product.tags)
          : undefined,
    };
  });
};

export const productSearchAdapter = (
  data: SearchProductItem,
): ProductCardBase => {
  return {
    name: data.title,
    product_id: data.id,
    slug: data.handle,
    price: {
      original: data.price,
    },
    rating: {
      rate: 0,
      count: 0,
    },

    image: "/images/gvn-logo.webp",
  };
};

export const CombineProductInfo = (
  info: ProductInfoItem,
  rating?: ManyProductRatingResponse,
  isGift?: boolean,
): BasicProduct => {
  return {
    name: info.title,
    id: info.id.toString(),
    slug: info.handle,
    sku: info.variants[0].sku,
    price: {
      original:
        info.variants[0].compare_at_price > 0
          ? info.variants[0].compare_at_price / 100
          : info.variants[0].price / 100,
      discount:
        info.variants[0].compare_at_price > 0
          ? info.variants[0].price / 100
          : undefined,
    },
    featureImage: info.images[0],
    // gift: isGift || false,
    highlightSpecs:
      parseSpecs(info.tags).length > 0 ? parseSpecs(info.tags) : [],
    rating: {
      total_rating: rating?.total_rating || 0,
      avg_rating: rating?.avg_rating || 0,
      product_sku: info.variants[0].sku,
    },
  };
};

export const filterAttributesAdapter = (
  data: filterAttributes[],
): FilterItemConfig[] => {
  return data.map((item) => {
    // Check if values is a number array with 2 elements (range)
    if (
      Array.isArray(item.values) &&
      item.values.length === 2 &&
      typeof item.values[0] === "number"
    ) {
      return {
        key: item.key,
        label: item.label,
        type: "input-range",
        range: item.values as [number, number],
        options: [],
      } as InputRange;
    } else if (item.values.length > 3) {
      return {
        key: item.key,
        label: item.label,
        type: "checkbox",
        options: (item.values as filterAttributesValue[]).map((val) => ({
          label: val.label,
          value: val.value,
          count: val.count,
        })),
      } as unknown as ButtonsToggle;
    } else {
      return {
        key: item.key,
        label: item.label,
        type: "button-toggle",
        options: (item.values as filterAttributesValue[]).map((val) => ({
          label: val.label,
          value: val.value,
          count: val.count,
        })),
      } as unknown as ButtonsToggle;
    }
  });
};

export const ProductCrosssellAdapter = (
  data: UpsellProductResponse,
): UpsellProducts => {
  return {
    cross_selling: data.cross_selling.map((product) => {
      return {
        name: product.title,
        product_id: product.id,
        slug: product.urls[0].product_page.split("/").pop() || "",
        price: {
          original: product.price.original,
          discount: product.price.discounted,
        },
        rating: {
          rate: product.ratings?.avg_rating || 0,
          count: product.ratings?.total_rating || 0,
        },
        image: product.thumbnail,

        specs:
          parseSpecs(product.tags).length > 0
            ? convertToOldSpecs(parseSpecs(product.tags))
            : undefined,
      };
    }),
    filters: data.filters.map((filter) => {
      if (filter.type === "range") {
        return {
          key: filter.id,
          label: filter.label,
          type: "input-range",
          range: [filter.min || 0, filter.max || 0],
          options: [],
        } as InputRange;
      }
      return {
        key: filter.id,
        label: filter.label,
        type: "buttons-toggle",
        options:
          filter.options?.map((option) => ({
            label: option.label,
            value: option.value,
          })) || [],
      } as unknown as ButtonsToggle;
    }),
    metadata: {
      total: data.metadata.total,
    },
  };
};
