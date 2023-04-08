import { createSlice } from "@reduxjs/toolkit";
import {
  fetchFeedVideos,
  fetchChannelVideos,
  fetchChannelDetails,
  fetchVideoDetails,
  fetchRelatedVideos,
  fetchTagVideos,
  fetchPlaylistVideos,
  fetchVideoComments,
} from "./APIs";

const GlobalSlice = createSlice({
  name: "GlobalSlice",
  initialState: {
    fetchingDataState: "pending",
    currentRoute: "home",
    FeedPage: {
      selectedCategory: "mostPopular",
      currentTag: "most popular",
      feedVideos: [],
      prevSelectedCategory: "",
    },
    ChannelPage: {
      channelVideos: [],
      channelDetails: {},
      prevChannelId: "",
    },
    VideoPage: {
      relatedVideos: [],
      playListVideos: [],
      videoComments: [],
      videoDetails: {},
      playlistDetails: {},
      prevVideoId: "",
      prevPlaylistId: "",
    },
  },
  reducers: {
    setselectedCategory: (state, { payload }) => {
      state.FeedPage.selectedCategory = payload;
    },
    setCurrentRoute: (state, { payload }) => {
      state.currentRoute = payload;
    },
    setCurrentTag: (state, { payload }) => {
      state.FeedPage.currentTag = payload;
    },
    setPlaylistDetails: (state, { payload }) => {
      state.VideoPage.playlistDetails = payload;
    },
  },
  extraReducers: {
    //Feed Page
    [fetchFeedVideos.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetchFeedVideos.fulfilled]: (state, { payload, meta }) => {
      state.FeedPage.feedVideos = payload.items;
      state.fetchingDataState = "fulfilled";
      state.FeedPage.prevSelectedCategory = meta.arg;
    },
    [fetchFeedVideos.rejected]: (state) => {
      state.fetchingDataState = "rejected";
    },
    [fetchTagVideos.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetchTagVideos.fulfilled]: (state, { payload, meta }) => {
      state.FeedPage.feedVideos = payload.items;
      state.fetchingDataState = "fulfilled";
      state.FeedPage.prevSelectedCategory = meta.arg;
      state.FeedPage.currentTag = meta.arg;
    },
    [fetchTagVideos.rejected]: (state) => {
      state.fetchingDataState = "rejected";
    },

    //Channel Page
    [fetchChannelVideos.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetchChannelVideos.fulfilled]: (state, { payload, meta }) => {
      state.fetchingDataState = "fulfilled";
      state.ChannelPage.channelVideos = payload.items;
      state.ChannelPage.prevChannelId = meta.arg;
    },
    [fetchChannelVideos.rejected]: (state) => {
      state.fetchingDataState = "rejected";
    },
    [fetchChannelDetails.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetchChannelDetails.fulfilled]: (state, { payload, meta }) => {
      state.fetchingDataState = "fulfilled";
      state.ChannelPage.channelDetails = payload.items[0];
    },
    [fetchChannelDetails.rejected]: (state) => {
      state.fetchingDataState = "rejected";
    },

    //Video Page
    [fetchVideoDetails.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetchVideoDetails.fulfilled]: (state, { payload, meta }) => {
      state.fetchingDataState = "fulfilled";
      state.VideoPage.videoDetails = payload.items[0];
      state.VideoPage.prevVideoId = meta.arg;
    },
    [fetchVideoDetails.rejected]: (state) => {
      state.fetchingDataState = "rejected";
    },
    [fetchRelatedVideos.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetchRelatedVideos.fulfilled]: (state, { payload, meta }) => {
      state.fetchingDataState = "fulfilled";
      state.VideoPage.relatedVideos = payload.items;
    },
    [fetchRelatedVideos.rejected]: (state) => {
      state.fetchingDataState = "rejected";
    },
    [fetchPlaylistVideos.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetchPlaylistVideos.fulfilled]: (state, { payload, meta }) => {
      state.fetchingDataState = "fulfilled";
      state.VideoPage.playListVideos = payload.items;
      state.VideoPage.prevPlaylistId = meta.arg;
    },
    [fetchPlaylistVideos.rejected]: (state) => {
      state.fetchingDataState = "rejected";
    },
    [fetchVideoComments.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetchVideoComments.fulfilled]: (state, { payload, meta }) => {
      state.fetchingDataState = "fulfilled";
      state.VideoPage.videoComments = payload.items;
    },
    [fetchVideoComments.rejected]: (state) => {
      state.fetchingDataState = "rejected";
    },
  },
});

export const {
  setselectedCategory,
  setCurrentRoute,
  setCurrentTag,
  setPlaylistDetails,
} = GlobalSlice.actions;

export default GlobalSlice.reducer;
