import { configureStore } from "@reduxjs/toolkit";
import filter from "./filterSlice";
import pizza from "./pizzaSlice";
import cart from "./cartSlice";

export const store = configureStore({
  reducer: {
    filter,
    pizza,
    cart,
  },
});
