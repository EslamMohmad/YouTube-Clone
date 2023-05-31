import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails } from "../auth/auth";

const AuthSlice = createSlice({
  name: "AuthSlice",
  initialState: {
    userDetails: {},
    accountOptionsState: false,
    logInState: false,
  },
  reducers: {
    logoutFunc: (state) => {
      state.userDetails = {};
      state.accountOptionsState = false;
      state.logInState = false;
      window.sessionStorage.removeItem("userId");
    },
    toggleAccountOptions: (state) => {
      state.accountOptionsState = !state.accountOptionsState;
    },
  },
  extraReducers: {
    [getUserDetails.fulfilled]: (state, { payload }) => {
      state.logInState = true;
      state.userDetails = payload.data;
    },
    [getUserDetails.rejected]: (state, { payload }) => {
      console.log("rejected");
    },
  },
});

export const { logoutFunc, toggleAccountOptions } = AuthSlice.actions;
export default AuthSlice.reducer;
