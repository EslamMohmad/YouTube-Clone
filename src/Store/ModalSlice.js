import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "ModalSlice",
  initialState: {
    overlayState: false,
    categoryMeunState: false,
    searchBarState: false,
  },
  reducers: {
    toggleCategoryMeun: (state, { payload }) => {
      state.overlayState = payload.overlay;
      state.categoryMeunState = payload.category;
    },
    toggleSearchBarState: (state, { payload }) => {
      state.searchBarState = payload;
    },
  },
});

export const { toggleCategoryMeun, toggleSearchBarState } = ModalSlice.actions;

export default ModalSlice.reducer;
