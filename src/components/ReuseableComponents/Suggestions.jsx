import React from "react";
import { Box, Stack, useMediaQuery, useTheme } from "@mui/material";
import VideoSuggested from "./VideoSuggested";
import PlaylistVideos from "../VideoDetailsComponents/PlaylistVideos";
import useLocationDetails from "../../hooks/useLocationDetails";
import RelatedToVideo from "../VideoDetailsComponents/RelatedToVideo";

const Suggestions = () => {
  const { hash } = useLocationDetails();

  const theme = useTheme();

  const media = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box sx={{ maxWidth: { md: "100%" } }}>
      {hash === "playlist" && media && <PlaylistVideos />}
      <RelatedToVideo />
    </Box>
  );
};

export default Suggestions;
