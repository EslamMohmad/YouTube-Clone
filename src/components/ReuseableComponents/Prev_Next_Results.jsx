import React from "react";
import { Stack, Button } from "@mui/material";
import {
  fetch_Next_Prev_SearchResults,
  fetch_Next_Prev_ChannelVideos,
  fetch_Next_Prev_FeedVideos,
  fetch_Next_Prev_TagFeedVideos,
} from "../../Store/APIs";
import { useSelector, useDispatch } from "react-redux";
import {
  decreasePageIndex,
  increasePageIndex,
} from "../../Store/Actions/Actions";
import { useParams } from "react-router-dom";

const Prev_Next_Results = () => {
  const {
    FeedSlice: {
      nextVideosResultsCode: nextFeedVideosCode,
      prevVideosResultsCode: prevFeedVideosCode,
      currentVideosPageIndex,
      currentTag,
    },
    ChannelSlice: {
      nextVideosResultsCode: nextChannelVideosCode,
      prevVideosResultsCode: prevChannelVideosCode,
      currentChannelVideosPageIndex,
      channelDetails: { id },
    },
    GlobalSlice: { currentRoute },
    SearchSlice: {
      nextVideosResultsCode: nextSearchVideosCode,
      prevVideosResultsCode: prevSearchVideosCode,
      currentSearchVideosPageIndex,
      searchText,
    },
  } = useSelector((state) => state);

  const action = useDispatch();

  const { name } = useParams();

  const Next_Prev_Actions = (feedCode, channelCode, searchCode, funcType) => {
    if (currentRoute === "home") {
      currentTag === "most popular"
        ? action(fetch_Next_Prev_FeedVideos(feedCode))
        : action(
            fetch_Next_Prev_TagFeedVideos({
              q: currentTag,
              pageToken: feedCode,
            })
          );
      action(funcType(currentVideosPageIndex));
    } else if (currentRoute === "channel") {
      action(
        fetch_Next_Prev_ChannelVideos({
          pageToken: channelCode,
          channelId: id,
        })
      );
      action(funcType(currentChannelVideosPageIndex));
    } else if (currentRoute === "search") {
      action(fetch_Next_Prev_SearchResults({ q: name, pageToken: searchCode }));
      action(funcType(currentSearchVideosPageIndex));
    }
  };

  const prevButtonHandler = () => {
    if (currentRoute === "home") {
      return currentVideosPageIndex ? false : true;
    } else if (currentRoute === "channel") {
      return currentChannelVideosPageIndex ? false : true;
    } else if (currentRoute === "search") {
      return currentSearchVideosPageIndex ? false : true;
    }
  };

  return (
    <Stack
      flexDirection="row"
      justifyContent="center"
      sx={{
        backgroundColor: "background.primaryColor",
        position: "sticky",
        bottom: "0",
        py: 2,
      }}
      gap={2}
    >
      <Button
        variant="outlined"
        color="info"
        disabled={prevButtonHandler()}
        onClick={() => {
          return Next_Prev_Actions(
            prevFeedVideosCode,
            prevChannelVideosCode,
            prevSearchVideosCode,
            decreasePageIndex
          );
        }}
      >
        prev
      </Button>
      <Button
        variant="outlined"
        color="info"
        onClick={() => {
          return Next_Prev_Actions(
            nextFeedVideosCode,
            nextChannelVideosCode,
            nextSearchVideosCode,
            increasePageIndex
          );
        }}
      >
        next
      </Button>
    </Stack>
  );
};

export default Prev_Next_Results;
