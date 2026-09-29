export const _viewedProducts = [
  ...Array.from({ length: 10 }).map((index) => ({
    product_id: index,
    sku: index,
    name: `Laptop MSI Modern 14 F13MG ${index}`,
    price: {
      original: 14990000,
      discount: 13490000,
    },
    image:
      "https://cdn.hstatic.net/products/200000722513/msi_modern_14_f13mg_bac_01_66ddd_4e8c1cfbdc6e42309ebb2a32372c638d_large.png",
  })),
];
