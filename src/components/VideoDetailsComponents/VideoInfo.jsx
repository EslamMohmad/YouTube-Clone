import React, { useState } from "react";
import { Typography, Stack, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { contentPublishedTime, countingUsers } from "../../utils/constants";

const VideoInfo = ({ details, statistics }) => {
  const [showMoreState, setShowMoreState] = useState(false);

  const videoInfoArr = details?.description?.split(/\n/);

  return (
    <Stack
      gap={"10px"}
      sx={{
        backgroundColor: "background.lightBlackColor",
        borderRadius: 2,
        cursor: "pointer",
        p: 2,
        a: { color: "text.link" },
        ":hover": { backgroundColor: "action.hover" },
        ":active": { backgroundColor: "action.active" },
      }}
      onClick={() => setShowMoreState(!showMoreState)}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          h6: { fontSize: "14px", fontWeight: "bold", textTransform: "none" },
        }}
      >
        <Typography variant="subtitle2">
          {countingUsers(statistics?.viewCount)} views
        </Typography>
        <Typography variant="subtitle2">
          {contentPublishedTime(details?.publishedAt)} ago
        </Typography>
      </Box>
      <Typography variant="body2">
        {videoInfoArr?.filter((_, idx) => idx === 0)}
      </Typography>
      {showMoreState &&
        videoInfoArr
          ?.filter((_, idx) => idx !== 0)
          .map((txt, idx) =>
            txt.includes("https") ? (
              <Typography
                variant="body2"
                key={idx}
                sx={{ wordBreak: "break-word" }}
              >
                <span>{txt.slice(0, txt.indexOf("https"))}</span>
                <a
                  href={txt.slice(txt.indexOf("https"), txt.length)}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  {txt.slice(txt.indexOf("https"), txt.length)}
                </a>
              </Typography>
            ) : (
              <Typography variant="body2" key={idx}>
                {txt}
              </Typography>
            )
          )}
    </Stack>
  );
};

export default VideoInfo;
