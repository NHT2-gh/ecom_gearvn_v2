import { APP_ROUTE } from "@/config/app_route";
import { IconKey } from "@/utils/icon-map";

export interface NavContent {
  key: string;
  title: string;
  link?: string;
  icon: IconKey;
  items?: NavItem[];
}

export interface NavItem {
  key: string;
  title: string;
  link: string;
  level?: number;
  query?: string[];
  items?: NavItem[];
}

export const _megaMenu: NavContent[] = [
  {
    key: "laptop",
    title: "Laptop",
    link: APP_ROUTE.page.bySlug("laptop-van-phong"),
    icon: "menu_laptop",
    items: [
      {
        key: "thuong-hieu-1",
        title: "Thương hiệu",
        link: APP_ROUTE.collection.byCate("laptop"),
        level: 1,
        items: [
          {
            key: "asus",
            title: "ASUS",
            link: APP_ROUTE.collection.byCate(
              "laptop-asus-hoc-tap-va-lam-viec"
            ),
            level: 2,
          },
          {
            key: "acer",
            title: "ACER",
            link: APP_ROUTE.collection.byCate(
              "laptop-acer-hoc-tap-va-lam-viec"
            ),
            level: 2,
          },
          {
            key: "msi",
            title: "MSI",
            link: APP_ROUTE.collection.byCate("laptop-msi-hoc-tap-va-lam-viec"),
            level: 2,
          },
          {
            key: "lenovo",
            title: "LENOVO",
            link: APP_ROUTE.collection.byCate(
              "laptop-lenovo-hoc-tap-va-lam-viec"
            ),
            level: 2,
          },
          {
            key: "dell",
            title: "DELL",
            link: APP_ROUTE.collection.byCate(
              "laptop-dell-hoc-tap-va-lam-viec"
            ),
            level: 2,
          },
          {
            key: "hp-pavilion",
            title: "HP - Pavilion",
            link: APP_ROUTE.collection.byCate("laptop-hp-pavilion"),
            level: 2,
          },
          {
            key: "lg-gram",
            title: "LG - Gram",
            link: APP_ROUTE.collection.byCate("laptop-lg-gram"),
            level: 2,
          },
        ],
      },
      {
        key: "gia-ban",
        title: "Giá bán",
        link: APP_ROUTE.collection.byCate("laptop"),
        level: 1,
        items: [
          {
            key: "d-i-15-tri-u",
            title: "Dưới 15 triệu",
            link: APP_ROUTE.collection.byCate(
              "laptop-hoc-tap-va-lam-viec-duoi-15tr"
            ),
            level: 2,
          },
          {
            key: "t-15-n-20-tri-u",
            title: "Từ 15 đến 20 triệu",
            link: APP_ROUTE.collection.byCate(
              "laptop-hoc-tap-va-lam-viec-tu-15tr-den-20tr"
            ),
            level: 2,
          },
          {
            key: "tr-n-20-tri-u",
            title: "Trên 20 triệu",
            link: APP_ROUTE.collection.byCate(
              "laptop-hoc-tap-va-lam-viec-tren-20-trieu"
            ),
            level: 2,
          },
        ],
      },
      {
        key: "cpu-intel-amd",
        title: "CPU Intel - AMD",
        link: APP_ROUTE.collection.byCate("laptop"),
        level: 1,
        items: [
          {
            key: "intel-core-i3",
            title: "Intel Core i3",
            link: APP_ROUTE.collection.byCate("laptop-intel-core-i3"),
            level: 2,
          },
          {
            key: "intel-core-i5",
            title: "Intel Core i5",
            link: APP_ROUTE.collection.byCate("laptop-intel-core-i5"),
            level: 2,
          },
          {
            key: "intel-core-i7",
            title: "Intel Core i7",
            link: APP_ROUTE.collection.byCate("laptop-intel-core-i7"),
            level: 2,
          },
          {
            key: "amd-ryzen",
            title: "AMD Ryzen",
            link: APP_ROUTE.collection.byCate("laptop-cpu-amd-ryzen"),
            level: 2,
          },
        ],
      },
      {
        key: "nhu-cau-su-dung",
        title: "Nhu cầu sử dụng",
        link: APP_ROUTE.collection.byCate("laptop"),
        level: 1,
        items: [
          {
            key: "-h-a-studio",
            title: "Đồ họa - Studio",
            link: APP_ROUTE.collection.byCate("laptop-do-hoa"),
            level: 2,
          },
          {
            key: "h-c-sinh-sinh-vi-n",
            title: "Học sinh - Sinh viên",
            link: APP_ROUTE.collection.byCate("laptop-hoc-sinh-sinh-vien"),
            level: 2,
          },
          {
            key: "m-ng-nh-cao-c-p",
            title: "Mỏng nhẹ cao cấp",
            link: APP_ROUTE.collection.byCate("laptop-mong-nhe-cao-cap"),
            level: 2,
          },
        ],
      },
      {
        key: "linh-kien-phu-kien-laptop",
        title: "Linh phụ kiện Laptop",
        link: APP_ROUTE.collection.byCate("linh-kien-phu-kien-laptop"),
        level: 1,
        items: [
          {
            key: "ram-laptop",
            title: "Ram laptop",
            link: APP_ROUTE.collection.byCate("ram-laptop"),
            level: 2,
          },
          {
            key: "ssd-laptop",
            title: "SSD laptop",
            link: APP_ROUTE.collection.byCate("ssd-laptop"),
            level: 2,
          },
          {
            key: "-c-ng-di-ng",
            title: "Ổ cứng di động",
            link: APP_ROUTE.collection.byCate("o-cung-di-dong-hdd-box"),
            level: 2,
          },
        ],
      },
      {
        key: "laptop-asus",
        title: "Laptop ASUS",
        link: APP_ROUTE.collection.byCate("laptop-asus-hoc-tap-va-lam-viec"),
        level: 1,
        items: [
          {
            key: "asus-oled-series",
            title: "ASUS OLED Series",
            link: APP_ROUTE.collection.byCate("laptop-asus-oled"),
            level: 2,
          },
          {
            key: "vivobook-series",
            title: "Vivobook Series",
            link: APP_ROUTE.collection.byCate("laptop-asus-vivobook-series"),
            level: 2,
          },
          {
            key: "zenbook-series",
            title: "Zenbook Series",
            link: APP_ROUTE.collection.byCate("laptop-asus-zenbook-series"),
            level: 2,
          },
        ],
      },
      {
        key: "laptop-acer",
        title: "Laptop ACER",
        link: APP_ROUTE.collection.byCate("laptop-acer-hoc-tap-va-lam-viec"),
        level: 1,
        items: [
          {
            key: "aspire-series",
            title: "Aspire Series",
            link: APP_ROUTE.collection.byCate("laptop-acer-aspire-series"),
            level: 2,
          },
          {
            key: "swift-series",
            title: "Swift Series",
            link: APP_ROUTE.collection.byCate("acer-swift-series"),
            level: 2,
          },
        ],
      },
      {
        key: "laptop-msi",
        title: "Laptop MSI",
        link: APP_ROUTE.collection.byCate("laptop-msi-hoc-tap-va-lam-viec"),
        level: 1,
        items: [
          {
            key: "modern-series",
            title: "Modern Series",
            link: APP_ROUTE.collection.byCate("msi-modern-14-series"),
            level: 2,
          },
          {
            key: "prestige-series",
            title: "Prestige Series",
            link: APP_ROUTE.collection.byCate("prestige-series"),
            level: 2,
          },
        ],
      },
      {
        key: "laptop-lenovo",
        title: "Laptop Lenovo",
        link: APP_ROUTE.collection.byCate("laptop-lenovo-hoc-tap-va-lam-viec"),
        level: 1,
        items: [
          {
            key: "thinkbook-series",
            title: "Thinkbook Series",
            link: APP_ROUTE.collection.byCate("lenovo-thinkbook"),
            level: 2,
          },
          {
            key: "ideapad-series",
            title: "Ideapad Series",
            link: APP_ROUTE.collection.byCate("laptop-ideapad-pro"),
            level: 2,
          },
          {
            key: "thinkpad-series",
            title: "Thinkpad Series",
            link: APP_ROUTE.collection.byCate("lenovo-thinkpad"),
            level: 2,
          },
          {
            key: "yoga-series",
            title: "Yoga Series",
            link: APP_ROUTE.collection.byCate("laptop-lenovo-yoga-series"),
            level: 2,
          },
        ],
      },
      {
        key: "laptop-dell",
        title: "Laptop Dell",
        link: APP_ROUTE.collection.byCate("laptop-dell-hoc-tap-va-lam-viec"),
        level: 1,
        items: [
          {
            key: "inspiron-series",
            title: "Inspiron Series",
            link: APP_ROUTE.collection.byCate("laptop-dell-inspiron-series"),
            level: 2,
          },
          {
            key: "vostro-series",
            title: "Vostro Series",
            link: APP_ROUTE.collection.byCate("laptop-dell-vostro-series"),
            level: 2,
          },
          {
            key: "latitude-series",
            title: "Latitude Series",
            link: APP_ROUTE.collection.byCate("laptop-dell-latitude-series"),
            level: 2,
          },
          {
            key: "xps-series",
            title: "XPS Series",
            link: APP_ROUTE.collection.byCate("laptop-dell-xps-chinh-hang"),
            level: 2,
          },
        ],
      },
      {
        key: "laptop-ai",
        title: "Laptop AI",
        link: APP_ROUTE.collection.byCate("laptop-ai"),
        level: 1,
      },
    ],
  },
  {
    key: "laptop-gaming",
    title: "Laptop Gaming",
    link: APP_ROUTE.page.bySlug("laptop-gaming"),
    icon: "menu_laptopGaming",
    items: [
      {
        key: "thuong-hieu-2",
        title: "Thương hiệu",
        link: APP_ROUTE.collection.byCate("laptop"),
        level: 1,
        items: [
          {
            key: "acer-predator",
            title: "ACER / PREDATOR",
            link: APP_ROUTE.collection.byCate("laptop-gaming-acer"),
            level: 2,
          },
          {
            key: "asus-rog",
            title: "ASUS / ROG",
            link: APP_ROUTE.collection.byCate("laptop-gaming-asus"),
            level: 2,
          },
          {
            key: "msi",
            title: "MSI",
            link: APP_ROUTE.collection.byCate("laptop-msi-gaming"),
            level: 2,
          },
          {
            key: "lenovo",
            title: "LENOVO",
            link: APP_ROUTE.collection.byCate("laptop-gaming-lenovo"),
            level: 2,
          },
          {
            key: "dell",
            title: "DELL",
            link: APP_ROUTE.collection.byCate("laptop-gaming-dell"),
            level: 2,
          },
          {
            key: "gigabyte-aorus",
            title: "GIGABYTE / AORUS",
            link: APP_ROUTE.collection.byCate("laptop-gaming-gigabyte"),
            level: 2,
          },
          {
            key: "hp",
            title: "HP",
            link: APP_ROUTE.collection.byCate("laptop-gaming-hp"),
            level: 2,
          },
        ],
      },
      {
        key: "gia-ban",
        title: "Giá bán",
        link: APP_ROUTE.collection.byCate("laptop"),
        level: 1,
        items: [
          {
            key: "d-i-20-tri-u",
            title: "Dưới 20 triệu",
            link: APP_ROUTE.collection.byCate(
              "laptop-gaming-gia-duoi-20-trieu"
            ),
            level: 2,
          },
          {
            key: "t-20-n-25-tri-u",
            title: "Từ 20 đến 25 triệu",
            link: APP_ROUTE.collection.byCate(
              "laptop-gaming-gia-tu-20-den-25-trieu"
            ),
            level: 2,
          },
          {
            key: "t-25-n-30-tri-u",
            title: "Từ 25 đến 30 triệu",
            link: APP_ROUTE.collection.byCate(
              "laptop-gaming-gia-tu-25-den-35-trieu"
            ),
            level: 2,
          },
          {
            key: "tr-n-30-tri-u",
            title: "Trên 30 triệu",
            link: APP_ROUTE.collection.byCate("laptop-gaming-tren-35-trieu"),
            level: 2,
          },
          {
            key: "gaming-rtx-50-series",
            title: "Gaming RTX 50 Series",
            link: APP_ROUTE.collection.byCate("laptop-gaming-rtx-50-series"),
            level: 2,
          },
        ],
      },
      {
        key: "acer-predator",
        title: "ACER | PREDATOR",
        link: APP_ROUTE.collection.byCate("laptop-gaming-acer"),
        level: 1,
        items: [
          {
            key: "nitro-series",
            title: "Nitro Series",
            link: APP_ROUTE.collection.byCate("laptop-acer-nitro-series"),
            level: 2,
          },
          {
            key: "aspire-series",
            title: "Aspire Series",
            link: APP_ROUTE.collection.byCate("laptop-acer-aspire-7"),
            level: 2,
          },
          {
            key: "predator-series",
            title: "Predator Series",
            link: APP_ROUTE.collection.byCate("laptop-acer-predator-series"),
            level: 2,
          },
          {
            key: "acer-rtx-50-series",
            title: "ACER RTX 50 Series",
            link: APP_ROUTE.collection.byCate("laptop-acer-rtx-50-series"),
            level: 2,
          },
        ],
      },
      {
        key: "asus-rog-gaming",
        title: "ASUS | ROG Gaming",
        link: APP_ROUTE.collection.byCate("laptop-gaming-asus"),
        level: 1,
        items: [
          {
            key: "rog-series",
            title: "ROG Series",
            link: APP_ROUTE.collection.byCate("laptop-asus-rog-series"),
            level: 2,
          },
          {
            key: "tuf-series",
            title: "TUF Series",
            link: APP_ROUTE.collection.byCate("laptop-asus-tuf-gaming-series"),
            level: 2,
          },
          {
            key: "zephyrus-series",
            title: "Zephyrus Series",
            link: APP_ROUTE.collection.byCate(
              "laptop-asus-gaming-zephyrus-series"
            ),
            level: 2,
          },
          {
            key: "asus-rtx-50-series",
            title: "ASUS RTX 50 Series",
            link: APP_ROUTE.collection.byCate("asus-rtx-50-series"),
            level: 2,
          },
        ],
      },
      {
        key: "msi-gaming",
        title: "MSI Gaming",
        link: APP_ROUTE.collection.byCate("laptop-msi-gaming"),
        level: 1,
        items: [
          {
            key: "titan-gt-series",
            title: "Titan GT Series",
            link: APP_ROUTE.collection.byCate("laptop-msi-gt-series"),
            level: 2,
          },
          {
            key: "stealth-gs-series",
            title: "Stealth GS Series",
            link: APP_ROUTE.collection.byCate("laptop-msi-gs-series"),
            level: 2,
          },
          {
            key: "raider-ge-series",
            title: "Raider GE Series",
            link: APP_ROUTE.collection.byCate("laptop-msi-ge-series"),
            level: 2,
          },
          {
            key: "vector-gp-series",
            title: "Vector GP Series",
            link: APP_ROUTE.collection.byCate("laptop-msi-gp-series"),
            level: 2,
          },
          {
            key: "crosshair-pulse-gl-series",
            title: "Crosshair / Pulse GL Series",
            link: APP_ROUTE.collection.byCate("laptop-msi-gl-series"),
            level: 2,
          },
          {
            key: "sword-katana-gf66-series",
            title: "Sword / Katana GF66 Series",
            link: APP_ROUTE.collection.byCate("laptop-msi-sword-katana-series"),
            level: 2,
          },
          {
            key: "cyborg-thin-gf-series",
            title: "Cyborg / Thin GF Series",
            link: APP_ROUTE.collection.byCate("laptop-msi-gf-series"),
            level: 2,
          },
          {
            key: "msi-rtx-50-series",
            title: "MSI RTX 50 Series",
            link: APP_ROUTE.collection.byCate("laptop-msi-rtx-50-series"),
            level: 2,
          },
        ],
      },
      {
        key: "lenovo-gaming",
        title: "LENOVO Gaming",
        link: APP_ROUTE.collection.byCate("laptop-gaming-lenovo"),
        level: 1,
        items: [
          {
            key: "legion-gaming",
            title: "Legion Gaming",
            link: APP_ROUTE.collection.byCate("laptop-lenovo-legion"),
            level: 2,
          },
          {
            key: "loq-series",
            title: "LOQ series",
            link: APP_ROUTE.collection.byCate("laptop-gaming-lenovo-loq"),
            level: 2,
          },
          {
            key: "rtx-50-series",
            title: "RTX 50 Series",
            link: APP_ROUTE.collection.byCate("laptop-lenovo-rtx-50-series"),
            level: 2,
          },
        ],
      },
      {
        key: "dell-gaming",
        title: "Dell Gaming",
        link: APP_ROUTE.collection.byCate("laptop-gaming-dell"),
        level: 1,
        items: [
          {
            key: "dell-gaming-g-series",
            title: "Dell Gaming G Series",
            link: APP_ROUTE.collection.byCate("dell-gaming-g-series"),
            level: 2,
          },
          {
            key: "alienware-series",
            title: "Alienware Series",
            link: APP_ROUTE.collection.byCate("laptop-alienware"),
            level: 2,
          },
        ],
      },
      {
        key: "hp-gaming",
        title: "HP Gaming",
        link: APP_ROUTE.collection.byCate("laptop-gaming-hp"),
        level: 1,
        items: [
          {
            key: "hp-victus",
            title: "HP Victus",
            link: APP_ROUTE.collection.byCate("laptop-hp-victus"),
            level: 2,
          },
          {
            key: "hp-omen",
            title: "Hp Omen",
            link: APP_ROUTE.collection.byCate("laptop-hp-omen"),
            level: 2,
          },
          {
            key: "hp-rtx-50-series",
            title: "HP RTX 50 Series",
            link: APP_ROUTE.collection.byCate("laptop-hp-rtx-50-series"),
            level: 2,
          },
        ],
      },
      {
        key: "cau-hinh",
        title: "Cấu hình",
        link: APP_ROUTE.collection.byCate("laptop"),
        level: 1,
        items: [
          {
            key: "rtx-50-series",
            title: "RTX 50 Series",
            link: APP_ROUTE.collection.byCate("laptop-gaming-rtx-50-series"),
            level: 2,
          },
          {
            key: "cpu-core-ultra",
            title: "CPU Core Ultra",
            link: APP_ROUTE.collection.byCate("laptop-intel-core-ultra"),
            level: 2,
          },
          {
            key: "cpu-amd",
            title: "CPU AMD",
            link: APP_ROUTE.collection.byCate("laptop-amd-radeon-rx"),
            level: 2,
          },
        ],
      },
      {
        key: "linh-phu-kien-laptop",
        title: "Linh - Phụ kiện Laptop",
        link: APP_ROUTE.collection.byCate("linh-kien-phu-kien-laptop/"),
        level: 1,
        items: [
          {
            key: "ram-laptop",
            title: "Ram laptop",
            link: APP_ROUTE.collection.byCate("ram-laptop"),
            level: 2,
          },
          {
            key: "ssd-laptop",
            title: "SSD laptop",
            link: APP_ROUTE.collection.byCate("ssd-laptop"),
            level: 2,
          },
          {
            key: "o-cung-di-dong",
            title: "Ổ cứng di động",
            link: APP_ROUTE.collection.byCate("o-cung-di-dong-hdd-box"),
            level: 2,
          },
        ],
      },
    ],
  },
  {
    key: "pc-gvn",
    title: "PC GVN",
    link: APP_ROUTE.page.bySlug("pc-gvn"),
    icon: "menu_pc",
    items: [
      {
        key: "pc-rtx-50-series",
        title: "PC RTX 50 SERIES",
        link: APP_ROUTE.collection.byCate("pc-gvn"),
        level: 1,
        items: [
          {
            key: "pc-rtx-5090",
            title: "PC RTX 5090",
            link: APP_ROUTE.collection.byCate("pc-gvn-rtx-5090"),
            level: 2,
          },
          {
            key: "pc-rtx-5080",
            title: "PC RTX 5080",
            link: APP_ROUTE.collection.byCate("pc-gvn-rtx-5080"),
            level: 2,
          },
          {
            key: "pc-rtx-5070ti",
            title: "PC RTX 5070Ti",
            link: APP_ROUTE.collection.byCate("pc-gvn-rtx-5070ti"),
            level: 2,
          },
          {
            key: "pc-rtx-5070",
            title: "PC RTX 5070",
            link: APP_ROUTE.collection.byCate("pc-gvn-rtx-5070"),
            level: 2,
          },
          {
            key: "pc-rtx-5060ti",
            title: "PC RTX 5060Ti",
            link: APP_ROUTE.collection.byCate("pc-rtx-5060ti"),
            level: 2,
          },
          {
            key: "pc-rtx-5060-hot-",
            title: "PC RTX 5060 (HOT)",
            link: APP_ROUTE.collection.byCate("pc-gvn-rtx-5060"),
            level: 2,
          },
        ],
      },
      {
        key: "pc-hot-chien-he",
        title: "PC HOT CHIẾN HÈ",
        link: APP_ROUTE.collection.byCate("pc-gvn"),
        level: 1,
        items: [
          {
            key: "i5-5060-ch-t-18tr",
            title: "I5 - 5060 - chỉ từ 18tr",
            link: APP_ROUTE.collection.byCate("pc-gvn-rtx-5060"),
            level: 2,
          },
          {
            key: "i5-4060-17tr",
            title: "I5 - 4060 - 17TR",
            link: APP_ROUTE.collection.byCate("pc-gvn?vga=rtx4060"),
            level: 2,
          },
          {
            key: "i5-3060-15tr",
            title: "I5 - 3060 - 15TR",
            link: APP_ROUTE.collection.byCate("pc-gvn?vga=rtx3060"),
            level: 2,
          },
          {
            key: "i3-3050-11tr",
            title: "I3 - 3050 - 11TR",
            link: APP_ROUTE.collection.byCate("pc-gvn?vga=rtx3050"),
            level: 2,
          },
          {
            key: "i3-rx6500xt-10tr",
            title: "I3 - RX6500XT - 10TR",
            link: APP_ROUTE.collection.byCate("pc-gvn?vga=rx6500xt"),
            level: 2,
          },
        ],
      },
      {
        key: "pc-khuyen-mai-khung",
        title: "PC khuyến mãi KHỦNG",
        link: APP_ROUTE.collection.byCate("pc-gvn"),
        level: 1,
        items: [
          {
            key: "build-pc-t-ng-m-n-240hz",
            title: "BUILD PC TẶNG MÀN 240HZ",
            link: APP_ROUTE.collection.byCate("pc-gvn-i7"),
            level: 2,
          },
          {
            key: "gvn-x-msi-t-ng-m-n-h-nh-oled",
            title: "GVN x MSI - Tặng màn hình OLED",
            link: APP_ROUTE.collection.byCate(
              "pc-gvn-dragon-godlike-intel-core-ultra-9-285k-vga-rtx-5090-powered-by-msi"
            ),
            level: 2,
          },
          {
            key: "gvn-x-corsair-t-ng-t-n-nhi-t-5tr",
            title: "GVN x CORSAIR - Tặng tản nhiệt 5TR",
            link: APP_ROUTE.collection.byCate(
              "pc-gvn-x-corsair-icue-intel-i5-14400f-vga-rtx-5060"
            ),
            level: 2,
          },
          {
            key: "gvn-x-asus-max-setting",
            title: "GVN x ASUS - MAX SETTING",
            link: APP_ROUTE.collection.byCate(
              "pc-gvn-intel-core-ultra-9-rtx5090"
            ),
            level: 2,
          },
        ],
      },
      {
        key: "pc-theo-cau-hinh-vga",
        title: "PC theo cấu hình VGA",
        link: APP_ROUTE.collection.byCate("pc-gvn"),
        level: 1,
        items: [
          {
            key: "pc-rtx-3050",
            title: "PC RTX 3050",
            link: APP_ROUTE.collection.byCate("pc-gvn?vga=rtx3050 "),
            level: 2,
          },
          {
            key: "pc-rx6500xt",
            title: "PC RX6500XT",
            link: APP_ROUTE.collection.byCate("pc-gvn?vga=rtx3060"),
            level: 2,
          },
          {
            key: "pc-rtx-3060-12gb-",
            title: "PC RTX 3060 (12GB)",
            link: APP_ROUTE.collection.byCate("pc-gvn?vga=rtx3060"),
            level: 2,
          },
          {
            key: "pc-rtx-4060",
            title: "PC RTX 4060",
            link: APP_ROUTE.collection.byCate("pc-gvn?vga=rtx4060"),
            level: 2,
          },
          {
            key: "pc-rtx-4070-super",
            title: "PC RTX 4070 Super",
            link: APP_ROUTE.collection.byCate("pc-gvn"),
            level: 2,
          },
        ],
      },
      {
        key: "ai-pc-gvn",
        title: "A.I PC - GVN",
        link: APP_ROUTE.collection.byCate("ai-pc-gvn/"),
        level: 1,
        items: [
          {
            key: "pc-gvn-x-asus-pba",
            title: "PC GVN X ASUS - PBA",
            link: APP_ROUTE.collection.byCate("pc-gearvn-powered-by-asus/"),
            level: 2,
          },
          {
            key: "pc-gvn-x-msi",
            title: "PC GVN X MSI",
            link: APP_ROUTE.collection.byCate("pc-msi-powered-by-msi"),
            level: 2,
          },
        ],
      },
      {
        key: "pc-theo-cpu-intel-1",
        title: "PC theo CPU Intel",
        link: APP_ROUTE.page.bySlug("pc-gvn"),
        level: 1,
        items: [
          {
            key: "pc-core-i3",
            title: "PC Core I3",
            link: APP_ROUTE.collection.byCate("pc-gvn-i3"),
            level: 2,
          },
          {
            key: "pc-core-i5",
            title: "PC Core I5",
            link: APP_ROUTE.collection.byCate("pc-gvn-i5"),
            level: 2,
          },
          {
            key: "pc-core-i7",
            title: "PC Core I7",
            link: APP_ROUTE.collection.byCate("pc-gvn-i7"),
            level: 2,
          },
          {
            key: "pc-core-i9",
            title: "PC Core I9",
            link: APP_ROUTE.collection.byCate("pc-gvn-i9"),
            level: 2,
          },
        ],
      },
      {
        key: "pc-theo-cpu-intel",
        title: "PC theo CPU Intel",
        link: APP_ROUTE.page.bySlug("pc-gvn"),
        level: 1,
        items: [
          {
            key: "pc-ultra-7",
            title: "PC Ultra 7",
            link: APP_ROUTE.collection.byCate("pc-gvn-core-ultra-7"),
            level: 2,
          },
          {
            key: "pc-ultra-9",
            title: "PC Ultra 9",
            link: APP_ROUTE.collection.byCate("pc-gvn-ultra-9"),
            level: 2,
          },
        ],
      },
      {
        key: "pc-theo-cpu-amd",
        title: "PC theo CPU AMD",
        link: APP_ROUTE.collection.byCate(
          "pc-gvn?cpu=amdryzen5,amdryzen7,amdryzen9"
        ),
        level: 1,
        items: [
          {
            key: "pc-amd-r3",
            title: "PC AMD R3",
            link: APP_ROUTE.collection.byCate("pc-gvn-r3"),
            level: 2,
          },
          {
            key: "pc-amd-r5",
            title: "PC AMD R5",
            link: APP_ROUTE.collection.byCate("pc-gvn-r5"),
            level: 2,
          },
          {
            key: "pc-amd-r7",
            title: "PC AMD R7",
            link: APP_ROUTE.collection.byCate("pc-gvn-r7"),
            level: 2,
          },
          {
            key: "pc-amd-r9",
            title: "PC AMD R9",
            link: APP_ROUTE.collection.byCate("pc-gvn-r9"),
            level: 2,
          },
        ],
      },
      {
        key: "pc-van-phong",
        title: "PC Văn phòng",
        link: APP_ROUTE.collection.byCate("pc-van-phong"),
        level: 1,
        items: [
          {
            key: "homework-athlon-gi-ch-3-990k",
            title: "Homework Athlon - Giá chỉ 3.990k",
            link: APP_ROUTE.product.bySlug("pc-gvn-homework-amd-athlon"),
            level: 2,
          },
          {
            key: "homework-r3-gi-ch-5-690k",
            title: "Homework R3 - Giá chỉ 5,690k",
            link: APP_ROUTE.product.bySlug("pc-gvn-homework-amd-r3"),
            level: 2,
          },
          {
            key: "homework-r5-gi-ch-5-690k",
            title: "Homework R5 - Giá chỉ 5,690k",
            link: APP_ROUTE.product.bySlug("pc-gvn-homework-amd-r5"),
            level: 2,
          },
          {
            key: "homework-i5-gi-ch-5-690k",
            title: "Homework I5 - Giá chỉ 5,690k",
            link: APP_ROUTE.product.bySlug("pc-gvn-homework-intel-i5"),
            level: 2,
          },
        ],
      },
      {
        key: "phan-mem-ban-quyen",
        title: "Phần mềm bản quyền",
        link: APP_ROUTE.collection.byCate("phan-mem/"),
        level: 1,
        items: [
          {
            key: "window-b-n-quy-n-ch-t-2-990k",
            title: "Window bản quyền - Chỉ từ 2.990K",
            link: APP_ROUTE.collection.byCate("window"),
            level: 2,
          },
          {
            key: "office-365-b-n-quy-n-ch-t-990k",
            title: "Office 365 bản quyền - Chỉ từ 990K",
            link: APP_ROUTE.page.bySlug("microsoft-office-365"),
            level: 2,
          },
        ],
      },
    ],
  },
  {
    key: "main-cpu-vga",
    title: "Main, CPU, VGA",
    link: "#",
    icon: "menu_main",
    items: [
      {
        key: "vga-rtx-50-series",
        title: "VGA RTX 50 SERIES",
        link: APP_ROUTE.collection.byCate("vga-rtx-50-series"),
        level: 1,
        items: [
          {
            key: "rtx-5090",
            title: "RTX 5090",
            link: APP_ROUTE.collection.byCate("vga-rtx-5090-series"),
            level: 2,
          },
          {
            key: "rtx-5080",
            title: "RTX 5080",
            link: APP_ROUTE.collection.byCate("vga-rtx-5080"),
            level: 2,
          },
          {
            key: "rtx-5070ti",
            title: "RTX 5070Ti",
            link: APP_ROUTE.collection.byCate("vga-rtx-5070-ti-series"),
            level: 2,
          },
          {
            key: "rtx-5070",
            title: "RTX 5070",
            link: APP_ROUTE.collection.byCate("vga-rtx-5070-series"),
            level: 2,
          },
          {
            key: "rtx-5060ti",
            title: "RTX 5060Ti",
            link: APP_ROUTE.collection.byCate("vga-rtx-5060-ti-series"),
            level: 2,
          },
          {
            key: "rtx-5060",
            title: "RTX 5060",
            link: APP_ROUTE.collection.byCate("vga-rtx-5060-series"),
            level: 2,
          },
        ],
      },
      {
        key: "vga-tren-12-gb-vram",
        title: "VGA (Trên 12 GB VRAM)",
        link: APP_ROUTE.collection.byCate("vga-card-man-hinh"),
        level: 1,
        items: [
          {
            key: "rtx-4070-super-12gb-",
            title: "RTX 4070 SUPER (12GB)",
            link: APP_ROUTE.collection.byCate("vga-rtx-4070-super"),
            level: 2,
          },
          {
            key: "rtx-4070ti-super-16gb-",
            title: "RTX 4070Ti SUPER (16GB)",
            link: APP_ROUTE.collection.byCate("vga-rtx-4070-ti-super"),
            level: 2,
          },
          {
            key: "rtx-4080-super-16gb-",
            title: "RTX 4080 SUPER (16GB)",
            link: APP_ROUTE.collection.byCate("vga-rtx-4080-super"),
            level: 2,
          },
          {
            key: "rtx-4090-super-24gb-",
            title: "RTX 4090 SUPER (24GB)",
            link: APP_ROUTE.collection.byCate("vga-rtx-4090"),
            level: 2,
          },
        ],
      },
      {
        key: "vga-duoi-12-gb-vram",
        title: "VGA (Dưới 12 GB VRAM)",
        link: APP_ROUTE.collection.byCate("vga-card-man-hinh"),
        level: 1,
        items: [
          {
            key: "rtx-4060ti-8-16gb-",
            title: "RTX 4060Ti (8 - 16GB)",
            link: APP_ROUTE.collection.byCate("vga-rtx-4060-ti"),
            level: 2,
          },
          {
            key: "rtx-4060-8gb-",
            title: "RTX 4060 (8GB)",
            link: APP_ROUTE.collection.byCate("vga-rtx-4060"),
            level: 2,
          },
          {
            key: "rtx-3060-12gb-",
            title: "RTX 3060 (12GB)",
            link: APP_ROUTE.collection.byCate("vga-rtx-ampere-3060-12gb"),
            level: 2,
          },
          {
            key: "rtx-3050-6-8gb-",
            title: "RTX 3050 (6 - 8GB)",
            link: APP_ROUTE.collection.byCate("vga-rtx-ampere-3050"),
            level: 2,
          },
          {
            key: "gtx-1650-4gb-",
            title: "GTX 1650 (4GB)",
            link: APP_ROUTE.collection.byCate("vga-gtx-1650-4g"),
            level: 2,
          },
          {
            key: "gt-710-gt-1030-2-4gb-",
            title: "GT 710 / GT 1030 (2-4GB)",
            link: APP_ROUTE.collection.byCate("gt-710-gt-1030-gtx-1050-ti"),
            level: 2,
          },
        ],
      },
      {
        key: "vga-card-man-hinh",
        title: "VGA - Card màn hình",
        link: APP_ROUTE.collection.byCate("vga-card-man-hinh"),
        level: 1,
        items: [
          {
            key: "nvidia-quadro",
            title: "NVIDIA Quadro",
            link: APP_ROUTE.collection.byCate("nvidia-quadro"),
            level: 2,
          },
          {
            key: "amd-radeon",
            title: "AMD Radeon",
            link: APP_ROUTE.collection.byCate("radeon-rx"),
            level: 2,
          },
        ],
      },
      {
        key: "bo-mach-chu-intel",
        title: "Bo mạch chủ Intel",
        link: APP_ROUTE.collection.byCate("mainboard-bo-mach-chu"),
        level: 1,
        items: [
          {
            key: "z890-m-i-",
            title: "Z890 (Mới)",
            link: APP_ROUTE.collection.byCate("mainboard-intel-z890"),
            level: 2,
          },
          {
            key: "z790",
            title: "Z790",
            link: APP_ROUTE.collection.byCate(
              "mainboard-intel-z790-raptor-lake"
            ),
            level: 2,
          },
          {
            key: "b760",
            title: "B760",
            link: APP_ROUTE.collection.byCate(
              "mainboard-intel-b760-raptor-lake"
            ),
            level: 2,
          },
          {
            key: "h610",
            title: "H610",
            link: APP_ROUTE.collection.byCate(
              "mainboard-intel-h610-alder-lake"
            ),
            level: 2,
          },
          {
            key: "x299x",
            title: "X299X",
            link: APP_ROUTE.collection.byCate("mainboard-x299x-lga2066"),
            level: 2,
          },
          {
            key: "xem-t-t-c-",
            title: "Xem tất cả",
            link: APP_ROUTE.collection.byCate("mainboard-bo-mach-chu"),
            level: 2,
          },
        ],
      },
      {
        key: "bo-mach-chu-amd",
        title: "Bo mạch chủ AMD",
        link: APP_ROUTE.collection.byCate("mainboard-bo-mach-chu"),
        level: 1,
        items: [
          {
            key: "amd-x870-m-i-",
            title: "AMD X870 (Mới)",
            link: APP_ROUTE.collection.byCate("mainboard-amd-x870"),
            level: 2,
          },
          {
            key: "amd-x670",
            title: "AMD X670",
            link: APP_ROUTE.collection.byCate("mainboard-amd-x670"),
            level: 2,
          },
          {
            key: "amd-x570",
            title: "AMD X570",
            link: APP_ROUTE.collection.byCate("mainboard-ryzen-x570"),
            level: 2,
          },
          {
            key: "amd-b650-m-i-",
            title: "AMD B650 (Mới)",
            link: APP_ROUTE.collection.byCate("mainboard-amd-b650"),
            level: 2,
          },
          {
            key: "amd-b550",
            title: "AMD B550",
            link: APP_ROUTE.collection.byCate("main-amd-ryzen-b550-socket-am4"),
            level: 2,
          },
          {
            key: "amd-a320",
            title: "AMD A320",
            link: APP_ROUTE.collection.byCate("main-amd-ryzen-a320-socket-am4"),
            level: 2,
          },
          {
            key: "amd-trx40",
            title: "AMD TRX40",
            link: APP_ROUTE.collection.byCate(
              "main-amd-ryzen-trx40-socket-str4"
            ),
            level: 2,
          },
        ],
      },
      {
        key: "cpu-bo-vi-xu-ly-intel",
        title: "CPU - Bộ vi xử lý Intel",
        link: APP_ROUTE.collection.byCate("cpu-bo-vi-xu-ly?hang=intel"),
        level: 1,
        items: [
          {
            key: "cpu-intel-core-ultra-series-2-m-i-",
            title: "CPU Intel Core Ultra Series 2 (Mới)",
            link: APP_ROUTE.collection.byCate("cpu-intel-core-ultra-series-2"),
            level: 2,
          },
          {
            key: "cpu-intel-9",
            title: "CPU Intel 9",
            link: APP_ROUTE.collection.byCate("cpu-intel-core-i9"),
            level: 2,
          },
          {
            key: "cpu-intel-7",
            title: "CPU Intel 7",
            link: APP_ROUTE.collection.byCate("cpu-intel-core-i7"),
            level: 2,
          },
          {
            key: "cpu-intel-5",
            title: "CPU Intel 5",
            link: APP_ROUTE.collection.byCate("cpu-intel-core-i5"),
            level: 2,
          },
          {
            key: "cpu-intel-3",
            title: "CPU Intel 3",
            link: APP_ROUTE.collection.byCate("cpu-intel-core-i3"),
            level: 2,
          },
        ],
      },
      {
        key: "cpu-bo-vi-xu-ly-amd",
        title: "CPU - Bộ vi xử lý AMD",
        link: APP_ROUTE.collection.byCate("cpu-amd-ryzen"),
        level: 1,
        items: [
          {
            key: "cpu-amd-athlon",
            title: "CPU AMD Athlon",
            link: APP_ROUTE.collection.byCate("cpu-bo-vi-xu-ly?dongcpu=athlon"),
            level: 2,
          },
          {
            key: "cpu-amd-r3",
            title: "CPU AMD R3",
            link: APP_ROUTE.collection.byCate("cpu-amd-ryzen-3"),
            level: 2,
          },
          {
            key: "cpu-amd-r5",
            title: "CPU AMD R5",
            link: APP_ROUTE.collection.byCate("cpu-amd-ryzen-5"),
            level: 2,
          },
          {
            key: "cpu-amd-r7",
            title: "CPU AMD R7",
            link: APP_ROUTE.collection.byCate("cpu-amd-ryzen-7"),
            level: 2,
          },
          {
            key: "cpu-amd-r9",
            title: "CPU AMD R9",
            link: APP_ROUTE.collection.byCate("cpu-amd-ryzen-9"),
            level: 2,
          },
        ],
      },
    ],
  },
  {
    key: "case-nguon-tan",
    title: "Case, Nguồn, Tản",
    link: "#",
    icon: "menu_case",
    items: [
      {
        key: "case-theo-hang",
        title: "Case - Theo hãng",
        link: APP_ROUTE.collection.byCate("case-thung-may-tinh"),
        level: 1,
        items: [
          {
            key: "case-asus",
            title: "Case ASUS",
            link: APP_ROUTE.collection.byCate("case-asus"),
            level: 2,
          },
          {
            key: "case-corsair",
            title: "Case Corsair",
            link: APP_ROUTE.collection.byCate("case-corsair"),
            level: 2,
          },
          {
            key: "case-lianli",
            title: "Case Lianli",
            link: APP_ROUTE.collection.byCate("case-lian-li"),
            level: 2,
          },
          {
            key: "case-nzxt",
            title: "Case NZXT",
            link: APP_ROUTE.collection.byCate("case-nzxt"),
            level: 2,
          },
          {
            key: "case-jonsbo",
            title: "Case Jonsbo",
            link: APP_ROUTE.collection.byCate("vo-may-tinh-jonsbo"),
            level: 2,
          },
          {
            key: "xem-t-t-c-",
            title: "Xem tất cả",
            link: APP_ROUTE.collection.byCate("case-thung-may-tinh"),
            level: 2,
          },
        ],
      },
      {
        key: "case-theo-gia",
        title: "Case - Theo giá",
        link: APP_ROUTE.collection.byCate("case-thung-may-tinh"),
        level: 1,
        items: [
          {
            key: "d-i-1-tri-u",
            title: "Dưới 1 triệu",
            link: APP_ROUTE.collection.byCate("case-duoi-1-trieu"),
            level: 2,
          },
          {
            key: "t-1-tri-u-n-2-tri-u",
            title: "Từ 1 triệu đến 2 triệu",
            link: APP_ROUTE.collection.byCate("case-tu-1-trieu-den-2-trieu"),
            level: 2,
          },
          {
            key: "tr-n-2-tri-u",
            title: "Trên 2 triệu",
            link: APP_ROUTE.collection.byCate("case-tren-2-trieu"),
            level: 2,
          },
          {
            key: "xem-t-t-c-",
            title: "Xem tất cả",
            link: APP_ROUTE.collection.byCate("case-thung-may-tinh"),
            level: 2,
          },
        ],
      },
      {
        key: "nguon-theo-hang",
        title: "Nguồn - Theo Hãng",
        link: APP_ROUTE.collection.byCate("psu-nguon-may-tinh"),
        level: 1,
        items: [
          {
            key: "ngu-n-asus",
            title: "Nguồn ASUS",
            link: APP_ROUTE.collection.byCate("nguon-may-tinh-asus"),
            level: 2,
          },
          {
            key: "ngu-n-deepcool",
            title: "Nguồ̀n DeepCool",
            link: APP_ROUTE.collection.byCate(
              "psu-nguon-may-tinh?hang=deepcool"
            ),
            level: 2,
          },
          {
            key: "ngu-n-corsair",
            title: "Nguồn Corsair",
            link: APP_ROUTE.collection.byCate("nguon-corsair"),
            level: 2,
          },
          {
            key: "ngu-n-nzxt",
            title: "Nguồn NZXT",
            link: APP_ROUTE.collection.byCate("nguon-may-tinh-nzxt"),
            level: 2,
          },
          {
            key: "ngu-n-msi",
            title: "Nguồn MSI",
            link: APP_ROUTE.collection.byCate("psu-nguon-may-tinh?hang=msi"),
            level: 2,
          },
          {
            key: "xem-t-t-c-",
            title: "Xem tất cả",
            link: APP_ROUTE.collection.byCate("psu-nguon-may-tinh"),
            level: 2,
          },
        ],
      },
      {
        key: "nguon-theo-cong-suat",
        title: "Nguồn - Theo công suất",
        link: APP_ROUTE.collection.byCate("psu-nguon-may-tinh"),
        level: 1,
        items: [
          {
            key: "t-400w-500w",
            title: "Từ 400w - 500w",
            link: APP_ROUTE.collection.byCate("400-500w"),
            level: 2,
          },
          {
            key: "t-500w-600w",
            title: "Từ 500w - 600w",
            link: APP_ROUTE.collection.byCate("500-600w"),
            level: 2,
          },
          {
            key: "t-700w-800w",
            title: "Từ 700w - 800w",
            link: APP_ROUTE.collection.byCate("700w-800w"),
            level: 2,
          },
          {
            key: "tr-n-1000w",
            title: "Trên 1000w",
            link: APP_ROUTE.collection.byCate("tren-1000w"),
            level: 2,
          },
          {
            key: "xem-t-t-c-",
            title: "Xem tất cả",
            link: APP_ROUTE.collection.byCate("psu-nguon-may-tinh"),
            level: 2,
          },
        ],
      },
      {
        key: "phu-kien-pc",
        title: "Phụ kiện PC",
        link: APP_ROUTE.collection.byCate("phu-kien-may-tinh"),
        level: 1,
        items: [
          {
            key: "d-y-led",
            title: "Dây LED",
            link: APP_ROUTE.collection.byCate(
              "phu-kien-may-tinh?loaisanpham=dayledganpc"
            ),
            level: 2,
          },
          {
            key: "d-y-rise-d-ng-vga",
            title: "Dây rise - Dựng VGA",
            link: APP_ROUTE.collection.byCate(
              "phu-kien-may-tinh?loaisanpham=dayriserdungvga"
            ),
            level: 2,
          },
          {
            key: "gi-vga",
            title: "Giá đỡ VGA",
            link: APP_ROUTE.collection.byCate(
              "phu-kien-may-tinh?loaisanpham=giadovga"
            ),
            level: 2,
          },
          {
            key: "keo-t-n-nhi-t",
            title: "Keo tản nhiệt",
            link: APP_ROUTE.collection.byCate(
              "phu-kien-may-tinh?loaisanpham=keotannhiet"
            ),
            level: 2,
          },
          {
            key: "xem-t-t-c-",
            title: "Xem tất cả",
            link: APP_ROUTE.collection.byCate("phu-kien-may-tinh"),
            level: 2,
          },
        ],
      },
      {
        key: "loai-tan-nhiet",
        title: "Loại tản nhiệt",
        link: APP_ROUTE.collection.byCate("tan-nhiet-may-tinh"),
        level: 1,
        items: [
          {
            key: "t-n-nhi-t-aio-240mm",
            title: "Tản nhiệt AIO 240mm",
            link: APP_ROUTE.collection.byCate("tan-nhiet-nuoc-240mm"),
            level: 2,
          },
          {
            key: "t-n-nhi-t-aio-280mm",
            title: "Tản nhiệt AIO 280mm",
            link: APP_ROUTE.collection.byCate("tan-nhiet-nuoc-280mm"),
            level: 2,
          },
          {
            key: "t-n-nhi-t-aio-360mm",
            title: "Tản nhiệt AIO 360mm",
            link: APP_ROUTE.collection.byCate("tan-nhiet-nuoc-360mm"),
            level: 2,
          },
          {
            key: "t-n-nhi-t-aio-420mm",
            title: "Tản nhiệt AIO 420mm",
            link: APP_ROUTE.collection.byCate("tan-nhiet-nuoc-420mm"),
            level: 2,
          },
          {
            key: "t-n-nhi-t-kh-",
            title: "Tản nhiệt khí",
            link: APP_ROUTE.collection.byCate("tan-nhiet-khi"),
            level: 2,
          },
          {
            key: "fan-rgb",
            title: "Fan RGB",
            link: APP_ROUTE.collection.byCate("fan-rgb-tan-nhiet-pc"),
            level: 2,
          },
          {
            key: "xem-t-t-c-",
            title: "Xem tất cả",
            link: APP_ROUTE.collection.byCate("fan-rgb-tan-nhiet-pc"),
            level: 2,
          },
        ],
      },
    ],
  },
  {
    key: "o-cung-ram-thr-nho",
    title: "Ổ cứng, RAM, Thẻ nhớ",
    link: "#",
    icon: "menu_ram",
    items: [
      {
        key: "dung-luong-ram",
        title: "Dung lượng RAM",
        link: APP_ROUTE.collection.byCate("ram-pc"),
        level: 1,
        items: [
          {
            key: "8-gb",
            title: "8 GB",
            link: APP_ROUTE.collection.byCate("ddr4-8gb"),
            level: 2,
          },
          {
            key: "16-gb",
            title: "16 GB",
            link: APP_ROUTE.collection.byCate("ddr4-16g"),
            level: 2,
          },
          {
            key: "32-gb",
            title: "32 GB",
            link: APP_ROUTE.collection.byCate("ddr4-32gb"),
            level: 2,
          },
          {
            key: "64-gb",
            title: "64 GB",
            link: APP_ROUTE.collection.byCate("ram-ddr5-64gb"),
            level: 2,
          },
          {
            key: "xem-t-t-c-",
            title: "Xem tất cả",
            link: APP_ROUTE.collection.byCate("ram-pc"),
            level: 2,
          },
        ],
      },
      {
        key: "loai-ram",
        title: "Loại RAM",
        link: APP_ROUTE.collection.byCate("ram-pc"),
        level: 1,
        items: [
          {
            key: "ddr4",
            title: "DDR4",
            link: APP_ROUTE.collection.byCate("ram-ddr4"),
            level: 2,
          },
          {
            key: "ddr5",
            title: "DDR5",
            link: APP_ROUTE.collection.byCate("ram-pc-ddr5"),
            level: 2,
          },
          {
            key: "xem-t-t-c-",
            title: "Xem tất cả",
            link: APP_ROUTE.collection.byCate("ram-pc"),
            level: 2,
          },
        ],
      },
      {
        key: "hang-ram",
        title: "Hãng RAM",
        link: APP_ROUTE.collection.byCate("ram-pc"),
        level: 1,
        items: [
          {
            key: "corsair",
            title: "Corsair",
            link: APP_ROUTE.collection.byCate("ram-pc?hang=corsair"),
            level: 2,
          },
          {
            key: "kingston",
            title: "Kingston",
            link: APP_ROUTE.collection.byCate("ram-pc?hang=kingston"),
            level: 2,
          },
          {
            key: "g-skill",
            title: "G.Skill",
            link: APP_ROUTE.collection.byCate("ram-pc?hang=gskill"),
            level: 2,
          },
          {
            key: "pny",
            title: "PNY",
            link: APP_ROUTE.collection.byCate("ram-pc?hang=pny"),
            level: 2,
          },
          {
            key: "xem-t-t-c-",
            title: "Xem tất cả",
            link: APP_ROUTE.collection.byCate("ram-pc"),
            level: 2,
          },
        ],
      },
      {
        key: "dung-luong-hdd",
        title: "Dung lượng HDD",
        link: APP_ROUTE.collection.byCate("hdd-o-cung-pc"),
        level: 1,
        items: [
          {
            key: "hdd-1-tb",
            title: "HDD 1 TB",
            link: APP_ROUTE.collection.byCate("hdd-1tb"),
            level: 2,
          },
          {
            key: "hdd-2-tb",
            title: "HDD 2 TB",
            link: APP_ROUTE.collection.byCate("hdd-2tb"),
            level: 2,
          },
          {
            key: "hdd-4-tb-6-tb",
            title: "HDD 4 TB - 6 TB",
            link: APP_ROUTE.collection.byCate("hdd-6tb"),
            level: 2,
          },
          {
            key: "hdd-tr-n-8-tb",
            title: "HDD trên 8 TB",
            link: APP_ROUTE.collection.byCate("hdd-8tb"),
            level: 2,
          },
          {
            key: "xem-t-t-c-",
            title: "Xem tất cả",
            link: APP_ROUTE.collection.byCate("hdd-o-cung-pc"),
            level: 2,
          },
        ],
      },
      {
        key: "hang-hdd",
        title: "Hãng HDD",
        link: APP_ROUTE.collection.byCate("hdd-o-cung-pc"),
        level: 1,
        items: [
          {
            key: "westerdigital",
            title: "WesterDigital",
            link: APP_ROUTE.collection.byCate("hdd-wd"),
            level: 2,
          },
          {
            key: "seagate",
            title: "Seagate",
            link: APP_ROUTE.collection.byCate("hdd-seagate"),
            level: 2,
          },
          {
            key: "toshiba",
            title: "Toshiba",
            link: APP_ROUTE.collection.byCate("hdd-o-cung-pc?hang=toshiba"),
            level: 2,
          },
          {
            key: "xem-t-t-c-",
            title: "Xem tất cả",
            link: APP_ROUTE.collection.byCate("hdd-o-cung-pc"),
            level: 2,
          },
        ],
      },
      {
        key: "dung-luong-ssd",
        title: "Dung lượng SSD",
        link: APP_ROUTE.collection.byCate("ssd-o-cung-the-ran"),
        level: 1,
        items: [
          {
            key: "120gb-128gb",
            title: "120GB - 128GB",
            link: APP_ROUTE.collection.byCate("ssd-120g"),
            level: 2,
          },
          {
            key: "250gb-256gb",
            title: "250GB - 256GB",
            link: APP_ROUTE.collection.byCate(
              "ssd-o-cung-the-ran?dungluong=240256gb"
            ),
            level: 2,
          },
          {
            key: "480gb-512gb",
            title: "480GB - 512GB",
            link: APP_ROUTE.collection.byCate("ssd-480-512gb"),
            level: 2,
          },
          {
            key: "960gb-1tb",
            title: "960GB - 1TB",
            link: APP_ROUTE.collection.byCate("ssd-1tb"),
            level: 2,
          },
          {
            key: "2tb",
            title: "2TB",
            link: APP_ROUTE.collection.byCate(
              "ssd-o-cung-the-ran?dungluong=2tb"
            ),
            level: 2,
          },
          {
            key: "tr-n-2tb",
            title: "Trên 2TB",
            link: APP_ROUTE.collection.byCate(
              "ssd-o-cung-the-ran?dungluong=tren2tb"
            ),
            level: 2,
          },
          {
            key: "xem-t-t-c-",
            title: "Xem tất cả",
            link: APP_ROUTE.collection.byCate("ssd-o-cung-the-ran"),
            level: 2,
          },
        ],
      },
      {
        key: "hang-ssd",
        title: "Hãng SSD",
        link: APP_ROUTE.collection.byCate("ssd-o-cung-the-ran"),
        level: 1,
        items: [
          {
            key: "samsung",
            title: "Samsung",
            link: APP_ROUTE.collection.byCate("ssd-samsung"),
            level: 2,
          },
          {
            key: "wester-digital",
            title: "Wester Digital",
            link: APP_ROUTE.collection.byCate("ssd-wd"),
            level: 2,
          },
          {
            key: "kingston",
            title: "Kingston",
            link: APP_ROUTE.collection.byCate("kingston-ssd"),
            level: 2,
          },
          {
            key: "corsair",
            title: "Corsair",
            link: APP_ROUTE.collection.byCate(
              "ssd-o-cung-the-ran?hang=corsair"
            ),
            level: 2,
          },
          {
            key: "pny",
            title: "PNY",
            link: APP_ROUTE.collection.byCate("ssd-pny"),
            level: 2,
          },
          {
            key: "xem-t-t-c-",
            title: "Xem tất cả",
            link: APP_ROUTE.collection.byCate("ssd-o-cung-the-ran"),
            level: 2,
          },
        ],
      },
      {
        key: "the-nho-usb",
        title: "Thẻ nhớ / USB",
        link: APP_ROUTE.collection.byCate("the-nho"),
        level: 1,
        items: [
          {
            key: "sandisk",
            title: "Sandisk",
            link: APP_ROUTE.collection.byCate("the-nho-usb-sandisk"),
            level: 2,
          },
        ],
      },
      {
        key: "ocung-di-dong",
        title: "Ổ cứng di động",
        link: APP_ROUTE.collection.byCate("o-cung-di-dong-hdd-box"),
        level: 1,
      },
    ],
  },
  {
    key: "loa-micro-webcam",
    title: "Loa, Micro, Webcam",
    link: "#",
    icon: "menu_loudspeaker",
    items: [
      {
        key: "thuong-hieu-loa",
        title: "Thương hiệu loa",
        link: APP_ROUTE.collection.byCate("loa"),
        level: 1,
        items: [
          {
            key: "edifier",
            title: "Edifier",
            link: APP_ROUTE.collection.byCate("loa-edifier"),
            level: 2,
          },
          {
            key: "razer",
            title: "Razer",
            link: APP_ROUTE.collection.byCate("loa?hang=razer"),
            level: 2,
          },
          {
            key: "logitech",
            title: "Logitech",
            link: APP_ROUTE.collection.byCate("loa?hang=logitech"),
            level: 2,
          },
          {
            key: "soundmax",
            title: "SoundMax",
            link: APP_ROUTE.collection.byCate("loa?hang=soundmax"),
            level: 2,
          },
        ],
      },
      {
        key: "kieu-loa",
        title: "Kiểu Loa",
        link: APP_ROUTE.collection.byCate("loa"),
        level: 1,
        items: [
          {
            key: "loa-vi-t-nh",
            title: "Loa vi tính",
            link: APP_ROUTE.collection.byCate("loa?loaisanpham=loavitinh"),
            level: 2,
          },
          {
            key: "loa-bluetooth",
            title: "Loa Bluetooth",
            link: APP_ROUTE.collection.byCate("loa?bluetooth=co"),
            level: 2,
          },
          {
            key: "loa-soundbar",
            title: "Loa Soundbar",
            link: APP_ROUTE.collection.byCate("loa?loaisanpham=loasoundbar"),
            level: 2,
          },
          {
            key: "loa-mini",
            title: "Loa mini",
            link: APP_ROUTE.collection.byCate("loa?loaisanpham=loamini"),
            level: 2,
          },
          {
            key: "sub-ph-loa-tr-m-",
            title: "Sub phụ (Loa trầm)",
            link: APP_ROUTE.collection.byCate("loa?loaisanpham=loasub"),
            level: 2,
          },
        ],
      },
      {
        key: "webcam",
        title: "Webcam",
        link: APP_ROUTE.collection.byCate("webcam"),
        level: 1,
        items: [
          {
            key: "do-phan-gi-i-4k",
            title: "Độ phân giải 4k",
            link: APP_ROUTE.collection.byCate("webcam-4k"),
            level: 2,
          },
          {
            key: "do-phan-gi-i-full-hd-1080p",
            title: "Độ phân giải Full HD (1080p)",
            link: APP_ROUTE.collection.byCate("webcam-1080p"),
            level: 2,
          },
          {
            key: "do-phan-giai-720p",
            title: "Độ phân giải 720p",
            link: APP_ROUTE.collection.byCate("webcam-720p"),
            level: 2,
          },
        ],
      },
      {
        key: "microphone",
        title: "Microphone",
        link: APP_ROUTE.collection.byCate("microphone"),
        level: 1,
        items: [
          {
            key: "micro-hyperx",
            title: "Micro HyperX",
            link: APP_ROUTE.collection.byCate("microphone?hang=hyperx"),
            level: 2,
          },
        ],
      },
    ],
  },
  {
    key: "man-hinh",
    title: "Màn hình",
    link: APP_ROUTE.page.bySlug("man-hinh"),
    icon: "menu_screen",
    items: [
      {
        key: "hang-san-xuat-1",
        title: "Hãng sản xuất",
        link: APP_ROUTE.page.bySlug("man-hinh"),
        level: 1,
        items: [
          {
            key: "lg",
            title: "LG",
            link: APP_ROUTE.collection.byCate("monitor-lg"),
            level: 2,
          },
          {
            key: "asus",
            title: "Asus",
            link: APP_ROUTE.collection.byCate("man-hinh-asus"),
            level: 2,
          },
          {
            key: "viewsonic",
            title: "ViewSonic",
            link: APP_ROUTE.collection.byCate("man-hinh-viewsonic"),
            level: 2,
          },
          {
            key: "dell",
            title: "Dell",
            link: APP_ROUTE.collection.byCate("man-hinh-dell"),
            level: 2,
          },
          {
            key: "gigabyte",
            title: "Gigabyte",
            link: APP_ROUTE.collection.byCate("man-hinh-gigabyte"),
            level: 2,
          },
          {
            key: "aoc",
            title: "AOC",
            link: APP_ROUTE.collection.byCate("man-hinh-aoc"),
            level: 2,
          },
          {
            key: "acer",
            title: "Acer",
            link: APP_ROUTE.collection.byCate("man-hinh-acer"),
            level: 2,
          },
          {
            key: "hkc",
            title: "HKC",
            link: APP_ROUTE.collection.byCate("hkc"),
            level: 2,
          },
        ],
      },
      {
        key: "hang-san-xuat-2",
        title: "Hãng sản xuất",
        link: APP_ROUTE.page.bySlug("man-hinh"),
        level: 1,
        items: [
          {
            key: "msi",
            title: "MSI",
            link: APP_ROUTE.collection.byCate("man-hinh-msi"),
            level: 2,
          },
          {
            key: "lenovo",
            title: "Lenovo",
            link: APP_ROUTE.collection.byCate("man-hinh-lenovo"),
            level: 2,
          },
          {
            key: "samsung",
            title: "Samsung",
            link: APP_ROUTE.collection.byCate("man-hinh-samsung"),
            level: 2,
          },
          {
            key: "philips",
            title: "Philips",
            link: APP_ROUTE.collection.byCate("man-hinh-philips"),
            level: 2,
          },
          {
            key: "e-dra",
            title: "E-Dra",
            link: APP_ROUTE.collection.byCate("man-hinh-e-dra/"),
            level: 2,
          },
          {
            key: "dahua",
            title: "Dahua",
            link: APP_ROUTE.collection.byCate("man-hinh-dahua"),
            level: 2,
          },
          {
            key: "koorui",
            title: "KOORUI",
            link: APP_ROUTE.collection.byCate("man-hinh-koorui"),
            level: 2,
          },
        ],
      },
      {
        key: "gia-tien",
        title: "Giá tiền",
        link: APP_ROUTE.page.bySlug("man-hinh"),
        level: 1,
        items: [
          {
            key: "d-i-5-tri-u",
            title: "Dưới 5 triệu",
            link: APP_ROUTE.collection.byCate("man-hinh-duoi-5-trieu"),
            level: 2,
          },
          {
            key: "t-5-tri-u-n-10-tri-u",
            title: "Từ 5 triệu đến 10 triệu",
            link: APP_ROUTE.collection.byCate("man-hinh-tu-5-den-10-trieu"),
            level: 2,
          },
          {
            key: "t-10-tri-u-n-20-tri-u",
            title: "Từ 10 triệu đến 20 triệu",
            link: APP_ROUTE.collection.byCate("man-hinh-tu-10-den-20-trieu"),
            level: 2,
          },
          {
            key: "t-20-tri-u-n-30-tri-u",
            title: "Từ 20 triệu đến 30 triệu",
            link: APP_ROUTE.collection.byCate(
              "man-hinh-tu-20-trieu-den-30-trieu"
            ),
            level: 2,
          },
          {
            key: "tr-n-30-tri-u",
            title: "Trên 30 triệu",
            link: APP_ROUTE.collection.byCate("man-hinh-tren-30-trieu"),
            level: 2,
          },
        ],
      },
      {
        key: "do-phan-giai",
        title: "Độ phân giải",
        link: APP_ROUTE.page.bySlug("man-hinh"),
        level: 1,
        items: [
          {
            key: "man-hinh-full-hd",
            title: "Màn hình Full HD",
            link: APP_ROUTE.collection.byCate("do-phan-giai-full-hd-1080p"),
            level: 2,
          },
          {
            key: "m-n-h-nh-2k-1440p",
            title: "Màn hình 2K 1440p",
            link: APP_ROUTE.collection.byCate("do-phan-giai-2k-1440p"),
            level: 2,
          },
          {
            key: "m-n-h-nh-4k-uhd",
            title: "Màn hình 4K UHD",
            link: APP_ROUTE.collection.byCate("man-hinh-may-tinh-4k-uhd"),
            level: 2,
          },
          {
            key: "m-n-h-nh-6k",
            title: "Màn hình 6K",
            link: APP_ROUTE.collection.byCate("man-hinh-may-tinh-6k"),
            level: 2,
          },
        ],
      },
      {
        key: "tan-so-quet",
        title: "Tần số quét",
        link: APP_ROUTE.collection.byCate("man-hinh-144hz"),
        level: 1,
        items: [
          {
            key: "60hz",
            title: "60Hz",
            link: APP_ROUTE.collection.byCate("man-hinh-60hz"),
            level: 2,
          },
          {
            key: "75hz",
            title: "75Hz",
            link: APP_ROUTE.collection.byCate("man-hinh-75hz"),
            level: 2,
          },
          {
            key: "100hz",
            title: "100Hz",
            link: APP_ROUTE.collection.byCate("man-hinh-100hz"),
            level: 2,
          },
          {
            key: "144hz",
            title: "144Hz",
            link: APP_ROUTE.collection.byCate("man-hinh-144hz"),
            level: 2,
          },
          {
            key: "240hz",
            title: "240Hz",
            link: APP_ROUTE.collection.byCate("man-hinh-240hz"),
            level: 2,
          },
        ],
      },
      {
        key: "man-hinh-cong",
        title: "Màn hình cong",
        link: APP_ROUTE.collection.byCate("man-hinh-cong"),
        level: 1,
        items: [
          {
            key: "24-curved",
            title: '24" Curved',
            link: APP_ROUTE.collection.byCate("24-curve"),
            level: 2,
          },
          {
            key: "27-curved",
            title: '27" Curved',
            link: APP_ROUTE.collection.byCate("27-curve"),
            level: 2,
          },
          {
            key: "32-curved",
            title: '32" Curved',
            link: APP_ROUTE.collection.byCate("32-curve"),
            level: 2,
          },
          {
            key: "tr-n-32-curved",
            title: 'Trên 32" Curved',
            link: APP_ROUTE.collection.byCate("tren-32-curve"),
            level: 2,
          },
        ],
      },
      {
        key: "kich-thuoc",
        title: "Kích thước",
        link: APP_ROUTE.page.bySlug("man-hinh"),
        level: 1,
        items: [
          {
            key: "man-hinh-22",
            title: 'Màn hình 22"',
            link: APP_ROUTE.collection.byCate("man-hinh-22-inch"),
            level: 2,
          },
          {
            key: "man-hinh-24-",
            title: 'Màn hình 24"',
            link: APP_ROUTE.collection.byCate("man-hinh-24-inch"),
            level: 2,
          },
          {
            key: "man-hinh-27",
            title: 'Màn hình 27"',
            link: APP_ROUTE.collection.byCate("man-hinh-27-inch"),
            level: 2,
          },
          {
            key: "man-hinh-29",
            title: 'Màn hình 29"',
            link: APP_ROUTE.collection.byCate("man-hinh-29"),
            level: 2,
          },
          {
            key: "man-hinh-32",
            title: 'Màn hình 32"',
            link: APP_ROUTE.collection.byCate("man-hinh-32"),
            level: 2,
          },
          {
            key: "man-hinh-tren-32",
            title: 'Màn hình Trên 32"',
            link: APP_ROUTE.collection.byCate("man-hinh-tren-32"),
            level: 2,
          },
          {
            key: "h-tr-gi-treo-vesa",
            title: "Hỗ trợ giá treo (VESA)",
            link: APP_ROUTE.collection.byCate(
              "man-hinh-co-chuan-vesa-treo-tuong"
            ),
            level: 2,
          },
        ],
      },
      {
        key: "man-hinh-do-hoa",
        title: "Màn hình đồ họa",
        link: APP_ROUTE.collection.byCate("man-hinh-do-hoa"),
        level: 1,
        items: [
          {
            key: "man-hinh-do-hoa-24",
            title: 'Màn hình đồ họa 24"',
            link: APP_ROUTE.collection.byCate("man-hinh-do-hoa-24-inch"),
            level: 2,
          },
          {
            key: "man-hinh-do-hoa-27",
            title: 'Màn hình đồ họa 27"',
            link: APP_ROUTE.collection.byCate("man-hinh-do-hoa-27-inch"),
            level: 2,
          },
          {
            key: "man-hinh-do-hoa-32",
            title: 'Màn hình đồ họa 32"',
            link: APP_ROUTE.collection.byCate("man-hinh-do-hoa-32-inch"),
            level: 2,
          },
        ],
      },
      {
        key: "phu-kien-man-hinh",
        title: "Phụ kiện màn hình",
        link: APP_ROUTE.collection.byCate("phu-kien-man-hinh"),
        level: 1,
        items: [
          {
            key: "gi-treo-m-n-h-nh",
            title: "Giá treo màn hình",
            link: APP_ROUTE.collection.byCate("gia-treo-man-hinh"),
            level: 2,
          },
          {
            key: "ph-ki-n-d-y-hdmi-dp-lan",
            title: "Phụ kiện dây HDMI,DP,LAN",
            link: APP_ROUTE.collection.byCate(
              "phu-kien-day-cap-hdmi-dp-lan-usbc"
            ),
            level: 2,
          },
        ],
      },
      {
        key: "man-hinh-di-dong",
        title: "Màn hình di động",
        link: APP_ROUTE.collection.byCate("man-hinh-di-dong"),
        level: 1,
        items: [
          {
            key: "full-hd-1080p",
            title: "Full HD 1080p",
            link: APP_ROUTE.collection.byCate(
              "man-hinh-di-dong-do-phan-giai-full-hd-1080p"
            ),
            level: 2,
          },
          {
            key: "2k-1440p",
            title: "2K 1440p",
            link: APP_ROUTE.collection.byCate(
              "man-hinh-di-dong-do-phan-giai-2k-1440p"
            ),
            level: 2,
          },
          {
            key: "c-c-m-ng",
            title: "Có cảm ứng",
            link: APP_ROUTE.collection.byCate("man-hinh-di-dong-co-cam-ung"),
            level: 2,
          },
        ],
      },
      {
        key: "man-hinh-oled",
        title: "Màn hình Oled",
        link: APP_ROUTE.collection.byCate("man-hinh-oled"),
        level: 1,
      },
    ],
  },
  {
    key: "ban-phim",
    title: "Bàn phím",
    link: APP_ROUTE.collection.byCate("ban-phim-may-tinh"),
    icon: "menu_keyboard",
    items: [
      {
        key: "thuong-hieu-3",
        title: "Thương hiệu",
        link: APP_ROUTE.collection.byCate("ban-phim-may-tinh"),
        level: 1,
        items: [
          {
            key: "akko",
            title: "AKKO",
            link: APP_ROUTE.collection.byCate("ban-phim-akko"),
            level: 2,
          },
          {
            key: "aula",
            title: "AULA",
            link: APP_ROUTE.collection.byCate("ban-phim-aula"),
            level: 2,
          },
          {
            key: "dare-u",
            title: "Dare-U",
            link: APP_ROUTE.collection.byCate("ban-phim-dare-u"),
            level: 2,
          },
          {
            key: "durgod",
            title: "Durgod",
            link: APP_ROUTE.collection.byCate("ban-phim-ikbc-durgod"),
            level: 2,
          },
          {
            key: "leobog",
            title: "Leobog",
            link: APP_ROUTE.collection.byCate("ban-phim-leobog"),
            level: 2,
          },
          {
            key: "keychron",
            title: "Keychron",
            link: APP_ROUTE.collection.byCate("ban-phim-keychron"),
            level: 2,
          },
          {
            key: "fl-esports",
            title: "FL-Esports",
            link: APP_ROUTE.collection.byCate("ban-phim-co-fl-esports"),
            level: 2,
          },
          {
            key: "corsair",
            title: "Corsair",
            link: APP_ROUTE.collection.byCate("ban-phim-choi-game-corsair"),
            level: 2,
          },
          {
            key: "e-dra",
            title: "E-Dra",
            link: APP_ROUTE.collection.byCate("ban-phim-e-dra"),
            level: 2,
          },
          {
            key: "cidoo",
            title: "Cidoo",
            link: APP_ROUTE.collection.byCate("ban-phim-cidoo"),
            level: 2,
          },
          {
            key: "machenike",
            title: "Machenike",
            link: APP_ROUTE.collection.byCate("ban-phim-machenike"),
            level: 2,
          },
        ],
      },
      {
        key: "thuong-hieu-4",
        title: "Thương hiệu",
        link: APP_ROUTE.collection.byCate("ban-phim-may-tinh"),
        level: 1,
        items: [
          {
            key: "asus",
            title: "ASUS",
            link: APP_ROUTE.collection.byCate("ban-phim-asus"),
            level: 2,
          },
          {
            key: "logitech",
            title: "Logitech",
            link: APP_ROUTE.collection.byCate("ban-phim-logitech"),
            level: 2,
          },
          {
            key: "razer",
            title: "Razer",
            link: APP_ROUTE.collection.byCate("ban-phim-choi-game-razer"),
            level: 2,
          },
          {
            key: "leopold",
            title: "Leopold",
            link: APP_ROUTE.collection.byCate("ban-phim-leopold"),
            level: 2,
          },
          {
            key: "steelseries",
            title: "Steelseries",
            link: APP_ROUTE.collection.byCate("ban-phim-steelseries"),
            level: 2,
          },
          {
            key: "rapoo",
            title: "Rapoo",
            link: APP_ROUTE.collection.byCate("ban-phim-rapoo"),
            level: 2,
          },
          {
            key: "vgn",
            title: "VGN",
            link: APP_ROUTE.collection.byCate("ban-phim-vgn"),
            level: 2,
          },
          {
            key: "madlions",
            title: "MadLions",
            link: APP_ROUTE.collection.byCate("ban-phim-madlions"),
            level: 2,
          },
          {
            key: "skyloong",
            title: "SKYLOONG",
            link: APP_ROUTE.collection.byCate("ban-phim-skyloong"),
            level: 2,
          },
        ],
      },
      {
        key: "gia-tien",
        title: "Giá tiền",
        link: APP_ROUTE.collection.byCate("ban-phim-co"),
        level: 1,
        items: [
          {
            key: "duoi-1-trieu",
            title: "Dưới 1 triệu",
            link: APP_ROUTE.collection.byCate("ban-phim-duoi-1-trieu"),
            level: 2,
          },
          {
            key: "1-trieu-2-trieu",
            title: "1 triệu - 2 triệu",
            link: APP_ROUTE.collection.byCate("ban-phim-1-den-2-trieu"),
            level: 2,
          },
          {
            key: "2-trieu-3-trieu",
            title: "2 triệu - 3 triệu",
            link: APP_ROUTE.collection.byCate("ban-phim-2-den-3-trieu"),
            level: 2,
          },
          {
            key: "3-trieu-4-trieu",
            title: "3 triệu - 4 triệu",
            link: APP_ROUTE.collection.byCate("ban-phim-tu-3-den-4-trieu"),
            level: 2,
          },
          {
            key: "tren-4-trieu",
            title: "Trên 4 triệu",
            link: APP_ROUTE.collection.byCate("ban-phim-tren-4-trieu"),
            level: 2,
          },
        ],
      },
      {
        key: "ket-noi",
        title: "Kết nối",
        link: APP_ROUTE.collection.byCate("ban-phim-co"),
        level: 1,
        items: [
          {
            key: "bluetooth",
            title: "Bluetooth",
            link: APP_ROUTE.collection.byCate("ban-phim-bluetooth"),
            level: 2,
          },
          {
            key: "wireless",
            title: "Wireless",
            link: APP_ROUTE.collection.byCate("ban-phim-wireless"),
            level: 2,
          },
        ],
      },
      {
        key: "phu-kien-ban-phim-co",
        title: "Phụ kiện bàn phím cơ",
        link: APP_ROUTE.collection.byCate("keycaps"),
        level: 1,
        items: [
          {
            key: "keycaps",
            title: "Keycaps",
            link: APP_ROUTE.collection.byCate("keycaps"),
            level: 2,
          },
          {
            key: "dwarf-factory",
            title: "Dwarf Factory",
            link: APP_ROUTE.collection.byCate("keycap-dwarf-factory"),
            level: 2,
          },
          {
            key: "ke-tay",
            title: "Kê tay",
            link: APP_ROUTE.collection.byCate("ket-tay"),
            level: 2,
          },
        ],
      },
      {
        key: "ban-phim-rapid-trigger",
        title: "Bàn phím Rapid Trigger",
        link: APP_ROUTE.collection.byCate("ban-phim-rapid-trigger"),
        level: 1,
      },
    ],
  },
  {
    key: "chuot-lot-chuot",
    title: "Chuột + Lót chuột",
    link: APP_ROUTE.collection.byCate("chuot-may-tinh"),
    icon: "menu_mouse",
    items: [
      {
        key: "thuong-hieu-chuot",
        title: "Thương hiệu chuột",
        link: APP_ROUTE.collection.byCate("chuot-may-tinh"),
        level: 1,
        items: [
          {
            key: "logitech",
            title: "Logitech",
            link: APP_ROUTE.collection.byCate("chuot-logitech"),
            level: 2,
          },
          {
            key: "razer",
            title: "Razer",
            link: APP_ROUTE.collection.byCate("chuot-razer"),
            level: 2,
          },
          {
            key: "corsair",
            title: "Corsair",
            link: APP_ROUTE.collection.byCate("chuot-corsair"),
            level: 2,
          },
          {
            key: "pulsar",
            title: "Pulsar",
            link: APP_ROUTE.collection.byCate("chuot-pulsar"),
            level: 2,
          },
          {
            key: "microsoft",
            title: "Microsoft",
            link: APP_ROUTE.collection.byCate("chuot-microsoft"),
            level: 2,
          },
          {
            key: "dare-u",
            title: "Dare U",
            link: APP_ROUTE.collection.byCate("chuot-dare-u"),
            level: 2,
          },
        ],
      },
      {
        key: "thuong-hieu-lot-chuot-1",
        title: "Thương hiệu lót chuột",
        link: APP_ROUTE.collection.byCate("chuot-may-tinh"),
        level: 1,
        items: [
          {
            key: "asus",
            title: "ASUS",
            link: APP_ROUTE.collection.byCate("chuot-asus"),
            level: 2,
          },
          {
            key: "steelseries",
            title: "Steelseries",
            link: APP_ROUTE.collection.byCate("chuot-steelseries"),
            level: 2,
          },
          {
            key: "glorious",
            title: "Glorious",
            link: APP_ROUTE.collection.byCate("chuot-glorious"),
            level: 2,
          },
          {
            key: "rapoo",
            title: "Rapoo",
            link: APP_ROUTE.collection.byCate("chuot-rapoo"),
            level: 2,
          },
          {
            key: "hyperx",
            title: "HyperX",
            link: APP_ROUTE.collection.byCate("chuot-hyperx"),
            level: 2,
          },
          {
            key: "atk",
            title: "ATK",
            link: APP_ROUTE.collection.byCate("chuot-atk"),
            level: 2,
          },
        ],
      },
      {
        key: "chuot-theo-gia-tien",
        title: "Chuột theo giá tiền",
        link: APP_ROUTE.collection.byCate("chuot-may-tinh"),
        level: 1,
        items: [
          {
            key: "d-i-500-ngh-n",
            title: "Dưới 500 nghìn",
            link: APP_ROUTE.collection.byCate("chuot-duoi-500-nghin"),
            level: 2,
          },
          {
            key: "t-500-ngh-n-1-tri-u",
            title: "Từ 500 nghìn - 1 triệu",
            link: APP_ROUTE.collection.byCate("chuot-500-nghin-den-1-trieu"),
            level: 2,
          },
          {
            key: "t-1-tri-u-2-tri-u",
            title: "Từ 1 triệu - 2 triệu",
            link: APP_ROUTE.collection.byCate("chuot-1-den-2-trieu"),
            level: 2,
          },
          {
            key: "tr-n-2-tri-u-3-tri-u",
            title: "Trên 2 triệu - 3 triệu",
            link: APP_ROUTE.collection.byCate("chuot-2-den-3-trieu"),
            level: 2,
          },
          {
            key: "tr-n-3-tri-u",
            title: "Trên 3 triệu",
            link: APP_ROUTE.collection.byCate("chuot-tren-3-trieu"),
            level: 2,
          },
        ],
      },
      {
        key: "loai-chuot",
        title: "Loại Chuột",
        link: "#",
        level: 1,
        items: [
          {
            key: "chuot-choi-game",
            title: "Chuột chơi game",
            link: APP_ROUTE.collection.byCate("chuot-may-tinh/"),
            level: 2,
          },
          {
            key: "chu-t-v-n-ph-ng",
            title: "Chuột văn phòng",
            link: APP_ROUTE.collection.byCate("chuot-van-phong/"),
            level: 2,
          },
        ],
      },
      {
        key: "logitech",
        title: "Logitech",
        link: APP_ROUTE.collection.byCate("chuot-logitech"),
        level: 1,
        items: [
          {
            key: "logitech-gaming",
            title: "Logitech Gaming",
            link: APP_ROUTE.collection.byCate("chuot-logitech-gaming"),
            level: 2,
          },
          {
            key: "logitech-v-n-ph-ng",
            title: "Logitech Văn phòng",
            link: APP_ROUTE.collection.byCate("chuot-logitech-van-phong"),
            level: 2,
          },
        ],
      },
      {
        key: "thuong-hieu-lot-chuot-2",
        title: "Thương hiệu lót chuột",
        link: APP_ROUTE.collection.byCate("mouse-pad"),
        level: 1,
        items: [
          {
            key: "gearvn",
            title: "GEARVN",
            link: APP_ROUTE.collection.byCate("mouse-pad?hang=gearvn"),
            level: 2,
          },
          {
            key: "asus",
            title: "ASUS",
            link: APP_ROUTE.collection.byCate("lot-chuot-asus"),
            level: 2,
          },
          {
            key: "steelseries",
            title: "Steelseries",
            link: APP_ROUTE.collection.byCate("lot-chuot-steelseries"),
            level: 2,
          },
          {
            key: "dare-u",
            title: "Dare-U",
            link: APP_ROUTE.collection.byCate("lot-chuot-dare-u"),
            level: 2,
          },
          {
            key: "razer",
            title: "Razer",
            link: APP_ROUTE.collection.byCate("lot-chuot-razer"),
            level: 2,
          },
        ],
      },
      {
        key: "loai-lot-chuot",
        title: "Các loại lót chuột",
        link: APP_ROUTE.collection.byCate("mouse-pad"),
        level: 1,
        items: [
          {
            key: "mem",
            title: "Mềm",
            link: APP_ROUTE.collection.byCate("lot-chuot-mem"),
            level: 2,
          },
          {
            key: "cung",
            title: "Cứng",
            link: APP_ROUTE.collection.byCate("lot-chuot-cung"),
            level: 2,
          },
          {
            key: "day",
            title: "Dày",
            link: APP_ROUTE.collection.byCate("lot-chuot-day"),
            level: 2,
          },
          {
            key: "mong",
            title: "Mỏng",
            link: APP_ROUTE.collection.byCate("lot-chuot-mong"),
            level: 2,
          },
          {
            key: "vien-co-led",
            title: "Viền có led",
            link: APP_ROUTE.collection.byCate("lot-chuot-co-led"),
            level: 2,
          },
        ],
      },
      {
        key: "lot-chuot-theo-size",
        title: "Lót chuột theo size",
        link: APP_ROUTE.collection.byCate("mouse-pad"),
        level: 1,
        items: [
          {
            key: "nho",
            title: "Nhỏ",
            link: APP_ROUTE.collection.byCate("lot-chuot-kich-thuoc-nho"),
            level: 2,
          },
          {
            key: "vua",
            title: "Vừa",
            link: APP_ROUTE.collection.byCate("lot-chuot-kich-thuoc-vua"),
            level: 2,
          },
          {
            key: "lon",
            title: "Lớn",
            link: APP_ROUTE.collection.byCate("lot-chuot-kich-thuoc-lon"),
            level: 2,
          },
        ],
      },
    ],
  },
  {
    key: "tai-nghe",
    title: "Tai Nghe",
    link: APP_ROUTE.collection.byCate("tai-nghe-may-tinh"),
    icon: "menu_headphone",
    items: [
      {
        key: "thuong-hieu-tai-nghe",
        title: "Thương hiệu tai nghe",
        link: APP_ROUTE.collection.byCate("tai-nghe-may-tinh"),
        level: 1,
        items: [
          {
            key: "asus",
            title: "ASUS",
            link: APP_ROUTE.collection.byCate("tai-nghe-asus"),
            level: 2,
          },
          {
            key: "hyperx",
            title: "HyperX",
            link: APP_ROUTE.collection.byCate("tai-nghe-hyperx"),
            level: 2,
          },
          {
            key: "corsair",
            title: "Corsair",
            link: APP_ROUTE.collection.byCate("tai-nghe-corsair"),
            level: 2,
          },
          {
            key: "razer",
            title: "Razer",
            link: APP_ROUTE.collection.byCate("tai-nghe-razer"),
            level: 2,
          },
          {
            key: "onikuma",
            title: "ONIKUMA",
            link: APP_ROUTE.collection.byCate("tai-nghe-onikuma"),
            level: 2,
          },
        ],
      },
      {
        key: "thuong-hieu-tai-nghe-1",
        title: "Thương hiệu tai nghe",
        link: APP_ROUTE.collection.byCate("tai-nghe-may-tinh"),
        level: 1,
        items: [
          {
            key: "steelseries",
            title: "Steelseries",
            link: APP_ROUTE.collection.byCate("tai-nghe-steelseries"),
            level: 2,
          },
          {
            key: "rapoo",
            title: "Rapoo",
            link: APP_ROUTE.collection.byCate("tai-nghe-rapoo"),
            level: 2,
          },
          {
            key: "logitech",
            title: "Logitech",
            link: APP_ROUTE.collection.byCate("tai-nghe-logitech"),
            level: 2,
          },
          {
            key: "edifier",
            title: "Edifier",
            link: APP_ROUTE.collection.byCate("tai-nghe-edifier"),
            level: 2,
          },
        ],
      },
      {
        key: "tai-nghe-theo-gia",
        title: "Tai nghe theo giá",
        link: APP_ROUTE.collection.byCate("tai-nghe-may-tinh"),
        level: 1,
        items: [
          {
            key: "tai-nghe-duoi-1-trieu",
            title: "Tai nghe dưới 1 triệu",
            link: APP_ROUTE.collection.byCate("tai-nghe-duoi-1-trieu"),
            level: 2,
          },
          {
            key: "tai-nghe-1-trieu-den-2-trieu",
            title: "Tai nghe 1 triệu đến 2 triệu",
            link: APP_ROUTE.collection.byCate("tai-nghe-1-trieu-den-2-trieu"),
            level: 2,
          },
          {
            key: "tai-nghe-2-trieu-den-3-trieu",
            title: "Tai nghe 2 đến 3 triệu",
            link: APP_ROUTE.collection.byCate("tai-nghe-2-trieu-den-3-trieu"),
            level: 2,
          },
          {
            key: "tai-nghe-3-trieu-den-4-trieu",
            title: "Tai nghe 3 đến 4 triệu",
            link: APP_ROUTE.collection.byCate("tai-nghe-3-trieu-den-4-trieu"),
            level: 2,
          },
          {
            key: "tai-nghe-tren-4-trieu",
            title: "Tai nghe trên 4 triệu",
            link: APP_ROUTE.collection.byCate("tai-nghe-tren-4-trieu"),
            level: 2,
          },
        ],
      },
      {
        key: "kieu-ket-noi",
        title: "Kiểu kết nối",
        link: APP_ROUTE.collection.byCate("tai-nghe-may-tinh"),
        level: 1,
        items: [
          {
            key: "tai-nghe-wireless",
            title: "Tai nghe Wireless",
            link: APP_ROUTE.collection.byCate("tai-nghe-wireless"),
            level: 2,
          },
          {
            key: "tai-nghe-bluetooth",
            title: "Tai nghe Bluetooth",
            link: APP_ROUTE.collection.byCate("tai-nghe-gaming-bluetooth"),
            level: 2,
          },
        ],
      },
      {
        key: "ki-u-tai-nghe",
        title: "Kiểu tai nghe",
        link: APP_ROUTE.collection.byCate("tai-nghe-may-tinh"),
        level: 1,
        items: [
          {
            key: "tai-nghe-over-ear",
            title: "Tai nghe Over-ear",
            link: APP_ROUTE.collection.byCate("tai-nghe-over-ear"),
            level: 2,
          },
          {
            key: "tai-nghe-gaming-in-ear",
            title: "Tai nghe Gaming In-ear",
            link: APP_ROUTE.collection.byCate("tai-nghe-gaming-in-ear"),
            level: 2,
          },
        ],
      },
    ],
  },
  {
    key: "ghe-ban",
    title: "Ghế - Bàn",
    link: APP_ROUTE.collection.byCate("ghe-gia-tot/"),
    icon: "menu_gamingChair",
    items: [
      {
        key: "thuong-hieu-ghe-gaming",
        title: "Thương hiệu ghế Gaming",
        link: APP_ROUTE.page.bySlug("ghe-gaming-gia-re-gearvn"),
        level: 1,
        items: [
          {
            key: "corsair",
            title: "Corsair",
            link: APP_ROUTE.collection.byCate("ghe-corsair"),
            level: 2,
          },
          {
            key: "warrior",
            title: "Warrior",
            link: APP_ROUTE.collection.byCate("ghe-warrior"),
            level: 2,
          },
          {
            key: "e-dra",
            title: "E-DRA",
            link: APP_ROUTE.collection.byCate("ghe-e-dra"),
            level: 2,
          },
          {
            key: "dxracer",
            title: "DXRacer",
            link: APP_ROUTE.collection.byCate("ghe-dxracer"),
            level: 2,
          },
          {
            key: "cougar",
            title: "Cougar",
            link: APP_ROUTE.collection.byCate("cougar-chair"),
            level: 2,
          },
          {
            key: "akraing",
            title: "AKRaing",
            link: APP_ROUTE.collection.byCate("akracing"),
            level: 2,
          },
          {
            key: "razer",
            title: "Razer",
            link: APP_ROUTE.collection.byCate("ghe-gaming-razer"),
            level: 2,
          },
        ],
      },
      {
        key: "thuong-hieu-ghe-cth",
        title: "Thương hiệu ghế CTH",
        link: APP_ROUTE.collection.byCate("ghe-cong-thai-hoc"),
        level: 1,
        items: [
          {
            key: "warrior",
            title: "Warrior",
            link: APP_ROUTE.collection.byCate("ghe-cong-thai-hoc-warrior/"),
            level: 2,
          },
          {
            key: "sihoo",
            title: "Sihoo",
            link: APP_ROUTE.collection.byCate("ghe-sihoo"),
            level: 2,
          },
          {
            key: "e-dra",
            title: "E-Dra",
            link: APP_ROUTE.collection.byCate("ghe-e-dra"),
            level: 2,
          },
        ],
      },
      {
        key: "kieu-ghe",
        title: "Kiểu ghế",
        link: APP_ROUTE.page.bySlug("ghe-gaming-gia-re-gearvn"),
        level: 1,
        items: [
          {
            key: "ghe-cong-thai-hoc",
            title: "Ghế Công thái học",
            link: APP_ROUTE.collection.byCate("ghe-cong-thai-hoc"),
            level: 2,
          },
          {
            key: "ghe-gaming",
            title: "Ghế Gaming",
            link: APP_ROUTE.collection.byCate("ghe-gaming"),
            level: 2,
          },
        ],
      },
      {
        key: "ban-gaming",
        title: "Bàn Gaming",
        link: APP_ROUTE.collection.byCate("ban-gaming"),
        level: 1,
        items: [
          {
            key: "ban-gaming-dxracer",
            title: "Bàn Gaming DXRacer",
            link: APP_ROUTE.collection.byCate("ban-dxracer"),
            level: 2,
          },
          {
            key: "ban-gaming-e-dra",
            title: "Bàn Gaming E-Dra",
            link: APP_ROUTE.collection.byCate("ban-gaming-e-dra"),
            level: 2,
          },
          {
            key: "ban-gaming-warrior",
            title: "Bàn Gaming Warrior",
            link: APP_ROUTE.collection.byCate("ban-warrior"),
            level: 2,
          },
        ],
      },
      {
        key: "ban-cong-thai-hoc",
        title: "Bàn công thái học",
        link: APP_ROUTE.collection.byCate("ban-cong-thai-hoc"),
        level: 1,
        items: [
          {
            key: "ban-cth-warrior",
            title: "Bàn CTH Warrior",
            link: APP_ROUTE.collection.byCate("ban-cth-warrior"),
            level: 2,
          },
          {
            key: "phu-kien-ban-gh",
            title: "Phụ kiện bàn ghế",
            link: APP_ROUTE.collection.byCate("phu-kien-trang-tri"),
            level: 2,
          },
        ],
      },
      {
        key: "gia-tien",
        title: "Giá tiền",
        link: APP_ROUTE.page.bySlug("ghe-gaming-gia-re-gearvn"),
        level: 1,
        items: [
          {
            key: "d-i-5-tri-u",
            title: "Dưới 5 triệu",
            link: APP_ROUTE.collection.byCate("ghe-duoi-5-trieu"),
            level: 2,
          },
          {
            key: "t-5-n-10-tri-u",
            title: "Từ 5 đến 10 triệu",
            link: APP_ROUTE.collection.byCate("ghe-gaming-tu-5-10-trieu"),
            level: 2,
          },
          {
            key: "tr-n-10-tri-u",
            title: "Trên 10 triệu",
            link: APP_ROUTE.collection.byCate("ghe-tren-10-trieu"),
            level: 2,
          },
        ],
      },
    ],
  },
  {
    key: "phan-mem-mang",
    title: "Phần mềm, mạng",
    link: APP_ROUTE.collection.byCate("thiet-bi-mang"),
    icon: "menu_software",
    items: [
      {
        key: "hang-san-xuat-3",
        title: "Hãng sản xuất",
        link: APP_ROUTE.collection.byCate("thiet-bi-mang"),
        level: 1,
        items: [
          {
            key: "asus",
            title: "Asus",
            link: APP_ROUTE.collection.byCate("asus"),
            level: 2,
          },
          {
            key: "linksys",
            title: "LinkSys",
            link: APP_ROUTE.collection.byCate("linksys"),
            level: 2,
          },
          {
            key: "tp-link",
            title: "TP-LINK",
            link: APP_ROUTE.collection.byCate("tp-link"),
            level: 2,
          },
          {
            key: "mercusys",
            title: "Mercusys",
            link: APP_ROUTE.collection.byCate("mercusys"),
            level: 2,
          },
        ],
      },
      {
        key: "router-wi-fi",
        title: "Router Wi-Fi",
        link: APP_ROUTE.collection.byCate("thiet-bi-phat-wifi"),
        level: 1,
        items: [
          {
            key: "gaming",
            title: "Gaming",
            link: APP_ROUTE.collection.byCate("router-gaming"),
            level: 2,
          },
          {
            key: "pho-thong",
            title: "Phổ thông",
            link: APP_ROUTE.collection.byCate("router-pho-thong"),
            level: 2,
          },
          {
            key: "xuyen-tuong",
            title: "Xuyên tường",
            link: APP_ROUTE.collection.byCate("router-xuyen-tuong"),
            level: 2,
          },
          {
            key: "router-mesh-pack",
            title: "Router Mesh Pack",
            link: APP_ROUTE.collection.byCate("router-mesh-pack"),
            level: 2,
          },
          {
            key: "router-wifi-5",
            title: "Router WiFi 5",
            link: APP_ROUTE.collection.byCate("router-wifi-5"),
            level: 2,
          },
          {
            key: "router-wifi-6",
            title: "Router WiFi 6",
            link: APP_ROUTE.collection.byCate("router-ax-wifi-6"),
            level: 2,
          },
        ],
      },
      {
        key: "usb-thu-sang-card-mang",
        title: "USB Thu sóng - Card mạng",
        link: APP_ROUTE.collection.byCate("usb-card-mang"),
        level: 1,
        items: [
          {
            key: "usb-wifi",
            title: "Usb WiFi",
            link: APP_ROUTE.collection.byCate("usb-wifi"),
            level: 2,
          },
          {
            key: "card-wifi",
            title: "Card WiFi",
            link: APP_ROUTE.collection.byCate("card-mang-wifi"),
            level: 2,
          },
          {
            key: "day-cap-mang",
            title: "Dây cáp mạng",
            link: APP_ROUTE.collection.byCate("day-cap-mang-lan"),
            level: 2,
          },
        ],
      },
      {
        key: "microsoft-office",
        title: "Microsoft Office",
        link: APP_ROUTE.page.bySlug("microsoft-office-365"),
        level: 1,
        items: [
          {
            key: "microsoft-office-365",
            title: "Microsoft Office 365",
            link: APP_ROUTE.page.bySlug("microsoft-office-365"),
            level: 2,
          },
          {
            key: "office-home-2024",
            title: "Office Home 2024",
            link: APP_ROUTE.collection.byCate("office-home-2024"),
            level: 2,
          },
        ],
      },
      {
        key: "microsoft-windows",
        title: "Microsoft Windows",
        link: APP_ROUTE.collection.byCate("window"),
        level: 1,
        items: [
          {
            key: "windows-11-home",
            title: "Windows 11 Home",
            link: APP_ROUTE.product.bySlug(
              "phan-mem-windows-11-home-online-dwnld-nr-kw9-00664"
            ),
            level: 2,
          },
          {
            key: "windows-11-pro",
            title: "Windows 11 Pro",
            link: APP_ROUTE.product.bySlug(
              "phan-mem-windows-11-pro-online-dwnld-nr-fqc-10572"
            ),
            level: 2,
          },
        ],
      },
    ],
  },
  {
    key: "handheld-console",
    title: "Handheld, Console",
    link: APP_ROUTE.collection.byCate("may-choi-game"),
    icon: "menu_gameController",
    items: [
      {
        key: "handheld-pc",
        title: "Handheld PC",
        link: APP_ROUTE.collection.byCate("may-choi-game"),
        level: 1,
        items: [
          {
            key: "rog-ally",
            title: "Rog Ally",
            link: APP_ROUTE.collection.byCate("may-choi-game-cam-tay-asus"),
            level: 2,
          },
          {
            key: "msi-claw",
            title: "MSI Claw",
            link: APP_ROUTE.product.bySlug("may-choi-game-msi-claw-a1m"),
            level: 2,
          },
          {
            key: "legion-go",
            title: "Legion Go",
            link: APP_ROUTE.product.bySlug(
              "may-choi-game-cam-tay-lenovo-legion-go"
            ),
            level: 2,
          },
        ],
      },
      {
        key: "tay-cam",
        title: "Tay cầm",
        link: APP_ROUTE.collection.byCate("tay-cam-vo-lang"),
        level: 1,
        items: [
          {
            key: "tay-cam-playstation",
            title: "Tay cầm Playstation",
            link: APP_ROUTE.collection.byCate("tay-cam-msi/"),
            level: 2,
          },
          {
            key: "tay-cam-rapoo",
            title: "Tay cầm Rapoo",
            link: APP_ROUTE.collection.byCate("tay-cam-choi-game/?hang=rapoo"),
            level: 2,
          },
          {
            key: "tay-cam-dareu",
            title: "Tay cầm DareU",
            link: APP_ROUTE.collection.byCate("tay-cam-choi-game/?hang=dareu"),
            level: 2,
          },
          {
            key: "tay-cam-xem-tat-ca",
            title: "Xem tất cả",
            link: APP_ROUTE.collection.byCate("tay-cam-vo-lang"),
            level: 2,
          },
        ],
      },
      {
        key: "vo-lang-lai-xe-may-bay",
        title: "Vô lăng lái xe, máy bay",
        link: APP_ROUTE.collection.byCate("tay-cam-vo-lang"),
        level: 1,
      },
      {
        key: "sony-playstation",
        title: "Sony Playstation",
        link: APP_ROUTE.collection.byCate("sony-playstation"),
        level: 1,
        items: [
          {
            key: "sony-ps5-may-chinh-hang",
            title: "Sony PS5 (Máy) chính hãng",
            link: APP_ROUTE.collection.byCate("sony-playstation-5"),
            level: 2,
          },
          {
            key: "tay-cam-chinh-hang",
            title: "Tay cầm chính hãng",
            link: APP_ROUTE.collection.byCate("tay-cam-choi-game"),
            level: 2,
          },
        ],
      },
    ],
  },
  {
    key: "phu-kien-hub-sac-cap",
    title: "Phụ kiện (Hub, sạc, cáp..)",
    link: APP_ROUTE.collection.byCate("phu-kien"),
    icon: "menu_chargingCable",
    items: [
      {
        key: "hub-sac-cap",
        title: "Hub, sạc, cáp",
        link: APP_ROUTE.collection.byCate("phu-kien"),
        level: 1,
        items: [
          {
            key: "hub-chuyen-doi",
            title: "Hub chuyển đổi",
            link: APP_ROUTE.collection.byCate(
              "phu-kien/?loaisanpham=hubcongchuyen"
            ),
            level: 2,
          },
          {
            key: "day-cap",
            title: "Dây cáp",
            link: APP_ROUTE.collection.byCate("phu-kien/?loaisanpham=capsac"),
            level: 2,
          },
          {
            key: "cu-sac",
            title: "Củ sạc",
            link: APP_ROUTE.collection.byCate("phu-kien/?loaisanpham=sac"),
            level: 2,
          },
        ],
      },
      {
        key: "quat-cam-tay-quat-mini",
        title: "Quạt cầm tay, Quạt mini",
        link: APP_ROUTE.collection.byCate("quat-cam-tay-quat-mini"),
        level: 1,
        items: [
          {
            key: "jisulife",
            title: "Jisulife",
            link: APP_ROUTE.collection.byCate("quat-jisulife"),
            level: 2,
          },
        ],
      },
      {
        key: "phu-kien-elgato",
        title: "Phụ kiện Elgato",
        link: APP_ROUTE.collection.byCate("phu-kien-elgato"),
        level: 1,
      },
      {
        key: "sac-du-phong",
        title: "Sạc dự phòng",
        link: APP_ROUTE.collection.byCate("sac-du-phong"),
        level: 1,
      },
    ],
  },
  {
    key: "dich-vu-thong-tin-khac",
    title: "Dịch vụ và thông tin khác",
    link: "#",
    icon: "menu_gift",
    items: [
      {
        key: "dich-vu",
        title: "Dịch vụ",
        link: "#",
        level: 1,
        items: [
          {
            key: "dich-vu-ky-thuat-tai-nha",
            title: "Dịch vụ kỹ thuật tại nhà",
            link: APP_ROUTE.page.bySlug("dich-vu-ky-thuat-tai-nha"),
            level: 2,
          },
          {
            key: "dich-vu-sua-chua",
            title: "Dịch vụ sửa chữa",
            link: APP_ROUTE.page.bySlug("dich-vu-sua-chua-gearvn-nese"),
            level: 2,
          },
        ],
      },
      {
        key: "chinh-sach",
        title: "Chính sách",
        link: "#",
        level: 1,
        items: [
          {
            key: "chinh-sach-bang-gia-thu-vga-qua-su-dung",
            title: "Chính sách & bảng giá thu VGA qua sử dụng",
            link: APP_ROUTE.page.bySlug(
              "gearvn-chinh-sach-bang-gia-thu-vga-qua-su-dung"
            ),
            level: 2,
          },
          {
            key: "chinh-sach-bao-hanh",
            title: "Chính sách bảo hành",
            link: APP_ROUTE.page.bySlug("bao-hanh"),
            level: 2,
          },
          {
            key: "chinh-sach-giao-hang",
            title: "Chính sách giao hàng",
            link: APP_ROUTE.page.bySlug("chinh-sach-van-chuyen"),
            level: 2,
          },
          {
            key: "chinh-sach-doi-tra",
            title: "Chính sách đổi trả",
            link: APP_ROUTE.page.bySlug("chinh-sach-doi-tra"),
            level: 2,
          },
        ],
      },
      {
        key: "build-pc",
        title: "Build PC",
        link: APP_ROUTE.page.bySlug("build-pc"),
        level: 1,
      },
    ],
  },
];
