import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const SearchedChannel = ({ data: { snippet, id } }) => {
  const navTo = useNavigate();

  return (
    <Box
      sx={{ display: "flex", height: "200px", alignItems: "center", gap: 1.5 }}
    >
      <Box
        sx={{ width: { xs: "auto", md: "400px" } }}
        onClick={() =>
          navTo(`/channel/${snippet?.channelTitle}/${id?.channelId}`)
        }
      >
        <CardMedia
          src={snippet?.thumbnails?.high?.url}
          component="img"
          sx={{
            width: "150px",
            height: "150px",
            m: "auto",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        />
      </Box>
      <Box sx={{ width: { md: "40%" } }}>
        <Typography
          variant="h6"
          sx={{ cursor: "pointer" }}
          onClick={() =>
            navTo(`/channel/${snippet?.channelTitle}/${id?.channelId}`)
          }
        >
          {snippet?.title}
        </Typography>
        <Typography variant="caption" color="gray">
          {snippet?.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchedChannel;
