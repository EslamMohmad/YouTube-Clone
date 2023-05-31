import React from "react";
import { Stack, Box, Typography } from "@mui/material";
import VideoImg from "./VideoImg";
import { Link } from "react-router-dom";
import { contentPublishedTime } from "../../utils/constants";

const VideoSuggested = ({ video }) => {
  const {
    id: { videoId },
    snippet: {
      channelId,
      channelTitle,
      title,
      publishTime,
      thumbnails: {
        high: { url },
      },
    },
  } = video;

  return (
    <Stack flexDirection="row" gap={2} sx={{ height: "100px" }}>
      <Box
        sx={{
          minWidth: "200px",
          borderRadius: "5px",
          overflow: "hidden",
          "@media (max-width : 370px)": {
            minWidth: "170px",
          },
        }}
      >
        <VideoImg info={{ id: videoId, url, channelTitle }} />
      </Box>
      <Stack sx={{ flexGrow: 1 }} gap={0.5}>
        <Typography
          variant="body2"
          sx={{
            a: { color: "white" },
            pb: "3px",
            height: { xs: "40px", sm: "auto", lg: "40px" },
            overflow: "hidden",
            textOverflow: "ellipsis",
            width: { xs: "auto", sm: "300px", lg: "160px" },
            wordBreak: "break-word",
          }}
        >
          <Link to={`/YouTube-Clone/video/${channelTitle}?id=${videoId}#video`}>
            {title}
          </Link>
        </Typography>
        <Typography
          variant="body2"
          fontSize={"12px"}
          sx={{
            cursor: "pointer",
            a: {
              color: "gray",
              ":hover": { color: "lightgray" },
              ":active": { color: "white" },
            },
          }}
        >
          <Link to={`/YouTube-Clone/channel/${channelTitle}/${channelId}`}>
            {channelTitle}
          </Link>
        </Typography>
        <Typography variant="caption" color="gray">
          {contentPublishedTime(publishTime)}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default VideoSuggested;
