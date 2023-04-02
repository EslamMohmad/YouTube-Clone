import React, { useEffect, useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import { fetchFromAPI } from "../../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import SortComment from "./SortComment";
import Comment from "./Comment";

const VideoComments = ({ statistics }) => {
  const [comment, setComment] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(
      `commentThreads?part=snippet,replies,id&maxResults=30&videoId=${id}`
    ).then(({ items }) => setComment(items));
  }, [id]);

  return (
    <Box sx={{ py: 2 }}>
      <Stack flexDirection="row" gap={3} alignItems="center">
        <Typography variant="h6" sx={{ py: 2 }}>
          {statistics?.commentCount} Comments
        </Typography>
        <SortComment />
      </Stack>
      <Box>
        {comment.map((item) => (
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
