import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import { sortList } from "../components/Sort";
import { RootState } from "./store";

export interface Pizza {
  id: number;
  imageUrl: string;
  title: string;
  composition: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

export const enum Status {
  Loading = "loading",
  Success = "success",
  SuccessDetail = "success_detail",
  Error = "error"
}

interface PizzaState {
  status: Status;
  pizzas: Pizza[]
}

const initialState: PizzaState = {
  status: Status.Loading,
  pizzas: [],
};

export const fetchPizzas = createAsyncThunk<Pizza[], void, {state: RootState}>(
  "pizza/fetchPizzasStatus",
  async (_, thunkAPI) => {
    const { category, sort, search, page } = thunkAPI.getState().filter;

    const { data } = await axios.get<Pizza[]>(
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
    return data as Pizza[];
  }
);

export const fetchPizzaById = createAsyncThunk(
  "pizza/fetchPizzaIdStatus",
  async (id: number) => {
    const { data } = await axios.get<Pizza[]>(
      "https://658fd4fccbf74b575eca2c05.mockapi.io/pizza/",
      {
        params: {
          id,
        },
      }
    );

    return data as Pizza[];
  }
);

export const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = Status.Loading;
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action: PayloadAction<Pizza[]>) => {
      state.pizzas = action.payload;
      state.status = Status.Success;
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.pizzas = [];
      state.status = Status.Error;
    });
    builder.addCase(fetchPizzaById.fulfilled, (state, action: PayloadAction<Pizza[]>) => {
      state.pizzas = action.payload;
      state.status = Status.SuccessDetail;
    });
    builder.addCase(fetchPizzaById.rejected, (state) => {
      state.pizzas = [];
      state.status = Status.Error;
    });
  },
});

export const selectPizzaById = (id: number) => (state: RootState) =>
  state.pizza.pizzas.find((pizza) => pizza.id === id);

// export const {} = pizzaSlice.actions;
export default pizzaSlice.reducer;
