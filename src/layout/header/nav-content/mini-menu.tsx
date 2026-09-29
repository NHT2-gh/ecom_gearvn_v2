import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getIcon } from "@/utils/icon-map";
import { ChevronDown, X } from "lucide-react";
import { NavContent, NavItem } from "@/_mocks";
import { Typography } from "@/components/v2/ui/typography";

interface MiniMenuProps {
  nav: NavContent[];
  setOpen: (open: boolean) => void;
}

export default function MiniMenu({ nav, setOpen }: MiniMenuProps) {
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(
    new Set(),
  );

  const handleToggleExpansion = React.useCallback((key: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  }, []);

  const handleClose = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <nav
      className="fixed top-0 left-0 z-[110] w-[calc(100vw-3rem)] min-h-screen max-h-fit bg-white"
      role="navigation"
      aria-label="Mini menu for mobile"
    >
      <header className="bg-accent-primary h-[3rem] flex items-center justify-between px-4 py-[0.9375rem] text-white">
        <Typography
          level="body-14"
          fontWeight="semibold"
          color="primary-white"
          className="text-balance text-left uppercase"
        >
          Danh mục sản phẩm
        </Typography>

        <button
          onClick={handleClose}
          className="shrink-0 p-1 hover:bg-white/10 rounded transition-colors"
          aria-label="Đóng menu"
        >
          <X size={24} strokeWidth={2} />
        </button>
      </header>

      <div className="max-h-[calc(100vh-3rem)] overflow-y-scroll scrollbar-hidden">
        <ul>
          {nav.map((navLink) => (
            <NavMenuItem
              key={navLink.key}
              navLink={navLink}
              isExpanded={expandedItems.has(navLink.key)}
              onToggleExpansion={handleToggleExpansion}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}

interface NavMenuItemProps {
  navLink: NavContent;
  isExpanded: boolean;
  onToggleExpansion: (key: string) => void;
}

const NavMenuItem = React.memo(
  ({ navLink, isExpanded, onToggleExpansion }: NavMenuItemProps) => {
    const IconComponent = getIcon(navLink.icon);
    const hasSubItems = navLink.items && navLink.items.length > 0;

    const handleToggle = React.useCallback(() => {
      if (hasSubItems) {
        onToggleExpansion(navLink.key);
      }
    }, [hasSubItems, onToggleExpansion, navLink.key]);

    return (
      <li className="w-full h-fit relative border-b border-input-bg-active">
        <div className="inline-flex w-full items-center justify-between pr-4 py-3 hover:text-accent-primary">
          <Link
            className="inline-flex  items-center gap-2 w-fit h-full uppercase pl-5"
            href={navLink.link || "#"}
          >
            <IconComponent
              size={20}
              strokeWidth={1}
              className="shrink-0 text-[1.5rem]"
            />

            <Typography
              level="body-14"
              className="!text-[0.8125rem] !font-normal"
            >
              {navLink.title}
            </Typography>
          </Link>

          {hasSubItems && (
            <button
              onClick={handleToggle}
              className="shrink-0 ml-auto p-1 hover:bg-gray-100/10 rounded transition-colors"
              aria-expanded={isExpanded}
              aria-label={`${isExpanded ? "Thu gọn" : "Mở rộng"} ${
                navLink.title
              }`}
            >
              <ChevronDown
                size={16}
                strokeWidth={3}
                className={cn("transition-transform", {
                  "rotate-180": isExpanded,
                })}
              />
            </button>
          )}
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-[0.5s] ease-in-out",
            {
              "max-h-0": !isExpanded,
              "max-h-[2000px]": isExpanded,
            },
          )}
        >
          {hasSubItems && <SubMenu subMenu={navLink.items || []} />}
        </div>
      </li>
    );
  },
);

NavMenuItem.displayName = "NavMenuItem";

interface SubMenuProps {
  subMenu: NavItem[];
}

const SubMenu = React.memo(({ subMenu }: SubMenuProps) => {
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(
    new Set(),
  );

  const handleToggleExpansion = React.useCallback((key: string) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  }, []);

  if (!subMenu.length) return null;

  const level = subMenu[0]?.level || 1;

  return (
    <ul
      className={cn("", {
        "[list-style-type:circle]": level === 2,
      })}
      style={{
        paddingLeft: `calc(${level} * 2rem)`,
      }}
      role="group"
    >
      {subMenu.map((item) => (
        <SubMenuItem
          key={item.key}
          item={item}
          isExpanded={expandedItems.has(item.key)}
          onToggleExpansion={handleToggleExpansion}
        />
      ))}
    </ul>
  );
});

SubMenu.displayName = "SubMenu";

interface SubMenuItemProps {
  item: NavItem;
  isExpanded: boolean;
  onToggleExpansion: (key: string) => void;
}

const SubMenuItem = React.memo(
  ({ item, isExpanded, onToggleExpansion }: SubMenuItemProps) => {
    const hasSubItems = item.items && item.items.length > 0;

    const handleToggle = React.useCallback(() => {
      if (hasSubItems) {
        onToggleExpansion(item.key);
      }
    }, [hasSubItems, onToggleExpansion, item.key]);

    return (
      <li>
        <div className="flex items-center justify-between pr-4 py-3 hover:text-accent-primary">
          <Link href={item.link || "#"} className="flex-1">
            {item.title}
          </Link>

          {hasSubItems && (
            <button
              onClick={handleToggle}
              className="shrink-0 ml-auto p-1 hover:bg-gray-100/10 rounded transition-colors"
              aria-expanded={isExpanded}
              aria-label={`${isExpanded ? "Thu gọn" : "Mở rộng"} ${item.title}`}
            >
              <ChevronDown
                size={16}
                strokeWidth={3}
                className={cn("transition-transform", {
                  "rotate-180": isExpanded,
                })}
              />
            </button>
          )}
        </div>

        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out",
            {
              "max-h-0": !isExpanded,
              "max-h-[2000px]": isExpanded,
            },
          )}
        >
          {hasSubItems && <SubMenu subMenu={item.items || []} />}
        </div>
      </li>
    );
  },
);

SubMenuItem.displayName = "SubMenuItem";
