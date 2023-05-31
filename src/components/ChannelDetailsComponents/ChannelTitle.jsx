import React, { useEffect } from "react";

import { Stack, Box, Typography, Avatar } from "@mui/material";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import { countingUsers, handlingLinkTextSpace } from "../../utils/constants";
import { useSelector, useDispatch } from "react-redux";
import { fetchChannelDetails } from "../../Store/APIs";
const ChannelTitle = () => {
  const {
    ChannelSlice: { channelDetails },
    VideoSlice: { videoDetails },
  } = useSelector((state) => state);

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
        display: "flex",
      }}
    >
      {pathname ? (
        <Link
          to={handlingLinkTextSpace(
            `/YouTube-Clone/channel/${channelDetails?.snippet?.title}/${videoDetails?.snippet?.channelId}`
          )}
        >
          <Avatar
            src={channelDetails?.snippet?.thumbnails?.medium?.url}
            sx={handleImgStyle()}
          />
        </Link>
      ) : (
        <Avatar
          src={channelDetails?.snippet?.thumbnails?.medium?.url}
          sx={handleImgStyle()}
        />
      )}
      <Stack flexDirection={"row"}>
        <Box sx={{ color: "white", ml: 2 }}>
          <Typography
            variant={handleTxtSize()}
            sx={{
              cursor: `${pathname.includes("channel") ? "unset" : "pointer"}`,
              "@media (max-width:430px)": {
                fontSize: "12px",
              },
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
