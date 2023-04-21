import React, { useState } from "react";
import {
  Typography,
  Stack,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link } from "react-router-dom";
import { contentPublishedTime, countingUsers } from "../../utils/constants";
import VideoStatistics from "./VideoStatistics";

const VideoInfo = ({ details, statistics }) => {
  const [showMoreState, setShowMoreState] = useState(false);

  const videoInfoArr = details?.description?.split(/\n/);

  const theme = useTheme();

  const largeThanMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box
      sx={{
        backgroundColor: "background.lightBlackColor",
        p: `${largeThanMobile ? "16px" : 0}`,
        a: { color: "text.link" },
        borderRadius: `${largeThanMobile ? "10px" : "0px"}`,
      }}
    >
      <Stack gap={"10px"}>
        <VideoStatistics>
          {largeThanMobile && (
            <Typography
              variant="caption"
              sx={{ cursor: "pointer" }}
              onClick={() => setShowMoreState(!showMoreState)}
            >
              {showMoreState ? "less..." : "...more"}
            </Typography>
          )}
        </VideoStatistics>
        <Typography variant="body2">
          {videoInfoArr?.filter((_, idx) => idx === 0)}
        </Typography>

        {(showMoreState || !largeThanMobile) &&
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
    </Box>
  );
};

export default VideoInfo;
