import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://www.googleapis.com/youtube/v3";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export const ThunkAPIFetcher = (name, APIType, params, targetParam) => {
  return createAsyncThunk(name, async (payload, thankAPI) => {
    const handlingParames = (object) => {
      let results = "";
      for (const param in object) {
        results += `${param}=${object[param]}&`;
      }
      return results;
    };

    const handlingPayload = () => {
      if (typeof payload === "object") {
        return handlingParames(payload);
      } else {
        return `${targetParam}=${payload}`;
      }
    };

    try {
      return await axios.get(
        `${BASE_URL}/${APIType}?${handlingParames(
          params
        )}${handlingPayload()}&key=${API_KEY}`
      );
    } catch (error) {
      console.error(error);
    }
  });
};
