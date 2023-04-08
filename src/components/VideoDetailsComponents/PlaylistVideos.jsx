import React from "react";
import { Box, Typography, IconButton } from "@mui/material";

import PlaylistData from "./PlaylistData";
import { useSelector } from "react-redux";
import PlaylistOptions from "./PlaylistOptions";
const PlaylistVideos = () => {
  const {
    VideoPage: { playListVideos, playlistId, playlistDetails },
  } = useSelector(({ GlobalSlice }) => GlobalSlice);

  return (
    <Box
      sx={{
        borderRadius: "15px",
        overflow: "hidden",
        mb: 2,
        border: "1px solid",
        borderColor: "border.lightBorder",
        height: { xs: "600px", md: "55vw", lg: "35vw" },
      }}
    >
      <PlaylistOptions
        details={{ length: playListVideos.length, info: playlistDetails }}
      />
      <PlaylistData data={playListVideos} />
    </Box>
  );
};

export default PlaylistVideos;
