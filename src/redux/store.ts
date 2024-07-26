import { configureStore } from "@reduxjs/toolkit";
import filter from "./filterSlice";
import pizza from "./pizzaSlice";
import cart from "./cartSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter,
    pizza,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();