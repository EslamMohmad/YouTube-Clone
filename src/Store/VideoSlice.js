import { createSlice } from "@reduxjs/toolkit";
import {
  fetchPlaylistVideos,
  fetchRelatedVideos,
  fetchVideoComments,
  fetchVideoDetails,
} from "./APIs";

const VideoSlice = createSlice({
  name: "VideoSlice",
  initialState: {
    relatedVideos: [],
    playListVideos: [],
    videoComments: [],
    videoDetails: {},
    playlistDetails: {},
    prevVideoId: "",
    prevPlaylistId: "",
    fetchingDataState: "pending",
  },
  reducers: {
    setPlaylistDetails: (state, { payload }) => {
      state.playlistDetails = payload;
    },
  },
  extraReducers: {
    [fetchVideoDetails.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetchVideoDetails.fulfilled]: (state, { payload, meta }) => {
      state.fetchingDataState = "fulfilled";
      state.videoDetails = payload.data.items[0];
      state.prevVideoId = meta.arg;
    },
    [fetchVideoDetails.rejected]: (state) => {
      state.fetchingDataState = "rejected";
    },
    [fetchRelatedVideos.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetchRelatedVideos.fulfilled]: (state, { payload, meta }) => {
      state.fetchingDataState = "fulfilled";
      state.relatedVideos = payload.data.items;
    },
    [fetchRelatedVideos.rejected]: (state) => {
      state.fetchingDataState = "rejected";
    },
    [fetchPlaylistVideos.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetchPlaylistVideos.fulfilled]: (state, { payload, meta }) => {
      state.fetchingDataState = "fulfilled";
      state.playListVideos = payload.data.items;
      state.prevPlaylistId = meta.arg;
    },
    [fetchPlaylistVideos.rejected]: (state) => {
      state.fetchingDataState = "rejected";
    },
    [fetchVideoComments.pending]: (state) => {
      state.fetchingDataState = "pending";
    },
    [fetchVideoComments.fulfilled]: (state, { payload, meta }) => {
      state.fetchingDataState = "fulfilled";
      state.videoComments = payload.data.items;
    },
    [fetchVideoComments.rejected]: (state) => {
      state.fetchingDataState = "rejected";
    },
  },
});

export const { setPlaylistDetails } = VideoSlice.actions;
export default VideoSlice.reducer;
