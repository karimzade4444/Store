import { ChartNoAxesGantt, LayoutDashboard } from "lucide-react";
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
    },
    {
      icon: <ChartNoAxesGantt />,
      link: "/products",
      id: 2,
    },
  ];

  return (
    <div className="max-w-25 w-fit min-h-screen bg-foreground">
      <div className=" py-7 flex justify-center items-center flex-col gap-5">
        {navigationItems.map((el) => (
          <Link to={el.link} key={el.id}>
            <div
              className={cn(
                "hover:text-primary-foreground/40 ",
                el.link == location.pathname
                  ? "text-primary-foreground border-l-4  px-5 "
                  : "text-primary-foreground/70 duration-300",
              )}
            >
              {el.icon}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
