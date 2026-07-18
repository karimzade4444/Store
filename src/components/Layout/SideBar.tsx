import {ChartNoAxesGantt, LayoutDashboard} from "lucide-react"
import type { NavItems } from "../types/types";
import { Link } from "react-router";

const SideBar = () => {

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
      <div className=" p-7 flex justify-center items-center flex-col gap-5">
        {navigationItems.map((el) => (
          <Link to={el.link} key={el.id}>
            {" "}
            <div className="text-primary-foreground hover:text-primary-foreground/50 duration-300">{el.icon}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBar