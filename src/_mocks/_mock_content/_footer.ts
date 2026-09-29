import { APP_ROUTE } from "@/config/app_route";
import { IconKey } from "@/utils/icon-map";

export interface FooterContent {
  navContent: {
    title: string;
    subtitle?: string;
    items: {
      title: string;
      showLink?: boolean;
      link?: string;
      type?: "call" | "email";
    }[];
  }[];

  transports: {
    name: string;
    logoUrl: string;
  }[];

  paymentMethods: {
    name: string;
    logoUrl: string;
  }[];

  socialsContact: SocialContactItem[];
}

export interface SocialContactItem {
  name: string;
  link: string;
  icon: IconKey;
}

export const _footerContent: FooterContent = {
  navContent: [
    {
      title: "VỀ GEARVN",
      items: [
        {
          title: "Giới thiệu",
          link: APP_ROUTE.page.bySlug("gioi-thieu-gearvn"),
        },
        {
          title: "Tuyển dụng",
          link: "https://tuyendung.gearvn.com",
        },
        {
          title: "Liên hệ",
          link: APP_ROUTE.page.bySlug("lien-he"),
        },
      ],
    },
    {
      title: "CHÍNH SÁCH",
      items: [
        {
          title: "Chính sách bảo hành",
          link: APP_ROUTE.page.bySlug("chinh-sach-bao-hanh"),
        },
        {
          title: "Chính sách giao hàng",
          link: APP_ROUTE.page.bySlug("chinh-sach-giao-hang"),
        },
        {
          title: "Chính sách bảo mật",
          link: APP_ROUTE.page.bySlug("chinh-sach-bao-mat"),
        },
      ],
    },
    {
      title: "THÔNG TIN",
      items: [
        {
          title: "Hệ thống cửa hàng",
          link: APP_ROUTE.page.bySlug("he-thong-cua-hang-gearvn"),
        },
        {
          title: "Hướng dẫn mua hàng",
          link: APP_ROUTE.page.bySlug("huong-dan-mua-hang"),
        },
        {
          title: "Hệ thống thanh toán",
          link: APP_ROUTE.page.bySlug("he-thong-thanh-toan-gearvn"),
        },
        {
          title: "Hệ thống trả góp",
          link: APP_ROUTE.page.bySlug("he-thong-tra-gop"),
        },
        {
          title: "Tra cứu địa chỉ bảo hành",
          link: "https://gearvn.com/pages/trung-tam-ho-tro-tra-cuu-thong-tin-bao-hanh-san-pham-chinh-hang",
        },
        {
          title: "Build PC",
          link: APP_ROUTE.page.bySlug("build-pc"),
        },
      ],
    },

    {
      title: "TỔNG ĐÀI HỖ TRỢ",
      subtitle: "(8:00 - 21:00)",
      items: [
        {
          title: "Mua hàng: ",
          showLink: true,
          type: "call",
          link: "1900.5301",
        },
        {
          title: "Bảo hành: ",
          showLink: true,
          type: "call",
          link: "1900.5325",
        },
        {
          title: "Khiếu nại: ",
          showLink: true,
          type: "call",
          link: "1800.6173",
        },
        {
          title: "Email: ",
          showLink: true,
          type: "email",
          link: "cskh@gearvn.com",
        },
      ],
    },
  ],
  transports: [
    {
      name: "GHN",
      logoUrl: "/images/ghn-logo.webp",
    },
    {
      name: "EMS",
      logoUrl: "/images/ems-logo.webp",
    },
    {
      name: "GVN",
      logoUrl: "/images/gvn-logo.webp",
    },
    {
      name: "Futa Phương Trang",
      logoUrl: "/images/futa-logo.webp",
    },
  ],
  paymentMethods: [
    {
      name: "Internet Banking",
      logoUrl: "/images/online-banking-logo.webp",
    },
    {
      name: "JCB",
      logoUrl: "/images/jcb-logo.webp",
    },
    {
      name: "MasterCard",
      logoUrl: "/images/mastercard-logo.webp",
    },
    {
      name: "Zalo Pay",
      logoUrl: "/images/zalopay-logo.webp",
    },
    {
      name: "Cash",
      logoUrl: "/images/cash-on-delivery-logo.webp",
    },
    {
      name: "Trả góp",
      logoUrl: "/images/tra-gop-logo.webp",
    },
    {
      name: "Visa",
      logoUrl: "/images/visa-logo.webp",
    },
    {
      name: "Momo",
      logoUrl: "/images/momo-logo.webp",
    },
  ],
  socialsContact: [
    {
      name: "Facebook",
      icon: "facebook",
      link: "https://www.facebook.com/gearvnhcm",
    },
    {
      name: "Tiktok",
      icon: "tiktok",
      link: "https://www.tiktok.com/@gearvn.store",
    },
    {
      name: "Youtube",
      icon: "youtube",
      link: "https://bit.ly/GearvnVideos",
    },
    {
      name: "Zalo",
      icon: "zalo",
      link: "https://zalo.me/450955578960321912",
    },
  ],
};
