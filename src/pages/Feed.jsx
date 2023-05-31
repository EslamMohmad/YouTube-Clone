import { useEffect } from "react";

import { Box } from "@mui/material";
import { Videos } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { fetchFeedVideos, fetchTagVideos } from "../Store/APIs";
import FeedTags from "../components/FeedPageComponents/FeedTags";
import { fetchFeedVideosByAccessToken } from "../auth/auth";
import { setCurrentRoute } from "../Store/GlobalSlice";

const Feed = () => {
  const {
    FeedSlice: {
      selectedCategory,
      prevSelectedCategory,
      feedVideos,
      currentTag,
      fetchingDataState,
    },
    AuthSlice: { userDetails },
  } = useSelector((state) => state);

  const action = useDispatch();

  useEffect(() => {
    //don't call api when get back to feed page

    // if (window.sessionStorage.userId) {
    //   action(fetchFeedVideosByAccessToken(window.sessionStorage.userId));
    // } else {
    //   if (currentTag === "most popular") {
    //     // selectedCategory !== prevSelectedCategory &&
    //     action(fetchFeedVideos(selectedCategory));
    //   } else {
    //     // currentTag !== prevSelectedCategory &&
    //     action(fetchTagVideos(currentTag));
    //   }
    // }

    if (currentTag === "most popular") {
      selectedCategory !== prevSelectedCategory &&
        action(fetchFeedVideos(selectedCategory));
    } else {
      currentTag !== prevSelectedCategory && action(fetchTagVideos(currentTag));
    }
    action(setCurrentRoute("home"));
  }, [action, currentTag, userDetails]);

  return (
    <Box>
      <FeedTags />
      <Videos
        filter={["video"]}
        location="home"
        data={feedVideos}
        fetchingState={fetchingDataState}
      />
    </Box>
  );
};

export default Feed;
