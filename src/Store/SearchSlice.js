import { createSlice } from "@reduxjs/toolkit";

import { fetchSearchResults } from "./APIs";

const SearchSlice = createSlice({
  name: "SearchSlice",
  initialState: {
    fetchSearchResultsState: false,
    searchText: "",
    searchResults: [],
    prevSearchText: "",
  },
  reducers: {
    inputTxt: (state, { payload }) => {
      state.searchText = payload;
    },
  },
  extraReducers: {
    //search Page
    [fetchSearchResults.pending]: (state) => {
      state.fetchSearchResultsState = "pending";
    },
    [fetchSearchResults.fulfilled]: (state, { payload, meta }) => {
      state.searchResults = payload.items;
      state.fetchSearchResultsState = "fulfilled";
      state.prevSearchText = meta.arg;
    },
    [fetchSearchResults.rejected]: (state) => {
      state.fetchSearchResultsState = "rejected";
    },
  },
});

export const { inputTxt } = SearchSlice.actions;

export default SearchSlice.reducer;
