import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./components/Layout/MainLayout";
import AdminPanel from "./components/pages/adminPanel/adminPanel";
import Products from "./components/pages/products/Products";
import Orders from "./components/pages/orders/Orders";
import LogIn from "./components/pages/log/LogIn";

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
          element: <Products />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
    {
      path:"/log",
      element:<LogIn/>
    }
  ]);
  return <RouterProvider router={router}/>;
};

export default App;
