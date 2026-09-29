import { APP_ROUTE } from "@/config/app_route";
import { LinkButton } from "./_header";

export const _accountPopoverContent: LinkButton[] = [
  {
    key: "my_order",
    title: "Đơn hàng của tôi",
    icon: "clipboardClock",
    link: APP_ROUTE.account.index("order-management"),
  },
  {
    key: "seen_recent",
    title: "Đã xem gần đây",
    icon: "eyeClock",
    link: APP_ROUTE.account.index("viewed-products"),
  },
  {
    key: "logout",
    title: "Đăng xuất",
    icon: "logout",
    link: APP_ROUTE.account.logout(),
  },
];
