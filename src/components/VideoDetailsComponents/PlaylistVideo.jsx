import { Box, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoDetails } from "../../Store/APIs";

const PlaylistVideo = ({ data: { snippet } }) => {
  const {
    VideoPage: { prevVideoId },
  } = useSelector(({ GlobalSlice }) => GlobalSlice);

  const action = useDispatch();
  return (
    <Box
      sx={{
        p: "12px 20px",
        display: "flex",
        backgroundColor: `${
          prevVideoId === snippet?.resourceId?.videoId
            ? "#3b83d257"
            : "transparent"
        }   `,
        cursor: "pointer",
      }}
      onClick={() => action(fetchVideoDetails(snippet?.resourceId?.videoId))}
    >
      <CardMedia
        sx={{
          width: "130px",
          mr: "15px",
          borderRadius: "10px",
          maxHeight: "70px",
        }}
        component="img"
        image={snippet?.thumbnails?.high?.url}
      />
      <Box
        sx={{
          display: "flex",
          gap: 1,
          flexDirection: "column",

          maxWidth: { xs: "calc(100vw - 250px)", lg: "180px" },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            maxHeight: "40px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {snippet?.title}
        </Typography>
        <Typography variant="caption" color="gray">
          {snippet?.channelTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default PlaylistVideo;
