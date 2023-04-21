import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import useCurrentMedia from "../../hooks/useCurrentMedia";
import { contentPublishedTime, countingUsers } from "../../utils/constants";

const VideoStatistics = ({ children }) => {
  const {
    VideoPage: {
      videoDetails: { snippet, statistics },
    },
  } = useSelector(({ GlobalSlice }) => GlobalSlice);

  const mobileView = useCurrentMedia({ area: "down", size: "sm" });

  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        my: `${mobileView ? "12px" : "-5px"}`,
        color: "white",
        alignItems: "flex-end",
      }}
    >
      <Typography variant="subtitle2">
        {countingUsers(statistics?.viewCount)} views
      </Typography>
      <Typography variant="subtitle2">
        {contentPublishedTime(snippet?.publishedAt)} ago
      </Typography>
      {children}
    </Box>
  );
};

export default VideoStatistics;
