import React from "react";

import { CardContent, Typography, Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

import { countingUsers, contentPublishedTime } from "../../utils/constants";

const VideoTitle = ({
  info: {
    id,
    channelId,
    channelTitle,
    title,
    publishedAt,
    viewCount,
    description,
  },
}) => {
  const { pathname } = useLocation();

  return (
    <CardContent
      sx={{
        backgroundColor: "background.primaryColor",
        color: "white",
        minHeight: "100px",
      }}
    >
      <Link to={`/video/${channelTitle}/${id}`}>
        <Typography
          variant="body1"
          sx={{
            mb: 1,
            maxHeight: "48px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "white",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </Typography>
      </Link>
      {pathname !== "/" && (
        <Typography
          variant="body2"
          sx={{
            maxHeight: "40px",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
          color="gray"
        >
          {description}
        </Typography>
      )}
      <Box sx={{ a: { color: "gray" } }}>
        {pathname === "/" && (
          <Link to={`/channel/${channelTitle}/${channelId}`}>
            <Typography
              variant="body2"
              sx={{
                display: "flex",
                alignItems: "center",
                ":hover": { color: "white" },
              }}
            >
              {channelTitle}
            </Typography>
          </Link>
        )}
        <Typography variant="body2" color="gray">
          {contentPublishedTime(publishedAt)} ago
          {pathname === "/" && (
            <>
              <span style={{ padding: "0 5px" }}>|</span>
              {countingUsers(viewCount)} views
            </>
          )}
        </Typography>
      </Box>
    </CardContent>
  );
};

export default VideoTitle;
