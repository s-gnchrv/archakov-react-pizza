import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
  sort: 0,
  search: "",
  page: 0,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = Number(action.payload);
    },
    setSort: (state, action) => {
      state.sort = Number(action.payload);
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    clearSearch: (state) => {
      state.search = "";
    },
    setPage: (state, action) => {
      state.page = Number(action.payload);
    },
    setFilter: (state, action) => {
      if (action.payload.category) state.category = action.payload.category;
      if (action.payload.sort) state.sort = action.payload.sort;
      if (action.payload.page) state.page = action.payload.page;
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
