import React from "react";
import { Box } from "@mui/material";
import PlaylistVideos from "../VideoDetailsComponents/PlaylistVideos";
import useLocationDetails from "../../hooks/useLocationDetails";
import RelatedToVideo from "../VideoDetailsComponents/RelatedToVideo";
import useCurrentMedia from "../../hooks/useCurrentMedia";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { useRef } from "react";

const Suggestions = () => {
  const { hash, search } = useLocationDetails();

  const media = useCurrentMedia({ area: "up", size: "lg" });

  useScrollToTop({ current: document.body.parentElement }, search);

  return (
    <Box sx={{ maxWidth: { md: "100%" } }}>
      {hash === "playlist" && media && <PlaylistVideos />}
      <RelatedToVideo />
    </Box>
  );
};

export default Suggestions;
