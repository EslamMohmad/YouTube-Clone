import { createSlice } from "@reduxjs/toolkit";
import { decreasePageIndex, increasePageIndex } from "./Actions/Actions";
import {
  fetchChannelDetails,
  fetchChannelVideos,
  fetch_Next_Prev_ChannelVideos,
} from "./APIs";

const ChannelSlice = createSlice({
  name: "ChannelSlice",
  initialState: {
    channelVideos: [],
    channelDetails: {},
    prevChannelId: "",
    nextVideosResultsCode: "",
    prevVideosResultsCode: "",
    fetchingDataState: "pending",
    fetchingChannelDetailsState: "pending",
    currentChannelVideosPageIndex: 0,
  },
  extraReducers: {
    [increasePageIndex.fulfilled]: (state, { payload }) => {
      state.currentChannelVideosPageIndex = payload;
    },

    [decreasePageIndex.fulfilled]: (state, { payload }) => {
      state.currentChannelVideosPageIndex = payload;
    },

    [fetchChannelVideos.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetchChannelVideos.fulfilled]: (state, { payload, meta }) => {
      state.fetchingDataState = "fulfilled";
      state.channelVideos = payload.data.items;
      state.prevChannelId = meta.arg;
      state.nextVideosResultsCode = payload.data.nextPageToken;
    },
    [fetchChannelVideos.rejected]: (state) => {
      state.fetchingDataState = "rejected";
    },

    [fetch_Next_Prev_ChannelVideos.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetch_Next_Prev_ChannelVideos.fulfilled]: (state, { payload, meta }) => {
      state.fetchingDataState = "fulfilled";
      state.channelVideos = payload.data.items;
      state.prevChannelId = meta.arg;
    },
    [fetch_Next_Prev_ChannelVideos.rejected]: (state) => {
      state.fetchingDataState = "rejected";
    },

    [fetchChannelDetails.pending]: (state) => {
      state.fetchingChannelDetailsState = "pending";
    },
    [fetchChannelDetails.fulfilled]: (state, { payload, meta }) => {
      state.fetchingChannelDetailsState = "fulfilled";
      state.channelDetails = payload.data.items[0];
    },

    [fetchChannelDetails.rejected]: (state) => {
      state.fetchingChannelDetailsState = "rejected";
    },
  },
});

export default ChannelSlice.reducer;
