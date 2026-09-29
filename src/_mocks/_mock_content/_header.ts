import { APP_ROUTE } from "@/config/app_route";
import { IconKey } from "@/utils/icon-map";

export interface Button {
  key: string;
  title: string;
  icon: IconKey;
  badge?: string | number | boolean;
}

export interface ActionButton extends Button {
  redirectUrl?: string;
}

export interface LinkButton extends Button {
  link: string;
}

export const _actionButtons: ActionButton[] = [
  {
    key: "showroom",
    title: "Hệ thống\nShowroom",
    icon: "mapPin",
    redirectUrl: APP_ROUTE.page.bySlug("he-thong-cua-hang-gearvn"),
  },
  {
    key: "tracking_order",
    title: "Tra cứu\nđơn hàng",
    icon: "clipboardClock",
    redirectUrl: APP_ROUTE.account.index("order-management"),
  },
];
