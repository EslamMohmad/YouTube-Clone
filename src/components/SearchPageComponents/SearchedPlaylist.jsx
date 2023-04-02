import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";

const SearchedPlaylist = ({ data }) => {
  console.log(data);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: { xs: "auto", md: "220px" },
        gap: 2.5,
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          overflow: "hidden",
          flexGrow: 1,
          maxWidth: { xs: "unset", md: "400px" },
          height: { xs: "300px", md: "auto" },
        }}
      >
        <CardMedia
          src={data?.snippet?.thumbnails?.high?.url}
          component="img"
          width="100%"
          height="100%"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { md: "40%" },
        }}
      >
        <Typography variant="h6">{data?.snippet?.title}</Typography>
        <Typography variant="caption" color="gray">
          {data?.snippet?.description}
        </Typography>
        <Typography variant="caption" color="gray" sx={{ mt: 2 }}>
          {data?.snippet?.channelTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchedPlaylist;
