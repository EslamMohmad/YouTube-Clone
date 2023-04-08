import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Stack, Box } from "@mui/material";

import { Video, Suggestions } from "../components";
import VideoDescription from "../components/VideoDetailsComponents/VideoDescription";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchVideoDetails,
  fetchRelatedVideos,
  fetchPlaylistVideos,
  fetchVideoComments,
} from "../Store/APIs";
import { toggleCategoryMeun } from "../Store/ModalSlice";
import { setCurrentRoute } from "../Store/GlobalSlice";
import useLocationDetails from "../hooks/useLocationDetails";

const VideoDetails = () => {
  const {
    GlobalSlice: {
      VideoPage: {
        videoDetails,
        relatedVideos,
        prevVideoId,
        prevPlaylistId,
        playListVideos,
        playlistDetails,
      },
    },
    ModalSlice: { overlayState, categoryMeunState },
  } = useSelector((state) => state);
  const { hash, search } = useLocationDetails();

  const action = useDispatch();

  useEffect(() => {
    if (hash === "video") {
      if (search !== prevVideoId) {
        action(fetchVideoDetails(search));
      }
    } else if (hash === "playlist") {
      if (prevPlaylistId !== search) {
        action(fetchPlaylistVideos(search));
      }
    }

    //to reset state
    if (overlayState && categoryMeunState) {
      action(toggleCategoryMeun({ category: false, overlay: false }));
      action(setCurrentRoute("video"));
    }
  }, [action, search, hash]);

  // useEffect(() => {
  //   if (hash === "playlist" && playListVideos.length) {
  //     if (playlistDetails?.id?.playlistId !== prevPlaylistId) {
  //       action(
  //         fetchVideoDetails(playListVideos[0]?.snippet?.resourceId?.videoId)
  //       );
  //     } else if (playlistDetails?.id?.playlistId) {
  //     }
  //   }
  // }, [action, playListVideos.length, playlistDetails?.id?.playlistId]);

  return (
    <Stack
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="space-between"
      gap={3}
      sx={{
        color: "white",
        px: { xs: 3, lg: 5 },
        py: 4,
      }}
    >
      <Box sx={{ flexGrow: { md: 1 } }}>
        <Video src={videoDetails?.player?.embedHtml} />
        <VideoDescription videoDetails={videoDetails} />
      </Box>
      <Suggestions />
    </Stack>
  );
};

export default VideoDetails;
