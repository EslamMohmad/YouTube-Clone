import { useEffect } from "react";

import { Box } from "@mui/material";
import { Videos } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedVideos, fetchTagVideos } from "../Store/APIs";
import FeedTags from "../components/FeedPageComponents/FeedTags";

const Feed = () => {
  const {
    FeedPage: {
      selectedCategory,
      prevSelectedCategory,
      feedVideos,
      currentTag,
    },
  } = useSelector(({ GlobalSlice }) => GlobalSlice);

  const action = useDispatch();

  useEffect(() => {
    //don't call api when get back to feed page
    if (currentTag === "most popular") {
      selectedCategory !== prevSelectedCategory &&
        action(fetchFeedVideos(selectedCategory));
    } else {
      currentTag !== prevSelectedCategory && action(fetchTagVideos(currentTag));
    }
  }, [action, currentTag]);

  return (
    <Box>
      <FeedTags />
      <Videos filter={["video"]} location="home" data={feedVideos} />
    </Box>
  );
};

export default Feed;
