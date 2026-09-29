import React from "react";

import {
  SVGEyeClock,
  SVGGVNLogo,
  SVGLaptop,
  SVGCPU,
  SVGRAM,
  SVGSSD,
  SVGVGA,
  SVGScreen,
  SVGHz,
  SVGLed,
  SVGConnect,
  SVGPin,
  SVGPlane,
  SVGRes,
  SVGZalo,
  SVGFacebook,
  SVGTiktok,
  SVGYoutube,
  SVGTagSale,
  SVGCoins,
  SVGTruck,
  SVGCheck,
  SVGCartChecked,
  SVGComplete,
  SVGPayment,
  SVGInfoUser,
  SVGLaptopGaming,
  SVGKeyboard,
  SVGMouse,
  SVGLoudspeaker,
  SVGPC,
  SVGScreenMenu,
  SVGHeadphone,
  SVGGamingChair,
  SVGSoftware,
  SVGGameController,
  SVGGiftMenu,
  SVGRamMenu,
  SVGSayHi,
} from "@/assets/svgs";
import {
  SVGCase,
  SVGChargingCable,
  SVGCheckBadge,
  SVGInformationCircle,
  SVGMain,
  SVGShoppingCart,
  SVGSpecHz,
  SVGSpecResolution,
  SVGSpecScreen,
  SVGTrash,
} from "@/assets/svgs/v2";
import {
  Menu,
  Search,
  Headset,
  MapPin,
  ClipboardClock,
  LogOut,
  ArrowRight,
  ChevronRight,
  Newspaper,
  Wrench,
  CreditCard,
  ShieldCheck,
  Truck,
  Package,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";
import {
  SparklesIcon,
  TagIcon,
  NewspaperIcon,
  WrenchIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

// Common interface for both Lucide and custom SVG components
export interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  colorstyle?: "dark" | "light";
}

export const iconMap = {
  // Lucide Icons
  menu: Menu,
  search: Search,
  headset: Headset,
  mapPin: MapPin,
  clipboardClock: ClipboardClock,
  // shoppingCart: ShoppingCart,
  logout: LogOut,
  arrowRight: ArrowRight,
  chevronRight: ChevronRight,
  newspaper: Newspaper,
  wrench: Wrench,
  creditCard: CreditCard,
  shieldCheck: ShieldCheck,
  clockLucide: Clock,
  packageLucide: Package,
  truckLucide: Truck,
  checkLucide: CheckCircle,
  cancelLucide: XCircle,

  //SVG Components
  eyeClock: SVGEyeClock,
  sayHi: SVGSayHi,
  logo: SVGGVNLogo,
  coins: SVGCoins,
  truck: SVGTruck,
  check: SVGCheck,

  shoppingCart: SVGShoppingCart,
  infoCircle: SVGInformationCircle,
  checkBadge: SVGCheckBadge,
  trash: SVGTrash,

  // Spec Product
  vga: SVGVGA,
  main: SVGMain,
  ram: SVGRAM,
  ssd: SVGSSD,
  cpu: SVGCPU,
  lcd: SVGScreen,
  hz: SVGHz,
  led: SVGLed,
  connect: SVGConnect,
  pin: SVGPin,
  panel: SVGPlane,
  resolution: SVGRes,

  // Social
  facebook: SVGFacebook,
  tiktok: SVGTiktok,
  youtube: SVGYoutube,
  zalo: SVGZalo,

  //V2

  // Icon Spec Product
  spec_hz: SVGSpecHz,
  spec_screen: SVGSpecScreen,
  spec_resolution: SVGSpecResolution,

  // Mega Menu Icons
  menu_laptop: SVGLaptop,
  menu_laptopGaming: SVGLaptopGaming,
  menu_pc: SVGPC,
  menu_main: SVGMain,
  menu_keyboard: SVGKeyboard,
  menu_mouse: SVGMouse,
  menu_loudspeaker: SVGLoudspeaker,
  menu_screen: SVGScreenMenu,
  menu_headphone: SVGHeadphone,
  menu_gamingChair: SVGGamingChair,
  menu_software: SVGSoftware,
  menu_gameController: SVGGameController,
  menu_chargingCable: SVGChargingCable,
  menu_gift: SVGGiftMenu,
  menu_ram: SVGRamMenu,
  menu_case: SVGCase,

  //HeroIcons
  sparklesOuline: SparklesIcon,
  tagSaleOuline: TagIcon,
  newsPaperOuline: NewspaperIcon,
  wrenchOuline: WrenchIcon,
  shieldCheckOuline: ShieldCheckIcon,
} as const;

export type IconKey = keyof typeof iconMap;

export function getIcon(iconKey: IconKey): React.ComponentType<SVGProps> {
  return iconMap[iconKey];
}
