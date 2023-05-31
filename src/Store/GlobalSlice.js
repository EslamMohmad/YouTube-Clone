import { createSlice } from "@reduxjs/toolkit";

const GlobalSlice = createSlice({
  name: "GlobalSlice",
  initialState: {
    currentRoute: "home",
  },
  reducers: {
    setCurrentRoute: (state, { payload }) => {
      state.currentRoute = payload;
    },

    setPlaylistDetails: (state, { payload }) => {
      state.VideoPage.playlistDetails = payload;
    },
  },
});

export const { setCurrentRoute, setPlaylistDetails } = GlobalSlice.actions;

export default GlobalSlice.reducer;
