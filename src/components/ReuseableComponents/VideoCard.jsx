import { Card } from "@mui/material";
import VideoImg from "./VideoImg";
import VideoTitle from "./VideoTitle";

const VideoCard = ({ video }) => {
  const {
    id,
    snippet: {
      title,
      channelTitle,
      channelId,
      description,
      thumbnails: {
        high: { url },
      },
      publishedAt,
    },
    statistics,
  } = video;

  return (
    <Card
      sx={{
        borderRadius: 0,
        border: "none",
        boxShadow: "none",
        backgroundImage: "none",
        backgroundColor: "transparent",
      }}
    >
      <VideoImg info={{ id: id?.videoId || id, url, channelTitle }} />
      <VideoTitle
        info={{
          id: id?.videoId || id,
          channelId,
          channelTitle,
          title,
          description,
          publishedAt,
          viewCount: statistics?.viewCount,
        }}
      />
    </Card>
  );
};

export default VideoCard;
