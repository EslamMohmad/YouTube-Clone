import { ThunkAPIFetcher } from "../utils/fetchFromAPI";

export const fetchFeedVideos = ThunkAPIFetcher(
  "FeedPage/Videos",
  "videos",
  {
    part: [
      "snippet",
      "contentDetails",
      "statistics",
      "player",
      "localizations",
      "recordingDetails",
      "status",
      "topicDetails",
    ],
    maxResults: 15,
    regionCode: "EG",
  },
  "chart"
);

export const fetch_Next_Prev_FeedVideos = ThunkAPIFetcher(
  "FeedPage/Next_Prev_Videos",
  "videos",
  {
    part: [
      "snippet",
      "contentDetails",
      "statistics",
      "player",
      "localizations",
      "recordingDetails",
      "status",
      "topicDetails",
    ],
    regionCode: "EG",
    maxResults: 15,
    chart: "mostPopular",
  },
  "pageToken"
);

export const fetch_Next_Prev_TagFeedVideos = ThunkAPIFetcher(
  "FeedPage/Next_Prev_TagVideos",
  "search",
  {
    part: "snippet",
    maxResults: 15,
  },
  ["q", "pageToken"]
);

export const fetchTagVideos = ThunkAPIFetcher(
  "FeedPage/TagVideos",
  "search",
  { part: ["snippet"], maxResults: 15 },
  "q"
);

export const fetchChannelVideos = ThunkAPIFetcher(
  "ChannelPage/Videos",
  "search",
  {
    part: ["snippet"],
    maxResults: 15,
  },
  "channelId"
);

export const fetch_Next_Prev_ChannelVideos = ThunkAPIFetcher(
  "ChannelPage/Next_Prev_Videos",
  "search",
  {
    part: ["snippet"],
    maxResults: 15,
  },
  ["pageToken", "channelId"]
);

export const fetchChannelDetails = ThunkAPIFetcher(
  "ChannelPage/Details",
  "channels",
  {
    part: ["snippet", "brandingSettings", "statistics"],
  },
  "id"
);

export const fetchVideoDetails = ThunkAPIFetcher(
  "VideoPage/Details",
  "videos",
  { part: ["snippet", "statistics", "player", "contentDetails"] },
  "id"
);

export const fetchRelatedVideos = ThunkAPIFetcher(
  "VideoPage/Videos",
  "search",
  { part: ["snippet"], type: "video", maxResults: 15 },
  "relatedToVideoId"
);

export const fetchPlaylistVideos = ThunkAPIFetcher(
  "VideoPage/PlaylistVideos",
  "playlistItems",
  {
    part: ["snippet", "id"],
    maxResults: 100,
  },
  "playlistId"
);

export const fetchSearchResults = ThunkAPIFetcher(
  "SearchPage/Results",
  "search",
  {
    part: ["snippet"],
    maxResults: 15,
    regionCode: "EG",
  },
  "q"
);

export const fetch_Next_Prev_SearchResults = ThunkAPIFetcher(
  "SearchPage/Results",
  "search",
  {
    part: ["snippet"],
    maxResults: 15,
    regionCode: "EG",
  },
  ["q", "pageToken"]
);

export const fetchVideoComments = ThunkAPIFetcher(
  "VideoPage/Comments",
  "commentThreads",
  {
    part: ["snippet", "replies", "id"],
    maxResults: 30,
  },
  "videoId"
);
