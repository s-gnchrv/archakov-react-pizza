import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./filterSlice";
import pizzaReducer from "./pizzaSlice";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    pizza: pizzaReducer,
  },
});
