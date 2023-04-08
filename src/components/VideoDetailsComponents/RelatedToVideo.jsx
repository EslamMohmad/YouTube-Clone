import { Stack, Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import useLocationDetails from "../../hooks/useLocationDetails";
import { fetchRelatedVideos } from "../../Store/APIs";
import VideoSuggested from "../ReuseableComponents/VideoSuggested";

const RelatedToVideo = () => {
  const {
    VideoPage: {
      relatedVideos,
      prevVideoId,
      playListVideos,
      prevPlaylistId,
      playlistDetails,
    },
  } = useSelector(({ GlobalSlice }) => GlobalSlice);
  const { search, hash } = useLocationDetails();
  const action = useDispatch();

  useEffect(() => {
    if (hash !== "playlist") {
      if (search !== prevVideoId) {
        action(fetchRelatedVideos(search));
      }
    } else {
      if (playListVideos.length) {
        if (playlistDetails?.id?.playlistId !== prevPlaylistId) {
          action(
            fetchRelatedVideos(playListVideos[0]?.snippet?.resourceId?.videoId)
          );
        }
      }
    }
  }, [action, playlistDetails?.id?.playlistId]);

  return (
    <Stack gap={2}>
      {relatedVideos.map((item, idx) => (
        <Box key={idx}>
          <VideoSuggested video={item} />
        </Box>
      ))}
    </Stack>
  );
};

export default RelatedToVideo;
