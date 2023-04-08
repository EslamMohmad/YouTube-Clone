import React, { useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import SortComment from "./SortComment";
import Comment from "./Comment";
import { fetchVideoComments } from "../../Store/APIs";
import { useDispatch, useSelector } from "react-redux";
import useLocationDetails from "../../hooks/useLocationDetails";

const VideoComments = ({ statistics }) => {
  const {
    VideoPage: {
      videoComments,
      prevVideoId,
      playListVideos,
      playlistDetails,
      videoDetails,
      prevPlaylistId,
    },
  } = useSelector(({ GlobalSlice }) => GlobalSlice);

  const action = useDispatch();

  const { hash, search } = useLocationDetails();

  useEffect(() => {
    if (hash !== "playlist") {
      if (search !== prevVideoId) {
        action(fetchVideoComments(search));
      }
    } else {
      if (playListVideos.length) {
        if (playlistDetails?.id?.playlistId !== prevPlaylistId) {
          action(
            fetchVideoComments(playListVideos[0]?.snippet?.resourceId?.videoId)
          );
        }
      }
    }
  }, [action, playlistDetails?.id?.playlistId]);

  return (
    <Box sx={{ py: 2 }}>
      <Stack flexDirection="row" gap={3} alignItems="center">
        <Typography variant="h6" sx={{ py: 2 }}>
          {statistics?.commentCount} Comments
        </Typography>
        <SortComment />
      </Stack>
      <Box>
        {videoComments.map((item) => (
          <Comment
            key={item.etag}
            comment={item?.snippet?.topLevelComment?.snippet}
            replies={item?.replies}
            avatarDim={"40px"}
          />
        ))}
      </Box>
    </Box>
  );
};

export default VideoComments;
