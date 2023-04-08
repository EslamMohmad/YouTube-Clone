import React from "react";
import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

const VideoImg = ({ info: { id, url, channelTitle } }) => {
  return (
    <Link to={`/YouTube-Clone/video/${channelTitle}?id=${id}#video`}>
      <CardMedia
        component="img"
        height="100%"
        image={url}
        alt={`image/${id}`}
        sx={{ borderRadius: "20px", maxHeight: "200px" }}
      />
    </Link>
  );
};

export default VideoImg;
