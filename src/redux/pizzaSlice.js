import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: true,
  pizzas: [],
};

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPizzas: (state, action) => {
      state.pizzas = action.payload;
    },
    clearPizzas: (state) => {
      state.pizzas = [];
    },
  },
});

export const { setIsLoading, setPizzas, clearPizzas } = pizzaSlice.actions;
export default pizzaSlice.reducer;
