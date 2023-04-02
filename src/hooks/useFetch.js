import { useState } from "react";

import axios from "axios";
import { Waiting } from "./../utils/Waiting";

const useFetch = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  const BASE_URL = "https://www.googleapis.com/youtube/v3";

  const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

  const fetchFromAPI = async (option) => {
    const { data } = await axios.get(`${BASE_URL}/${option}&key=${API_KEY}`);
    return data;
  };

  const preformFetch = async (link) => {
    try {
      setLoading("is loading.....");
      setError("");
      await Waiting(5000);
      return await fetchFromAPI(link);
    } catch (error) {
      setError("message error");
      console.log(error.message);
    } finally {
      setLoading("");
      setError("");
      console.log("finally");
    }
  };

  return [error, loading, preformFetch];
};

export default useFetch;
