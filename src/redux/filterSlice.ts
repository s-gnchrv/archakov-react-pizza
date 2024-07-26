import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Filter = {
  category?: number;
  sort?: number;
  page?: number;
}

interface FilterState {
  category: number;
  sort: number;
  search: string;
  page: number;
}

const initialState: FilterState = {
  category: 0,
  sort: 0,
  search: "",
  page: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<number>) => {
      state.category = action.payload;
    },
    setSort: (state, action: PayloadAction<number>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    clearSearch: (state) => {
      state.search = "";
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setFilter: (state, action: PayloadAction<Filter>) => {
      const { payload } = action;
      if (payload.category) state.category = payload.category;
      if (payload.sort) state.sort = payload.sort;
      if (payload.page) state.page = payload.page;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCategory,
  setSort,
  setSearch,
  clearSearch,
  setPage,
  setFilter,
} = filterSlice.actions;

export default filterSlice.reducer;
