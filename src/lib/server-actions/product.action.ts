import {
  CombineProductInfo,
  filterAttributesAdapter,
} from "@/adapters/product.adapter";
import { FilterValue, convertFilterFormat } from "@/schemas";
import { ProductInfo, SearchProduct } from "@/types/product";
import { searchService } from "@/services/search.api";
import { productService } from "@/services/product.api";
import {
  CollectionInfoResponse,
  ProductCollectionReorder,
  ProductRating,
  PromotionDiscountItem,
  PromotionGiftItem,
} from "@/types/response";
import { promotionService } from "@/services/promotion.api";
import { FilterItemConfig } from "@/components/v2/filter/type";
import { BasicProduct, CampainProduct, ProductDetail } from "@/types/v2/product";

export async function getProductServerAction(slug: string): Promise<{
  productDetail: ProductDetail;
  productGift: PromotionGiftItem[];
  productDiscount: PromotionDiscountItem[];
  productRating?: ProductRating;
}> {
  const productDetail = await productService.getProductDetail(slug);
  const productRating = await searchService.getBatchRating([productDetail.sku]);
  const productGift = await promotionService.getGiffPromotion([
    productDetail.id,
  ]);
  const productDiscount = await promotionService.getDiscountPromotion([
    productDetail.id,
  ]);
  return {
    productDetail,
    productRating: productRating.length > 0 ? productRating[0] : undefined,
    productGift: productGift.data.items,
    productDiscount: productDiscount.data.items,
  };
}

export async function getProductSearchServerAction(
  query: string,
  page: number,
  limit: number,
  filters?: Record<string, FilterValue>
): Promise<SearchProduct> {
  const convertedFilters = convertFilterFormat(filters);

  const productSearch = await searchService.searchProduct(
    query,
    page,
    limit,
    convertedFilters
  );

  if (productSearch.data.length === 0 || productSearch.total === 0) {
    return {
      data: [],
      filterAttributes: [],
      total: 0,
    };
  }

  const ids = [...new Set(productSearch.data.map((p) => p.haravan_id))];
  const skus = [...new Set(productSearch.data.map((p) => p.sku))];
  if (ids.length === 0 || skus.length === 0) {
    return {
      data: [],
      filterAttributes: [],
      total: 0,
    };
  }

  const [infos, ratings, productsPromotion] = await Promise.all([
    searchService.getBatchProductInfo(ids),
    searchService.getBatchRating(skus),
    promotionService.getGiffPromotion(ids),
  ]);

  const fullInfoProductSearch = productSearch.data.map((p) => {
    const info = infos.find((i) => i.id === p.haravan_id);
    const rating = ratings.find((r) => r.product_sku === p.sku);
    const isGift = productsPromotion.data.items.some((item) => {
      return item.list_item_buy.some((buy) => {
        return buy.product_id.toString() === p.haravan_id.toString();
      });
    });
    if (info) {
      const productCardBase = CombineProductInfo(info, rating, isGift);
      return productCardBase;
    } else {
      return null;
    }
  });

  const resultSearch: SearchProduct = {
    data: fullInfoProductSearch.filter((p) => p !== null),
    filterAttributes: filterAttributesAdapter(productSearch.filterAttributes),
    total: productSearch.total,
  };

  return resultSearch;
}

export async function getCollectionDataServerAction(
  slug: string,
  params?: {
    limit?: number;
    page?: number;
    include?: string;
    id?: string;
    item_group_id?: string;
  }
): Promise<{
  collectionInfo: CollectionInfoResponse;
  initData: {
    data: BasicProduct[] | CampainProduct[];
    filtersConfig: FilterItemConfig[];
  };
}> {
  const collectionInfo: CollectionInfoResponse =
    await productService.getCollectionInfo(slug);

  const initData = await productService.getProductsCollection(
    slug,
    {
      limit: params?.limit,
      page: params?.page,
    },
    true
  );
  return { collectionInfo, initData };
}

export async function getProductsCollectionServerAction(
  slug: string,
  page: number,
  limit: number,
  filters?: Record<string, FilterValue>
): Promise<BasicProduct[] | []> {
  // let convertedFilters: { key: string; values: FilterValue }[] | undefined;

  // if (filters) {
  //   const filterResult = validateFilterValues(filters);

  //   if (!filterResult.success) {
  //     throw new Error(filterResult.error.message);
  //   }

  //   convertedFilters = convertFilterFormat(filters);
  // }

  const convertedFilters = convertFilterFormat(filters);

  let productsFiltered: ProductCollectionReorder[] = [];

  const responseReorder = await productService.reorderProductsCollection(
    slug,
    convertedFilters ?? [],
    [],
    page,
    limit
  );

  productsFiltered = responseReorder.data;

  if (responseReorder && productsFiltered.length === 0) {
    return [];
  }

  const productsSku = [...new Set(productsFiltered.map((p) => p.sku))];
  const productsId = [...new Set(productsFiltered.map((p) => p.haravan_id))];

  const [productsInfo, productsRating, productsPromotion] = await Promise.all([
    searchService.getBatchProductInfo(productsId),
    searchService.getBatchRating(productsSku),
    promotionService.getGiffPromotion(productsId),
  ]);

  const products = productsFiltered.map((p) => {
    const info = productsInfo.find(
      (i) => i.id.toString() === p.haravan_id.toString()
    );
    const rating = productsRating.find((r) => r.product_sku === p.sku);
    const isGift = productsPromotion.data.items.some((item) => {
      return item.list_item_buy.some((buy) => {
        return buy.product_id.toString() === p.haravan_id.toString();
      });
    });
    if (info) {
      try {
        const productSearch = CombineProductInfo(info, rating, isGift);
        return productSearch;
      } catch (error) {
        console.error(`CombineProductInfo ${p.handle} error`, error);
        return null;
      }
    }
  });

  const filteredProducts = products.filter(
    (p) => p !== null && p !== undefined
  );

  return filteredProducts;
}
