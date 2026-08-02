import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./components/Layout/MainLayout";
import AdminPanel from "./pages/adminPanel/adminPanel";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
import LogIn from "./pages/log/LogIn";
import ProtectedRout from "./components/Layout/ProtectedRout";
import { Role } from "./lib/configs/rolePermissions";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          path: "/adminpanel",
          element: <ProtectedRout roles={[Role.Admin]} />,
          children: [
            {
              index: true,
              element: <AdminPanel />,
            },
          ],
        },
        {
          index: true,
          element: <Products />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
    {
      path: "/log",
      element: <LogIn />,
    },
    {
      path: "*",
      element: <div>not found</div>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
