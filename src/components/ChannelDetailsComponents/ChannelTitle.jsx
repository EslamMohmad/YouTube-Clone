import React, { useEffect } from "react";

import { Stack, Box, Typography, Avatar } from "@mui/material";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { countingUsers } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { fetchChannelDetails } from "../../Store/APIs";
const ChannelTitle = () => {
  const {
    ChannelPage: { channelDetails },
    VideoPage: { videoDetails },
  } = useSelector(({ GlobalSlice }) => GlobalSlice);

  const action = useDispatch();

  const { pathname } = useLocation();

  const navToChannel = useNavigate();

  const { name } = useParams();

  const handleImgStyle = () =>
    pathname.includes("channel")
      ? { width: "70px", height: "70px" }
      : { width: "40px", height: "40px", cursor: "pointer" };

  const handleTxtSize = () => (pathname.includes("channel") ? "h5" : "body1");

  const handlingRouting = (e) =>
    !pathname.includes("channel")
      ? navToChannel(
          `/YouTube-Clone/channel/${channelDetails?.snippet?.title}/${videoDetails?.snippet?.channelId}`
        )
      : e.preventDefault();

  useEffect(() => {
    if (pathname.includes("video")) {
      videoDetails?.snippet?.channelId &&
        (videoDetails?.snippet?.channelTitle !== name ||
          channelDetails?.snippet?.title !== name) &&
        action(fetchChannelDetails(videoDetails?.snippet?.channelId));
    }
  }, [action, pathname, videoDetails?.snippet?.channelId]);

  return (
    <Box
      sx={{
        backgroundColor: "background.primaryColor",
      }}
    >
      <Stack flexDirection={"row"}>
        <Avatar
          src={channelDetails?.snippet?.thumbnails?.medium?.url}
          onClick={(e) => handlingRouting(e)}
          sx={handleImgStyle()}
        />
        <Box sx={{ color: "white", ml: 2 }}>
          <Typography
            variant={handleTxtSize()}
            sx={{
              cursor: `${pathname.includes("channel") ? "unset" : "pointer"}`,
            }}
            onClick={(e) => handlingRouting(e)}
          >
            {channelDetails?.snippet?.title}
          </Typography>
          {pathname.includes("channel") ? (
            <Typography variant="body2" sx={{ color: "darkgray" }}>
              {channelDetails?.snippet?.customUrl}
            </Typography>
          ) : (
            ""
          )}
          <Typography variant="body2" sx={{ color: "darkgray" }}>
            {countingUsers(channelDetails?.statistics?.subscriberCount)}{" "}
            subscribers
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default ChannelTitle;
