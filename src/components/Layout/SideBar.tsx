import {

  LogOut,

} from "lucide-react";
import type { NavItems } from "../types/types";
import { Link, useLocation, useNavigate } from "react-router";
import { cn } from "@/lib/utils";
import Cookies from "js-cookie";
import { getSideBarConfig } from "@/lib/configs/navigation/naviagation";
import { useCan } from "@/lib/configs/hooks/useCan";

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { hasRoles } = useCan();
  const navigationItemsConfig: NavItems[] = getSideBarConfig();
  const navigationItems = navigationItemsConfig.filter((items) =>
    hasRoles(items.roles),
  );

  const handleLogout = () => {
    Cookies.remove("token");
    navigate("/log");
  };

  return (
    <div className="max-w-30 w-fit min-h-screen bg-foreground fixed top-0 left-0 z-20 dark:bg-sidebar-accent ">
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

      <div
        className="flex justify-center items-center flex-col text-secondary cursor-pointer hover:text-secondary/50 duration-300 mt-100"
        onClick={handleLogout}
      >
        <LogOut />
        <p>Log Out</p>
      </div>
    </div>
  );
};

export default SideBar;
