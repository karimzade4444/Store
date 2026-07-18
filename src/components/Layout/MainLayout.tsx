import { Outlet } from "react-router"
import Header from "./Header"
import SideBar from "./SideBar"


const MainLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div >
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout