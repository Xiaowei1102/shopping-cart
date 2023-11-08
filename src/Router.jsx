import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { HomeBar } from "./HomeBar";

//need to construct the router in a parent/children way so the HomeBar always shows
const Router = () => {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeBarWrapper />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },

  ]);

  function HomeBarWrapper() {
    return (
        <div>
            <HomeBar></HomeBar>
            <Outlet></Outlet>
        </div>
    )
  }

  return <RouterProvider router={router} />;
};

export default Router;