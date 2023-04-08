import { Box, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import PlaylistVideo from "./PlaylistVideo";

const PlaylistData = ({ data }) => {
  return (
    <Box
      sx={{
        overflow: "auto",
        height: "calc(100% - 125px)",
      }}
    >
      <Stack>
        {data.map((video) => (
          <PlaylistVideo
            key={video?.snippet?.resourceId?.videoId}
            data={video}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default PlaylistData;
