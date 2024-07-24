import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  newId: 1,
  items: [], // {id, pizzaId, count, type, size}
  pizzasInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // payload = {pizza, count, type, size}
      const { pizza, ...newItem } = action.payload;
      newItem.pizzaId = pizza.id;
      const item = state.items.find(
        (item) =>
          item.pizzaId === newItem.pizzaId &&
          item.type === newItem.type &&
          item.size === newItem.size
      );

      if (item) item.count += newItem.count;
      else {
        newItem.id = state.newId++;
        state.items.push(newItem);
        if (!state.pizzasInfo.find((p) => p.id === pizza.id))
          state.pizzasInfo.push(pizza);
      }
    },
    removeItem: (state, action) => {
      // payload = id
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    incrementItem: (state, action) => {
      // payload = id
      state.items.find((item) => item.id === action.payload).count++;
    },
    decrementItem: (state, action) => {
      // payload = id
      const item = state.items.find((item) => item.id === action.payload);
      if (--item.count < 1)
        state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearItems: (state) => {
      state.newId = 1;
      state.items = [];
      state.pizzasInfo = [];
    },
  },
});

export const selectCartCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.count, 0);

export const selectCartSum = (state) =>
  state.cart.items.reduce(
    (sum, item) =>
      sum +
      state.cart.pizzasInfo.find((pizza) => pizza.id === item.pizzaId).price *
        item.count,
    0
  );

export const { addItem, removeItem, incrementItem, decrementItem, clearItems } =
  cartSlice.actions;
export default cartSlice.reducer;
