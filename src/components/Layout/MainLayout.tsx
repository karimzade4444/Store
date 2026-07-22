import { Outlet } from "react-router"
import Header from "./Header"
import SideBar from "./SideBar"


const MainLayout = () => {
  return (
    <div className="flex ">
      <div className=" relative w-30">
        <SideBar />
      </div>
      <div className="w-full relative">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout