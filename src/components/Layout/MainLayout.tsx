import { Outlet, useNavigate } from "react-router";
import Header from "./Header";
import SideBar from "./SideBar";
import Cookies from "js-cookie";
import { useEffect } from "react";

const MainLayout = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/log");
    }
  }, [token, navigate]);

  return (
    <div className="flex ">
      <div className=" relative w-30">
        <SideBar />
      </div>
      <div className="w-full relative">
        <div className="w-full h-25 ">
          <Header />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
