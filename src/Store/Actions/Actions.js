import { createAsyncThunk } from "@reduxjs/toolkit";

export const increasePageIndex = createAsyncThunk(
  "increase",
  async (target) => (target += 1)
);
export const decreasePageIndex = createAsyncThunk(
  "decrease",
  async (target) => (target -= 1)
);
