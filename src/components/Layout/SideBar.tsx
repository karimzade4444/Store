import { ChartNoAxesGantt, LayoutDashboard, ShoppingCart } from "lucide-react";
import type { NavItems } from "../types/types";
import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";

const SideBar = () => {
  const location = useLocation();
  console.log(location);
  const navigationItems: NavItems[] = [
    {
      icon: <LayoutDashboard />,
      link: "/adminpanel",
      id: 1,
      name: "Dashboard",
    },
    {
      icon: <ChartNoAxesGantt />,
      link: "/",
      id: 2,
      name: "Products",
    },
    {
      icon: <ShoppingCart />,
      link: "/",
      id:3,
      name: "Orders"
    },
  ];

  return (
    <div className="max-w-25 w-fit min-h-screen bg-foreground fixed top-0 left-0">
      <div className=" py-7 flex justify-center items-center flex-col gap-5">
        {navigationItems.map((el) => (
          <Link to={el.link} key={el.id}>
            <div
              className={cn(
                " flex justify-center items-center flex-col ",
                el.link == location.pathname
                  ? "text-primary-foreground border-l-4  px-5 flex justify-center items-center flex-col "
                  : "hover:text-primary-foreground/40 text-primary-foreground/70 duration-300 flex justify-center items-center flex-col  ",
              )}
            >
              {el.icon}
              <p>{el.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
