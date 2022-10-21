import AccountIcon from "@assets/icons/menus/account.svg";
import AddonIcon from "@assets/icons/menus/addon.svg";
import CounterIcon from "@assets/icons/menus/counter.svg";
import CouponIcon from "@assets/icons/menus/coupon.svg";
import DashboardIcon from "@assets/icons/menus/dashboard.svg";
import DiningIcon from "@assets/icons/menus/dining.svg";
import InfoIcon from "@assets/icons/menus/info.svg";
import InventoryIcon from "@assets/icons/menus/inventory.svg";
import MenuIcon from "@assets/icons/menus/menu.svg";
import OrdersIcon from "@assets/icons/menus/orders.svg";
import PrinterIcon from "@assets/icons/menus/printer.svg";
import PromotionIcon from "@assets/icons/menus/promotion.svg";
import ReportsIcon from "@assets/icons/menus/reports.svg";
import SettingIcon from "@assets/icons/menus/setting.svg";
import SpecialsIcon from "@assets/icons/menus/specials.svg";
import TableIcon from "@assets/icons/menus/table.svg";
import UpsellIcon from "@assets/icons/menus/upsell.svg";
import UsersIcon from "@assets/icons/menus/users.svg";
import VenueIcon from "@assets/icons/menus/venue.svg";

export const navigations = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: DashboardIcon,
    iconStyle: "bg-primary",
  },
  {
    name: "Orders",
    href: "/orders",
    icon: OrdersIcon,
    iconStyle: "bg-orange",
  },
  {
    name: "Counters",
    href: "/counters",
    icon: CounterIcon,
    iconStyle: "bg-blue",
  },
  {
    name: "Your Menu",
    href: "/menu",
    icon: MenuIcon,
    iconStyle: "bg-primary-light",
  },
  {
    name: "Promotions",
    href: "/promotions",
    icon: PromotionIcon,
    iconStyle: "bg-green-pear",
  },
  {
    name: "Inventory",
    href: "/inventory",
    icon: InventoryIcon,
    iconStyle: "bg-heather",
  },
  {
    name: "Reports",
    href: "/reports",
    icon: ReportsIcon,
    iconStyle: "bg-brown",
  },
  {
    name: "Account",
    href: "/accounts",
    icon: AccountIcon,
    iconStyle: "bg-turquoise",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: SettingIcon,
    iconStyle: "bg-primary",
  },
];

export const mobileNavigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: DashboardIcon,
    iconStyle: "bg-primary",
  },
  {
    name: "Orders",
    href: "/orders",
    icon: OrdersIcon,
    iconStyle: "bg-orange",
    description: "Manage order details.",
  },
  {
    name: "Counters",
    href: "/counters",
    icon: CounterIcon,
    iconStyle: "bg-blue",
    description: "Manage counters.",
  },
  {
    name: "Your Menu",
    href: "/menu",
    icon: MenuIcon,
    iconStyle: "bg-primary-light",
    description: "Manage & update your menu.",
    children: [
      {
        name: "Categories",
        href: "/menu/categories",
        icon: MenuIcon,
        iconStyle: "bg-primary-light",
        description: "Manage & update your menu",
      },
      {
        name: "Add-ons",
        href: "/menu/addons",
        icon: AddonIcon,
        iconStyle: "bg-honey",
        description: "Manage & update your add-ons",
      },
    ],
  },
  {
    name: "Promotions",
    href: "/promotions",
    icon: PromotionIcon,
    iconStyle: "bg-green-pear",
    children: [
      {
        name: "Promotions",
        href: "/promotions/promotions",
        icon: PromotionIcon,
        iconStyle: "bg-green-pear",
        description: "Timed banners to promote your events such as Happy Hour.",
      },
      {
        name: "Specials",
        href: "/promotions/specials",
        icon: SpecialsIcon,
        iconStyle: "bg-purple",
        description: "Manage items on specials.",
      },
      {
        name: "Coupons",
        href: "/promotions/coupons",
        icon: CouponIcon,
        iconStyle: "bg-blue-light",
        description: "Generate $ or % discounts for your customers.",
      },
      {
        name: "Upsells",
        href: "/promotions/upsells",
        icon: UpsellIcon,
        iconStyle: "bg-yellow",
        description: "Upsell products in the checkout process.",
      },
    ],
  },
  {
    name: "Inventory",
    href: "/inventory",
    icon: InventoryIcon,
    iconStyle: "bg-heather",
    description: "Manage stock.",
  },
  {
    name: "Reports",
    href: "/reports",
    icon: ReportsIcon,
    iconStyle: "bg-brown",
    description: "View reports",
  },
  {
    name: "Account",
    href: "/accounts",
    icon: AccountIcon,
    iconStyle: "bg-turquoise",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: SettingIcon,
    iconStyle: "bg-primary",
    children: [
      {
        name: "Venue Profile",
        href: "/settings/profile",
        icon: VenueIcon,
        iconStyle: "bg-fuscia",
        description: "Update contact details, logo, opening hours, etc.",
      },
      {
        name: "Venue Settings",
        href: "/settings/settings",
        icon: InfoIcon,
        iconStyle: "bg-green-light",
        description: "Manage ABN, tax rate,t venue types...",
      },
      {
        name: "Tables",
        href: "/settings/tables",
        icon: TableIcon,
        iconStyle: "bg-honey",
        description: "Manage tables.",
      },
      {
        name: "Counters",
        href: "/settings/counters",
        icon: PrinterIcon,
        iconStyle: "bg-purple",
        description: "Manage counters.",
      },
      {
        name: "Users",
        href: "/settings/users",
        icon: UsersIcon,
        iconStyle: "bg-turquoise",
        description: "Manage users.",
      },
    ],
  },
];
