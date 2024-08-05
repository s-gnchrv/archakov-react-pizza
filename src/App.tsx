import React, { Suspense, useEffect, useRef } from "react";
import Loadable from "react-loadable";
import "./scss/app.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
// import PizzaDetail from "./pages/PizzaDetail";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "./redux/store";
import { LocalStorage } from "./utils/LocalStorage";
import { fetchPizzasInfo } from "./redux/cartSlice";

// const Home = React.lazy(
//   () => import(/* webpackChunkName: "Home" */ "./pages/Home")
// );
const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ "./pages/Home"),
  loading: () => <></>,
});
const Cart = React.lazy(
  () => import(/* webpackChunkName: "Cart" */ "./pages/Cart")
);
const PizzaDetail = React.lazy(
  () => import(/* webpackChunkName: "PizzaDetail" */ "./pages/PizzaDetail")
);

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

  const router = createBrowserRouter(
    [
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
            element: <LoadableHome />,
          },
          {
            path: "pizza/:id",
            element: (
              <Suspense>
                <PizzaDetail />
              </Suspense>
            ),
          },
          {
            path: "cart",
            element: (
              <Suspense>
                <Cart />
              </Suspense>
            ),
          },
        ],
      },
    ],
    {
      basename: "/archakov-react-pizza",
    }
  );

  return <RouterProvider router={router} />;
};

export default App;
