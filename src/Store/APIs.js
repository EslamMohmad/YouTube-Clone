import { ThunkAPIFetcher } from "../utils/fetchFromAPI";

export const fetchFeedVideos = ThunkAPIFetcher(
  "FeedPage/Video",
  `videos?part=snippet,contentDetails,statistics,player,localizations,recordingDetails,status,topicDetails&regionCode=EG&maxResults=30&chart=`
);

export const fetchChannelVideos = ThunkAPIFetcher(
  "ChannelPage/Videos",
  `search?part=snippet&maxResults=50&channelId=`
);

export const fetchChannelDetails = ThunkAPIFetcher(
  "ChannelPage/Details",
  `channels?part=brandingSettings,snippet,statistics&id=`
);

export const fetchVideoDetails = ThunkAPIFetcher(
  "VideoPage/Details",
  `videos?part=snippet,statistics,player,contentDetails&id=`
);

export const fetchRelatedVideos = ThunkAPIFetcher(
  "VideoPage/Videos",
  `search?part=snippet&type=video&maxResults=40&relatedToVideoId=`
);

export const fetchTagVideos = ThunkAPIFetcher(
  "FeedPage/Videos",
  `search?part=snippet&maxResults=40&q=`
);

export const fetchSearchResults = ThunkAPIFetcher(
  "SearchPage/Results",
  `search?part=snippet&maxResults=20&q=`
);
