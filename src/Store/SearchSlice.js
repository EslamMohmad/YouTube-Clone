import { createSlice } from "@reduxjs/toolkit";
import { decreasePageIndex, increasePageIndex } from "./Actions/Actions";

import { fetch_Next_Prev_SearchResults, fetchSearchResults } from "./APIs";

const SearchSlice = createSlice({
  name: "SearchSlice",
  initialState: {
    fetchSearchResultsState: "pending",
    searchText: "",
    searchResults: [],
    prevSearchText: "",
    nextVideosResultsCode: "",
    prevVideosResultsCode: "",
    currentSearchVideosPageIndex: 0,
  },
  reducers: {
    inputTxt: (state, { payload }) => {
      state.searchText = payload;
      state.currentSearchVideosPageIndex = 0;
    },
  },
  extraReducers: {
    [increasePageIndex.fulfilled]: (state, { payload }) => {
      state.currentSearchVideosPageIndex = payload;
    },

    [decreasePageIndex.fulfilled]: (state, { payload }) => {
      state.currentSearchVideosPageIndex = payload;
    },

    //search Page
    [fetchSearchResults.pending]: (state) => {
      state.fetchSearchResultsState = "pending";
    },
    [fetchSearchResults.fulfilled]: (state, { payload, meta }) => {
      state.searchResults = payload.data.items;
      state.fetchSearchResultsState = "fulfilled";
      state.prevSearchText = meta.arg;
      state.searchText = meta.arg;
      state.nextVideosResultsCode = payload.data.nextPageToken;
    },
    [fetchSearchResults.rejected]: (state) => {
      state.fetchSearchResultsState = "rejected";
    },

    //prev_next search results
    [fetch_Next_Prev_SearchResults.pending]: (state) => {
      state.fetchSearchResultsState = "pending";
    },
    [fetch_Next_Prev_SearchResults.fulfilled]: (state, { payload, meta }) => {
      state.searchResults = payload.data.items;
      state.fetchSearchResultsState = "fulfilled";
      state.prevSearchText = meta.arg;
      state.nextVideosResultsCode = payload.data.nextPageToken;
      state.prevVideosResultsCode = payload.data?.prevPageToken;
    },
    [fetch_Next_Prev_SearchResults.rejected]: (state) => {
      state.fetchSearchResultsState = "rejected";
    },
  },
});

export const { inputTxt } = SearchSlice.actions;

export default SearchSlice.reducer;
