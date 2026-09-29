export const APP_ROUTE = {
  homepage: "/",
  checkout: () => "/checkout",
  page: {
    index: () => `/pages`,
    bySlug: (slug: string) => `${APP_ROUTE.page.index()}/${slug}`,
  },
  account: {
    index: (tab?: string) => `/account${tab ? `?tab=${tab}` : ""}`,
    login: () => `${APP_ROUTE.account.index()}/login`,
    register: () => `${APP_ROUTE.account.index()}/register`,
    profile: () => `${APP_ROUTE.account.index()}/profile`,
    logout: () => `${APP_ROUTE.account.index()}/logout`,
  },
  collection: {
    index: () => `/collections`,
    byCate: (cate: string) => `${APP_ROUTE.collection.index()}/${cate}`,
  },
  product: {
    index: () => `/products`,
    bySlug: (slug: string) => `${APP_ROUTE.product.index()}/${slug}`,
  },
  blog: {
    index: () => "/blogs",

    bySlug: (slug: string, cate?: string) =>
      `${APP_ROUTE.blog.index()}/${cate ? cate + "/" : ""}${slug}`,
  },
  upsell: () => `/v1/upsell`,
  search: (query: string) => `/search?q=${query}`,
};
