import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  contentPublishedTime,
  handlingLinkTextSpace,
} from "../../utils/constants";

const SearchedVideo = ({ data: { snippet, id } }) => {
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
        component="a"
        href={handlingLinkTextSpace(
          `/video/${snippet?.channelTitle}/${id?.videoId}`
        )}
        sx={{
          borderRadius: "10px",
          overflow: "hidden",
          flexGrow: 1,
          maxWidth: { xs: "unset", md: "400px" },
          height: { xs: "240px", sm: "300px", md: "auto" },
          cursor: "pointer",
          width: { xs: "100%", md: "auto" },
        }}
      >
        <CardMedia
          src={snippet?.thumbnails?.high?.url}
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
        <Link
          to={handlingLinkTextSpace(
            `/video/${snippet?.channelTitle}/${id?.videoId}`
          )}
        >
          <Typography
            variant="h6"
            color="white"
            sx={{
              cursor: "pointer",
              maxHeight: "100px",
              textOverflow: "ellipsis",
            }}
          >
            {snippet?.title}
          </Typography>
        </Link>
        <Typography variant="caption" color="gray">
          {snippet?.description}
        </Typography>
        <Link
          to={handlingLinkTextSpace(
            `/channel/${snippet?.channelTitle}/${snippet?.channelId}`
          )}
        >
          <Typography
            variant="body2"
            color="gray"
            sx={{
              m: "15px 5px 5px 0",
              cursor: "pointer",
              ":hover": { color: "white" },
            }}
          >
            {snippet?.channelTitle}
          </Typography>
        </Link>
        <Typography variant="caption" color="gray">
          {contentPublishedTime(snippet?.publishTime)}
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchedVideo;
