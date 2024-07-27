import React, { useEffect, useRef } from "react";
import "./scss/app.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import PizzaDetail from "./pages/PizzaDetail";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./redux/store";
import { LocalStorage } from "./utils/LocalStorage";
import { fetchPizzasInfo } from "./redux/cartSlice";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const cart = useSelector((state: RootState) => state.cart.items);
  const newItemId = useSelector((state: RootState) => state.cart.newId);
  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      LocalStorage.setCart(cart);
      LocalStorage.setNewItemId(newItemId);
    } else {
      dispatch(fetchPizzasInfo());
    }
    isMounted.current = true;
  }, [cart]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: (
        <Root>
          <NotFound />
        </Root>
      ),
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "pizza/:id",
          element: <PizzaDetail />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
