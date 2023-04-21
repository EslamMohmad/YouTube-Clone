import React from "react";
import { Stack, Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import ChannelTitle from "../ChannelDetailsComponents/ChannelTitle";
import VideoComments from "./VideoComments";
import VideoInfo from "./VideoInfo";
import VideoOptionBtn from "../ReuseableComponents/VideoOptionBtn";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  contentPublishedTime,
  countingUsers,
  videoButtonsOption,
} from "../../utils/constants";
import LikesCounter from "../ReuseableComponents/LikesCounter";
import PlaylistVideos from "./PlaylistVideos";
import useLocationDetails from "../../hooks/useLocationDetails";
import { toggleVideoMoreInfo } from "../../Store/ModalSlice";
import { useDispatch } from "react-redux";
import VideoStatistics from "./VideoStatistics";

const VideoDescription = ({
  videoDetails: { contentDetails, snippet, statistics },
}) => {
  const { hash } = useLocationDetails();

  const theme = useTheme();

  const media = useMediaQuery(theme.breakpoints.down("lg"));

  const mobileView = useMediaQuery(theme.breakpoints.down("sm"));

  const action = useDispatch();

  return (
    <Stack gap={2}>
      {hash === "playlist" && media && <PlaylistVideos />}
      <Typography
        variant="h5"
        fontSize="1.4rem"
        sx={{
          "@media (max-width:430px)": {
            fontSize: "18px",
          },
        }}
      >
        {snippet?.title}
      </Typography>
      {mobileView && (
        <VideoStatistics>
          <Typography
            variant="caption"
            color="white"
            sx={{ cursor: "pointer" }}
            onClick={() => action(toggleVideoMoreInfo(true))}
          >
            ...more
          </Typography>
        </VideoStatistics>
      )}
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={2}
      >
        <Stack
          flexDirection="row"
          gap={2.5}
          sx={{
            "@media (max-width : 1400px)": {
              justifyContent: "space-between",
              width: "100%",
            },
            "@media (max-width : 1200px)": {
              justifyContent: "stratch",
              width: "auto",
            },
            "@media (max-width : 952px)": {
              justifyContent: "space-between",
              width: "100%",
            },
          }}
        >
          <ChannelTitle />
          <VideoOptionBtn>
            <NotificationsActiveIcon />
            <Typography variant="body2" fontWeight="bold" sx={{ ml: 1 }}>
              subscribe
            </Typography>
          </VideoOptionBtn>
        </Stack>
        <Box
          sx={{
            ml: "auto",
            width: "auto !important",
            "@media (max-width : 737px)": {
              width: "100%",
              overflowX: "auto",
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "transparent",
              },
            },
          }}
        >
          <Stack flexDirection="row" gap={2}>
            <VideoOptionBtn parent="videoOption">
              <LikesCounter
                likes={statistics?.likeCount}
                parent="videoOptions"
              />
            </VideoOptionBtn>
            {videoButtonsOption.map(
              (button) =>
                button.name !== "subscribe" && (
                  <VideoOptionBtn key={button.name}>
                    {button.icon}
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      sx={{ ml: 1 }}
                    >
                      {button.name}
                    </Typography>
                  </VideoOptionBtn>
                )
            )}
            <VideoOptionBtn>
              <MoreHorizIcon />
            </VideoOptionBtn>
          </Stack>
        </Box>
      </Stack>
      {!mobileView && <VideoInfo details={snippet} statistics={statistics} />}
      <VideoComments statistics={statistics} />
    </Stack>
  );
};

export default VideoDescription;
