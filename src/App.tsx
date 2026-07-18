import { createBrowserRouter } from "react-router";
import SideBar from "./components/Layout/SideBar";
import MainLayout from "./components/Layout/MainLayout";
import AdminPanel from "./components/pages/adminPanel/adminPanel";
import Products from "./components/pages/products/Products";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/adminpanel",
          element: <AdminPanel />,
        },
        {
          index: true,
          path: "/products",
          element: <Products />,
        },
      ],
    },
  ]);
  return <div></div>;
};

export default App;
