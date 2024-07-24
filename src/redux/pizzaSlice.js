import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { sortList } from "../components/Sort";

const initialState = {
  status: "loading", // loading | success | error
  pizzas: [],
};

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (_, thunkAPI) => {
    const { category, sort, search, page } = thunkAPI.getState().filter;

    const { data } = await axios.get(
      "https://658fd4fccbf74b575eca2c05.mockapi.io/pizza/",
      {
        params: {
          category: category > 0 ? category : null,
          sortBy: sortList[sort].field,
          order: sortList[sort].order,
          title: search,
          page: page + 1,
          limit: 4,
        },
      }
    );
    return data;
  }
);

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.status = "success";
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.pizzas = [];
      state.status = "error";
    });
  },
});

export const {} = pizzaSlice.actions;
export default pizzaSlice.reducer;
