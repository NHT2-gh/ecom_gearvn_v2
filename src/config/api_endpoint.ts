export const API_ENDPOINT = {
  products: {
    collection: {
      index: (slug: string, getInfo: boolean, option?: string) =>
        `/collections/${slug}${getInfo ? ".json" : ""}${
          option ? `/${option}` : ""
        }`,
      reorder: () => `/apps/gvn_search/reorder_collection`,
    },
    detail: {
      info: (slug: string) => `/products/${slug}.js`,
      reviews: () => `/ecom-platform-review`,
      recommendation: () => `/product-recommendation`,
      upsell: {
        products: () => `/v1/upsell`,
        config: () => `/v1/upsell/config`,
      },
    },
    reorder: {
      index: () => `/apps/gvn_search/reorder_collection`,
      nextjsServer: () => `/api/product/reorder`,
    },

    ratings: () => `/ecom-platform-review/ratings`,

    promotion: {
      index: () => "/apps/promotion-enterprise/api",
      giff: () =>
        `${API_ENDPOINT.products.promotion.index()}/gift/list-suggestion`,
      buyAndDiscount: () =>
        `${API_ENDPOINT.products.promotion.index()}/buy-and-discount/list-suggestion`,
      listItemDiscount: () =>
        `${API_ENDPOINT.products.promotion.index()}/buy-and-discount/list-item-buy`,
    },
  },

  blogs: {
    index: () => `/blogs`,
    collection: (slugCategory: string) =>
      `${API_ENDPOINT.blogs.index()}/${slugCategory}`,
    detail: (collection: string, slug: string) =>
      `${API_ENDPOINT.blogs.collection(collection)}/${slug}`,
  },

  search: {
    index: () => `/apps/gvn_search/search_products`,
    nextjsServer: {
      "nextjs-server-search": () => `/api/product/search`,
      "nextjs-server-get-products-info": () => `/api/product/search/infos`,
      "nextjs-server-get-products-rating": () => `/api/product/ratings`,
    },
    searchProductsInfo: () => `/search.js`,
  },

  "build-pc": () => "/api/products",
};
