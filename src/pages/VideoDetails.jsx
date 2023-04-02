import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stack, Box } from "@mui/material";

import { Video, Suggestions } from "../components";
import VideoDescription from "../components/VideoDetailsComponents/VideoDescription";
import { useDispatch, useSelector } from "react-redux";
import { fetchVideoDetails, fetchRelatedVideos } from "../Store/APIs";
import { toggleCategoryMeun } from "../Store/ModalSlice";
import { setCurrentRoute } from "../Store/GlobalSlice";

const VideoDetails = () => {
  const {
    VideoPage: { videoDetails, relatedVideos, prevVideoId },
  } = useSelector(({ GlobalSlice }) => GlobalSlice);
  const { id } = useParams();
  const action = useDispatch();

  useEffect(() => {
    if (id !== prevVideoId) {
      action(fetchVideoDetails(id));
      action(fetchRelatedVideos(id));
    }
    //to reset state
    action(toggleCategoryMeun({ category: false, overlay: false }));
    action(setCurrentRoute("video"));
  }, [action, id]);

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
      <Suggestions data={relatedVideos} />
    </Stack>
  );
};

export default VideoDetails;
