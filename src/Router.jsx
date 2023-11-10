import { useState } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import App from "./App";
import { Shop } from "./Shop";
import { Cart } from "./Cart";
import { HomeBar } from "./HomeBar";
import { Item } from "./Item";
import { useData } from "./useData";

//need to construct the router in a parent/children way so the HomeBar always shows
const Router = () => {
    const [addedItems, setAddedItems] = useState(0);
    console.log(addedItems)
    const url = 'https://fakestoreapi.com/products?limit=5';
    const {data, error, loading} = useData(url);
    const [cartList, setCartList] = useState(new Map());
    console.log(cartList);

  const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeBarWrapper addedItems={addedItems} setAddedItems= {setAddedItems} data={data} error={error} loading={loading}/>,
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
                path: "/shop/:id",
                element: <Item addedItems={addedItems} setAddedItems= {setAddedItems} cartList={cartList} setCartList={setCartList}/>
            },
            {
                path: "/cart",
                element: <Cart addedItems={addedItems} setAddedItems= {setAddedItems} cartList={cartList} setCartList={setCartList} data={data}/>
            }
        ]
    },

  ]);

  function HomeBarWrapper() {
    return (
        <div>
            <HomeBar addedItems={addedItems} setAddedItems= {setAddedItems} data={data} error={error} loading={loading}></HomeBar>
            <Outlet ></Outlet>
        </div>
    )
  }

  return <RouterProvider router={router} />;
};

export default Router;