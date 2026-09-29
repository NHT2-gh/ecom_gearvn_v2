import { ProductCardBase } from "@/types/product";

const baseProduct: ProductCardBase = {
  name: "Laptop gaming ASUS ROG Strix G16 G615JMR S5155W",
  slug: "laptop-gaming-asus-rog-strix-g16-g615jmr-s5155w",
  product_id: "123",
  price: {
    original: 46990000,
    discount: 41890000,
  },
  rating: {
    rate: 4.5,
    count: 100,
  },
  image:
    "https://product.hstatic.net/200000722513/product/rog_strix_g16_2025_g615_3_d66ab4_cd80734735b14547adeb6ac31bee983c_grande.png",
  specs: [
    { key: "cpu", name: "i7-14650HX" },
    { key: "vga", name: "RTX 5080" },
    { key: "ram", name: "32GB" },
    { key: "ssd", name: "1TB" },
    { key: "screen", name: "16 inch WQXGA" },
  ],
  gift: true,
};

export const _groupProductPC: ProductCardBase[] = [
  {
    name: "PC GVN AMD R7-9800x3D/ VGA RTX 5080 (Powered by MSI)",
    slug: "pc-gvn-amd-r7-9800x3d-vga-rtx-5080-powered-by-msi",
    product_id: "123",
    price: {
      original: 1000000,
      discount: 500000,
    },
    rating: {
      rate: 4.5,
      count: 100,
    },
    customBackground:
      "https://file.hstatic.net/200000722513/file/frame-flash-sale-10h.png",
    image:
      "https://product.hstatic.net/200000722513/product/pc_gvn__i7-_4070_-_3_0ea0d3f21b41464991ac7134a04ac5e4_grande.png",
    specs: [
      {
        key: "cpu",
        name: "AMD R7-9800x3D",
      },
      {
        key: "ram",
        name: "16GB",
      },
      {
        key: "ssd",
        name: "1TB",
      },
      {
        key: "main",
        name: "1TB",
      },
      {
        key: "vga",
        name: "1TB",
      },
    ],
    gift: false,
  },
  {
    name: "PC GVN AMD R7-9800x3D/ VGA RTX 5080 (Powered by MSI)",
    slug: "pc-gvn-amd-r7-9800x3d-vga-rtx-5080-powered-by-msi",
    product_id: "321",
    price: {
      original: 1000000,
      discount: 500000,
    },
    rating: {
      rate: 4.5,
      count: 100,
    },
    customBackground:
      "https://file.hstatic.net/200000722513/file/frame-flash-sale-10h.png",
    image:
      "https://product.hstatic.net/200000722513/product/pc_gvn__i7-_4070_-_3_0ea0d3f21b41464991ac7134a04ac5e4_grande.png",
    specs: [
      {
        key: "cpu",
        name: "AMD R7-9800x3D",
      },
      {
        key: "ram",
        name: "16GB",
      },
      {
        key: "ssd",
        name: "1TB",
      },
      {
        key: "main",
        name: "1TB",
      },
      {
        key: "vga",
        name: "1TB",
      },
    ],
    gift: false,
  },
];

// Tạo 10 sản phẩm clone với product_id khác nhau
// export const _groupProductLaptop: ProductCardBase[] = Array.from(
//   { length: 10 },
//   (_, i) => ({
//     ...baseProduct,
//     product_id: `${baseProduct.product_id}_${i + 1}`,
//   }),
// );

// export const _groupProductMouse: ProductCardBase[] = [
//   {
//     name: 'Chuột Razer DeathAdder Essential (RZ01-03850100-R3M1)',
//     slug: 'chuot-razer-deathadder-essential',
//     product_id: '123',
//     price: {
//       original: 790000,
//       discount: 400000,
//     },
//     rating: {
//       rate: 4.5,
//       count: 100,
//     },
//     image:
//       'https://product.hstatic.net/200000722513/product/thumbchuot_7445abea69bf461e881eeba2b6cbbd8d_grande.jpg',
//     specs: [
//       {
//         key: 'pin',
//         name: '2000mAh',
//       },
//       {
//         key: 'connect',
//         name: 'Bluetooth 2.4G',
//       },
//       {
//         key: 'led',
//         name: 'RGB',
//       },
//     ],
//     gift: false,
//     bestSeller: true,
//   },
// ];

// export const _groupProductKeyboard: ProductCardBase[] = [
//   {
//     name: 'Bàn phím ASUS ROG Falcata Gaming',
//     slug: 'ban-phim-asus-rog-falcata-gaming',
//     product_id: '123',
//     price: {
//       original: 7900000,
//       discount: 7490000,
//     },
//     rating: {
//       rate: 4.5,
//       count: 100,
//     },
//     image:
//       'https://cdn.hstatic.net/products/200000722513/imgi_2_h732_e24efa92140b47aab8a6629a0a43596c_grande.png',

//     gift: true,
//   },
// ];

export const _groupProductScreen: ProductCardBase[] = [
  {
    name: "Màn hình ASUS VZ279HG 27 IPS 120Hz viền mỏng",
    slug: "man-hinh-asus-vz279hg-27-ips-120hz-vien-mong",
    product_id: "123",
    price: {
      original: 3790000,
      discount: 2890000,
    },
    rating: {
      rate: 4.5,
      count: 100,
    },
    specs: [
      {
        key: "screen",
        name: "27 inch",
      },
      {
        key: "hz",
        name: "120Hz",
      },
      {
        key: "resolution",
        name: "Full HD (1920 x 1080)",
      },
      {
        key: "plane",
        name: "IPS",
      },
    ],
    image:
      "https://cdn.hstatic.net/products/200000722513/aoc_q27g40e_gearvn_a88df3095a384461803faf087b75ff31_grande.jpg",
    gift: false,
  },
];

// ----- LAPTOP -----
export const _groupProductsLaptop = {
  name: [
    "Laptop gaming Acer Nitro V ProPanel ANV15 41 R9M1",
    "Laptop gaming ASUS ROG Strix G16 G615JMR S5155W",
    "Laptop gaming MSI Katana 15 B13VE 654VN i7",
    "Laptop gaming Lenovo Legion 5 15ACH6H R7 5800H",
    "Laptop gaming Dell G15 5520 i7 12700H",
    "Laptop văn phòng HP Pavilion 15 eg2083TU i5 1235U",
    "Laptop văn phòng Dell Inspiron N3501 i5 1135G7",
    "Laptop văn phòng Lenovo IdeaPad 3 15ITL6 i5 1155G7",
    "Laptop văn phòng ASUS VivoBook X515EA i5 1135G7",
  ],
  image: [
    "https://cdn.hstatic.net/products/200000722513/acer_nitro_v_15_propanel_anv15-41_-_nh_i_di_n_-_a_nh.qpgsv.002-b1_0f64b6a169c04146b12578499c9b7927_master.jpg",
    "https://cdn.hstatic.net/products/200000722513/screenshot_677fb01fa7d544ed8f0be2cb8ff09924_grande.png",
    "https://cdn.hstatic.net/products/200000722513/r-nitro-v-15-anv15-52-non-fingerprint-with-backlit-on-wp-logo-black-01_27ffafaa54d04e0e8c404120f3cc808d_grande.png",
    "https://product.hstatic.net/200000722513/product/rog_strix_g16_2025_g615_3_d66ab4_cd80734735b14547adeb6ac31bee983c_grande.png",
    "https://product.hstatic.net/200000722513/product/676vn_21da8c4630014f808b321b3d32118291_69f68ad8d3be44b385bb3da80ec4a9ee_grande.png",
    "https://cdn.hstatic.net/products/200000722513/ava-tr_ng_55aa8d4e4097471dac9cdd881840d92a_grande.png",
    "https://cdn.hstatic.net/products/200000722513/msi_modern_14_f13mg_bac_01_66ddd_4e8c1cfbdc6e42309ebb2a32372c638d_grande.png",
    "https://cdn.hstatic.net/products/200000722513/52713_laptop_acer_aspire_lite_15__1__91a3eab70cd1440bbed70f090d059c26_grande.png",
    "https://cdn.hstatic.net/products/200000722513/text_ng_n_1__9_124_2f8f5251c69f4e4286336ca40fd1c515_grande.png",
  ],
};

// Tạo 10 sản phẩm clone với product_id khác nhau và random name và image từ _groupProductsLaptop
export const _groupProductLaptop = Array.from({ length: 10 }, (_, i) => ({
  ...baseProduct,
  product_id: `${baseProduct.product_id}_mouse_${i + 1}`,
  name: _groupProductsLaptop.name[
    Math.floor(Math.random() * _groupProductsLaptop.name.length)
  ],
  image:
    _groupProductsLaptop.image[
      Math.floor(Math.random() * _groupProductsLaptop.image.length)
    ],
}));

// ----- MOUSE -----
export const _groupProductsMouse = {
  name: [
    "Chuột Razer DeathAdder Essential (RZ01-03850100-R3M1)",
    "Chuột không dây Logitech M221 Silent",
    "Chuột không dây Logitech M331 Silent Plus",
    "Chuột không dây Logitech M190",
    "Chuột không dây Logitech M235",
    "Chuột không dây HP X3000",
    "Chuột không dây HP X3500",
    "Chuột không dây HP Z3700",
    "Chuột không dây HP Z5000",
  ],
  image: [
    "https://cdn.hstatic.net/products/200000722513/thumbchuot_7445abea69bf461e881eeba2b6cbbd8d_grande.jpg",
    "https://cdn.hstatic.net/products/200000722513/rog-strix-impact-iii-wireless-01_10840e27a1e3424a968ad1aa1164707e_grande.jpg",
    "https://cdn.hstatic.net/products/200000722513/imgi_10_h732_7782aab4e4804d36968b35a46a8a1b37_grande.png",
    "https://product.hstatic.net/200000722513/product/rtehosjd_7cf8331e76c04cb59e02a8f763ae3bb8_grande.png",
    "https://product.hstatic.net/200000722513/product/10001_01736316d2b443d0838e5a0741434420_grande.png",
    "https://product.hstatic.net/200000722513/product/tuf-gaming-m3-gen-ii-01__1__905473efccda4d1b89bc64a03cf8f206_large_cb7ff5d9ebbc46688ce53d7b25e6df92_grande.jpg",
    "https://product.hstatic.net/200000722513/product/m331n_graphite_top_91cef3d27a5240fbb196cd44c2c18914_grande.png",
    "https://product.hstatic.net/200000722513/product/h-g304-lightspeed-wireless-white-1000_e28318985b5049099c4e8381695e810f_782b9a4494994a2ea98cf9e699e35200_grande.jpg",
    "https://product.hstatic.net/200000722513/product/logitech-g102-lightsync-rgb-black-1_bf4f5774229c4a0f81b8e8a2feebe4d8_aeb4ae49ee844c3e9d315883d4e482d4_grande.jpg",
  ],
};

export const _groupProductMouse = Array.from({ length: 10 }, (_, i) => ({
  ...baseProduct,
  product_id: `${baseProduct.product_id}_mouse_${i + 1}`,
  name: _groupProductsMouse.name[
    Math.floor(Math.random() * _groupProductsMouse.name.length)
  ],
  image:
    _groupProductsMouse.image[
      Math.floor(Math.random() * _groupProductsMouse.image.length)
    ],
}));

export const _groupProductsScreen = {
  name: [
    "Màn hình ASUS ProArt PA32UCX",
    "Màn hình Dell UltraSharp U2720Q",
    "Màn hình LG 27UK850-W",
    "Màn hình BenQ PD3220U",
    "Màn hình Samsung Odyssey G7",
    "Màn hình Acer Predator X27",
    "Màn hình ViewSonic VP2785-4K",
    "Màn hình EIZO ColorEdge CG319X",
    "Màn hình Philips 328P6VJEB",
  ],
  image: [
    "https://product.hstatic.net/200000722513/product/asus_vg259q3a_gearvn_0157239e435843259bd118fab6ab39da_medium.jpg",
    "https://product.hstatic.net/200000722513/product/aoc_q27g40e_gearvn_a88df3095a384461803faf087b75ff31_grande.jpg",
    "https://product.hstatic.net/200000722513/product/viewsonic_va2215-h_gearvn_032d5d53effc48a2887c2879e6bc5cff_dec3d4588289443ca5c2a2b5ce995e02_medium.jpg",
    "https://product.hstatic.net/200000722513/product/1_6bf24e36cbd34fd990728781a18e1653_befa433a45b84594bf6aa5a5c8526365_medium.jpg",
    "https://product.hstatic.net/200000722513/product/large01_c6adf3377eb1458d9b04ad0655dd24ec_medium.jpg",
    "https://product.hstatic.net/200000722513/product/giga_g25f2_gearvn_60630e2345514c788bd33d80077579c2_medium.jpg",
    "https://product.hstatic.net/200000722513/product/asus_xg259cms_gearvn_6c2308acee8a467d96ea13b8ac20c5f8_medium.jpg",
    "https://product.hstatic.net/200000722513/product/msi_mag_255pxf_gearvn_ba67f26790de4f1e873619bbe5ba750c_medium.jpg",
    "https://cdn.hstatic.net/products/200000722513/philips_27m2n3500pf_gearvn_509ccabd60dc4a908856513505c4fc76_medium.jpg",
  ],
};

export const _groupProductKeyboard = Array.from({ length: 10 }, (_, i) => ({
  ...baseProduct,
  product_id: `${baseProduct.product_id}_screen_${i + 1}`,
  name: _groupProductsScreen.name[
    Math.floor(Math.random() * _groupProductsScreen.name.length)
  ],
  image:
    _groupProductsScreen.image[
      Math.floor(Math.random() * _groupProductsScreen.image.length)
    ],
}));

export const _groupKeyboard = {
  name: [
    "Bàn phím ASUS ROG Falcata Gaming",
    "Bàn phím cơ Logitech G Pro X",
    "Bàn phím cơ Razer BlackWidow V3 Pro",
    "Bàn phím cơ Corsair K95 RGB Platinum",
    "Bàn phím cơ SteelSeries Apex Pro",
    "Bàn phím cơ HyperX Alloy Origins",
    "Bàn phím cơ Ducky One 2 Mini",
    "Bàn phím cơ Keychron K6",
    "Bàn phím cơ Anne Pro 2",
  ],
  image: [
    "https://cdn.hstatic.net/products/200000722513/imgi_2_h732_e24efa92140b47aab8a6629a0a43596c_grande.png",
  ],
};
