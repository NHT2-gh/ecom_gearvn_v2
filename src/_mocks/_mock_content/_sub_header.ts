import { APP_ROUTE } from "@/config/app_route";
import { LinkButton } from "./_header";

export const _subHeaderContent: LinkButton[] = [
  {
    key: "build-pc",
    title: "Tất cả danh mục khuyến mãi",
    icon: "tagSaleOuline",
    link: APP_ROUTE.page.bySlug("build-pc"),
  },
  {
    key: "tech-news",
    title: "Tin tức, review sản phẩm",
    icon: "newsPaperOuline",
    link: APP_ROUTE.blog.index(),
  },
  {
    key: "dich-vu-ky-thuat-tai-nha",
    title: "Dịch vụ kỹ thuật tại nhà",
    icon: "wrenchOuline",
    link: APP_ROUTE.page.bySlug("dich-vu-ky-thuat-tai-nha"),
  },
  {
    key: "thu-cu-doi-moi",
    title: "Thu cũ đổi mới",
    icon: "sparklesOuline",
    link: APP_ROUTE.page.bySlug(
      "gearvn-chinh-sach-bang-gia-thu-vga-qua-su-dung"
    ),
  },
  {
    key: "bao-hanh",
    title: "Tra cứu bảo hành",
    icon: "shieldCheckOuline",
    link: APP_ROUTE.page.bySlug("tra-cuu-bao-hanh"),
  },
];
