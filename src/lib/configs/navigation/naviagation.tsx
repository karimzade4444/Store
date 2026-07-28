import type { NavItems } from "@/components/types/types";
import { Role, type Actions } from "../rolePermissions";
import {
  ChartNoAxesGantt,
  LayoutDashboard,
  LogOut,
  ShoppingCart,
} from "lucide-react";



export const getSideBarConfig = (): NavItems[] => [
  {
    icon: <LayoutDashboard />,
    link: "/adminpanel",
    id: 1,
    name: "Dashboard",
    roles: [Role.Admin],
  },
  {
    icon: <ChartNoAxesGantt />,
    link: "/",
    id: 2,
    name: "Products",
  },
  {
    icon: <ShoppingCart />,
    link: "/orders",
    id: 3,
    name: "Orders",
  },
];

export const getVisibleNavigation = () => {
  const config = getSideBarConfig();
  return config.filter((items) => {
    if (items.roles) {
    }
  });
};
