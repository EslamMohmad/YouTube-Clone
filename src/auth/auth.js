import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://www.googleapis.com/oauth2/v2/userinfo";
const scope = "https://www.googleapis.com/auth/youtube.force-ssl";
export const getUserDetails = createAsyncThunk(
  "User/Details",
  async (payload) => {
    try {
      return await axios.get(
        `${BASE_URL}?access_token=${payload}&scope=${scope}`,
        {
          headers: {
            Authorization: `Bearer ${payload}`,
            Accept: "application/json",
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  }
);
export const fetchFeedVideosByAccessToken = createAsyncThunk(
  "FeedPage/VideosAccessToken",
  async (payload) => {
    try {
      return await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&access_token=${payload}`
      );
    } catch (error) {
      console.error(error);
    }
  }
);

// const redirect_uri = "http://localhost:3000/YouTube-Clone";
// const scopes = "https://www.googleapis.com/auth/youtube.force-ssl";

// export const test = createAsyncThunk("fetchData/Videos", async () => {
//   try {
//     return await axios.get(
//       `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_YOUTUBE_CLIENT_ID}&redirect_uri=${redirect_uri}&response_type=token&scope=${scopes}&include_granted_scopes=true&`,
//       {
//         headers: {
//           "Access-Control-Allow-Origin": null,
//         },
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// });

// export const oauthSignIn = function () {
//   // Google's OAuth 2.0 endpoint for requesting an access token
//   const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

//   // Create <form> element to submit parameters to OAuth 2.0 endpoint.
//   const form = document.createElement("form");
//   form.setAttribute("method", "GET"); // Send as a GET request.
//   form.setAttribute("action", oauth2Endpoint);

//   // Parameters to pass to OAuth 2.0 endpoint.
//   const params = {
//     client_id: process.env.REACT_APP_YOUTUBE_CLIENT_ID,
//     redirect_uri: redirect_uri,
//     response_type: "token",
//     scope: "https://www.googleapis.com/auth/drive.metadata.readonly",
//     include_granted_scopes: "true",
//     state: "pass-through value",
//   };

//   // Add form parameters as hidden input values.
//   for (const p in params) {
//     const input = document.createElement("input");
//     input.setAttribute("type", "hidden");
//     input.setAttribute("name", p);
//     input.setAttribute("value", params[p]);
//     form.appendChild(input);
//   }

//   // Add form to page and submit it to open the OAuth 2.0 endpoint.
//   document.body.appendChild(form);
//   form.submit();
// };
