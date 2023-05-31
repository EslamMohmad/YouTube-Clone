import { createSlice } from "@reduxjs/toolkit";
import { decreasePageIndex, increasePageIndex } from "./Actions/Actions";
import {
  fetchFeedVideos,
  fetchTagVideos,
  fetch_Next_Prev_FeedVideos,
  fetch_Next_Prev_TagFeedVideos,
} from "./APIs";

const FeedSlice = createSlice({
  name: "FeedSlice",
  initialState: {
    selectedCategory: "mostPopular",
    currentTag: "most popular",
    feedVideos: [],
    prevFeedVideos: [],
    prevSelectedCategory: "",
    nextVideosResultsCode: "",
    prevVideosResultsCode: "",
    fetchingDataState: "pending",
    currentVideosPageIndex: 0,
  },
  reducers: {
    setselectedCategory: (state, { payload }) => {
      state.selectedCategory = payload;
    },
    setCurrentTag: (state, { payload }) => {
      state.currentTag = payload;
    },
  },
  extraReducers: {
    [increasePageIndex.fulfilled]: (state, { payload }) => {
      state.currentVideosPageIndex = payload;
    },

    [decreasePageIndex.fulfilled]: (state, { payload }) => {
      state.currentVideosPageIndex = payload;
    },

    //Feed Videos
    [fetchFeedVideos.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetchFeedVideos.fulfilled]: (state, { payload, meta }) => {
      state.feedVideos = payload.data.items;
      state.nextVideosResultsCode = payload.data.nextPageToken;
      // state.prevVideosResultsCode = payload.data?.prevPageToken;
      state.fetchingDataState = "fulfilled";
      state.prevSelectedCategory = meta.arg;
    },
    [fetchFeedVideos.rejected]: (state) => {
      state.fetchingDataState = "pending";
    },

    //next_prev Feed Videos
    [fetch_Next_Prev_FeedVideos.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetch_Next_Prev_FeedVideos.fulfilled]: (state, { payload, meta }) => {
      state.prevFeedVideos = state.feedVideos;
      state.feedVideos = payload.data.items;
      state.nextVideosResultsCode = payload.data.nextPageToken;
      state.prevVideosResultsCode = payload.data?.prevPageToken;
      state.fetchingDataState = "fulfilled";
      // state.prevSelectedCategory = meta.arg;
    },
    [fetch_Next_Prev_FeedVideos.rejected]: (state) => {
      state.fetchingDataState = "pending";
    },

    //next_prev Tag Feed Videos
    [fetch_Next_Prev_TagFeedVideos.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetch_Next_Prev_TagFeedVideos.fulfilled]: (state, { payload, meta }) => {
      state.prevFeedVideos = state.feedVideos;
      state.feedVideos = payload.data.items;
      state.nextVideosResultsCode = payload.data.nextPageToken;
      state.prevVideosResultsCode = payload.data?.prevPageToken;
      state.fetchingDataState = "fulfilled";
      // state.prevSelectedCategory = meta.arg;
    },
    [fetch_Next_Prev_TagFeedVideos.rejected]: (state) => {
      state.fetchingDataState = "pending";
    },

    //Feed Tag Videos
    [fetchTagVideos.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetchTagVideos.fulfilled]: (state, { payload, meta }) => {
      state.feedVideos = payload.data.items;
      state.fetchingDataState = "fulfilled";
      state.prevSelectedCategory = meta.arg;
      state.currentVideosPageIndex = 0;
      // state.currentTag = meta.arg;
    },
    [fetchTagVideos.rejected]: (state) => {
      state.fetchingDataState = "rejected";
    },
  },
});

export const { setselectedCategory, setCurrentTag } = FeedSlice.actions;
export default FeedSlice.reducer;
