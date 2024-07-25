import "./scss/app.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import PizzaDetail from "./pages/PizzaDetail";

function App() {
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
}

export default App;
