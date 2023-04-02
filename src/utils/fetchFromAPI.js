import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const fetchFromAPI = async (option) => {
  const { data } = await axios.get(`${BASE_URL}/${option}&key=${API_KEY}`);
  return data;
};

export const ThunkAPIFetcher = (name, APIParams) => {
  return createAsyncThunk(name, async (payload, thankAPI) => {
    try {
      return await fetchFromAPI(`${APIParams}${payload}`);
    } catch (error) {
      console.error(error);
    }
  });
};
