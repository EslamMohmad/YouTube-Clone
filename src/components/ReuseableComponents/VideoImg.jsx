import React from "react";
import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { handlingLinkTextSpace } from "../../utils/constants";

const VideoImg = ({ info: { id, url, channelTitle } }) => {
  return (
    <Link
      to={handlingLinkTextSpace(
        `/YouTube-Clone/video/${channelTitle}?id=${id}#video`
      )}
    >
      <CardMedia
        component="img"
        height="100%"
        image={url}
        alt={`image/${id}`}
        sx={{ borderRadius: { xs: 0, sm: "20px" }, maxHeight: "230px" }}
      />
    </Link>
  );
};

export default VideoImg;
