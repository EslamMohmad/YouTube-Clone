import React from "react";
import { Box, Stack } from "@mui/material";
import VideoSuggested from "./VideoSuggested";

const Suggestions = ({ data }) => {
  return (
    <Box sx={{ maxWidth: { md: "100%" } }}>
      <Stack gap={2}>
        {data.map((item, idx) => (
          <Box key={idx}>
            <VideoSuggested video={item} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Suggestions;
