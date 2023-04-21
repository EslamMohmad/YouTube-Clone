import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    overlayState: false,
    categoryMeunState: false,
    searchBarState: false,
    videoMoreInfo: false,
    videoMoreComments: false,
    screenScrollableState: true,
  },
  reducers: {
    toggleCategoryMeun: (state, { payload }) => {
      state.overlayState = payload.overlay;
      state.categoryMeunState = payload.category;
      state.screenScrollableState = !payload.overlay;
    },
    toggleSearchBarState: (state, { payload }) => {
      state.searchBarState = payload;
    },
    toggleVideoMoreInfo: (state, { payload }) => {
      state.videoMoreInfo = payload;
      state.screenScrollableState = !payload;
    },
    toggleVideoMoreComments: (state, { payload }) => {
      state.videoMoreComments = payload;
      state.screenScrollableState = !payload;
    },
  },
});

export const {
  toggleCategoryMeun,
  toggleSearchBarState,
  toggleVideoMoreInfo,
  toggleVideoMoreComments,
} = ModalSlice.actions;

export default ModalSlice.reducer;
