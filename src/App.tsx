import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./components/Layout/MainLayout";
import AdminPanel from "./components/pages/adminPanel/adminPanel";
import Products from "./components/pages/products/Products";
import Orders from "./components/pages/orders/Orders";

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
  ]);
  return <RouterProvider router={router}/>;
};

export default App;
