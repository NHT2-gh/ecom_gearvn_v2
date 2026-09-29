import { APP_ROUTE } from "@/config/app_route";

interface Category {
  link: string;
  name: string;
  iconUrl: string;
}

export const _categorys: Category[] = [
  {
    link: APP_ROUTE.collection.byCate("laptop"),
    name: "Laptop",
    iconUrl:
      "https://file.hstatic.net/200000636033/file/icon1_ce115f32db874a8e9b5af39517176e96.png",
  },
  {
    link: APP_ROUTE.page.bySlug("pc-gvn"),
    name: "PC",
    iconUrl:
      "https://file.hstatic.net/200000636033/file/icon3_5c59c1dc52ec4b81a94a3edba293e895.png",
  },
  {
    link: APP_ROUTE.collection.byCate("cpu-bo-vi-xu-ly"),
    name: "CPU",
    iconUrl:
      "https://file.hstatic.net/200000636033/file/icon6_056974287cd84e0d82eac05809b7e5d5.png",
  },
  {
    link: APP_ROUTE.collection.byCate("vga-card-man-hinh"),
    name: "VGA",
    iconUrl:
      "https://file.hstatic.net/200000722513/file/asus-rog-strix-rtx4090-o24g-gaming-03_c948a4c2a9cf4adcbd522319bfcd4846.jpg",
  },
  {
    link: APP_ROUTE.collection.byCate("man-hinh"),
    name: "Màn hình",
    iconUrl:
      "https://product.hstatic.net/200000722513/product/asus_pg27aqdm_gearvn_53c46bd0ca1f40f1a7abfb0246800081_e341bb95b0724bee845ba8f093678245_master.jpg",
  },
  {
    link: APP_ROUTE.collection.byCate("mainboard-bo-mach-chu"),
    name: "Mainboard",
    iconUrl:
      "https://file.hstatic.net/200000636033/file/icon5_71200675c9e64c32a11730486ba04b32.png",
  },
  {
    link: APP_ROUTE.collection.byCate("case-thung-may-tinh"),
    name: "Case",
    iconUrl:
      "https://file.hstatic.net/200000636033/file/icon7_cdd85eba03974cb99a3941d076bf5d1b.png",
  },
  {
    link: APP_ROUTE.collection.byCate("ram-pc"),
    name: "RAM",
    iconUrl:
      "https://file.hstatic.net/200000636033/file/icon13_708c31c3ba56430dbec3f4cc7e1b14f0.png",
  },
  {
    link: APP_ROUTE.collection.byCate("ssd-o-cung-the-ran"),
    name: "Ổ cứng",
    iconUrl:
      "https://file.hstatic.net/200000636033/file/icon11_2f0ea4c77ae3482f906591cec8f24cea.png",
  },
  {
    link: APP_ROUTE.collection.byCate("thiet-bi-van-phong"),
    name: "Thiết bị VP",
    iconUrl:
      "https://file.hstatic.net/200000636033/file/icon20_d17b4a1a0d884dc49a1212256531c3f2.png",
  },
  {
    link: APP_ROUTE.collection.byCate("phu-kien"),
    name: "Phụ kiện",
    iconUrl:
      "https://file.hstatic.net/200000636033/file/icon20_d17b4a1a0d884dc49a1212256531c3f2.png",
  },
  {
    link: APP_ROUTE.collection.byCate("ban-phim-may-tinh"),
    name: "Bàn phím",
    iconUrl:
      "https://file.hstatic.net/200000722513/file/ban_phim_93a4d3cefd8345dfac23829818a3c5d4.jpg",
  },
  {
    link: APP_ROUTE.page.bySlug("tai-nghe-may-tinh"),
    name: "Tai nghe",
    iconUrl:
      "https://file.hstatic.net/200000722513/file/tai_nghe_ed3b4f52172f40929e1d3ab493099b73.jpg",
  },
  {
    link: APP_ROUTE.page.bySlug("chuot-may-tinh"),
    name: "Chuột",
    iconUrl:
      "https://file.hstatic.net/200000722513/file/chuot_aa348bf0177b4795a39ab66d51e62ed7.jpg",
  },
  {
    link: APP_ROUTE.page.bySlug("ghe-gaming-gia-re-gearvn"),
    name: "Ghế",
    iconUrl:
      "https://file.hstatic.net/200000722513/file/ghe_e1ff4e3493f14aa982676b3c4574135e.jpg",
  },
  {
    link: APP_ROUTE.collection.byCate("loa"),
    name: "Loa",
    iconUrl:
      "https://file.hstatic.net/200000636033/file/icon10_bfdf42150dbf45cfbcdf990b26f59691.png",
  },
  {
    link: APP_ROUTE.collection.byCate("fan-rgb-tan-nhiet-pc"),
    name: "Tản nhiệt",
    iconUrl:
      "https://file.hstatic.net/200000636033/file/icon8_8f7b3fe2e8fb450b805857be9bb14edc.png",
  },
  {
    link: APP_ROUTE.collection.byCate("sac-du-phong"),
    name: "Sạc DP",
    iconUrl:
      "https://file.hstatic.net/200000722513/file/gearvn-icon-category-sac-du-phong.png",
  },
  {
    link: APP_ROUTE.collection.byCate("psu-nguon-may-tinh"),
    name: "Nguồn",
    iconUrl:
      "https://file.hstatic.net/200000636033/file/icon9_ffd172460eb24c4d8bab6a7cd9a8cc46.png",
  },
  {
    link: APP_ROUTE.collection.byCate("may-choi-game-cam-tay-asus"),
    name: "Console",
    iconUrl:
      "https://file.hstatic.net/200000636033/file/icon18_720958e90b7d4fa7ae803f8f4d2fe56b.png",
  },
];

export const _categorysByGroup = {
  laptopOffice: ["asus", "msi", "lenovo", "dell", "lg", "acer"],
  laptopGaming: ["asus", "acer", "msi", "lenovo", "gigabyte", "dell"],
  pc: ["pc i3", "pc i5", "pc i7", "pc i9", "pc r3", "pc r5", "pc r7", "pc r9"],
  mouseGaming: ["razer", "logitech", "corsair", "steelseries", "hyperx"],
  keyboardGaming: ["akko", "asus", "razer", "logitech", "leopold", "dareu"],
  screenGaming: [
    "lg",
    "asus",
    "samsung",
    "gigabyte",
    "viewsonic",
    "adc",
    "acer",
    "hkc",
  ],
};
