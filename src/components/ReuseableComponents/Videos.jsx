import { VideoCard, ChannelCard, PlayListCard } from "..";
import { Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";
import LoadingComponent from "./LoadingComponent";
import { useScrollToTop } from "../../hooks/useScrollToTop";
import { useRef } from "react";
import Prev_Next_Results from "./Prev_Next_Results";

const Videos = ({ filter, location, data, fetchingState }) => {
  const { currentTag } = useSelector(({ FeedSlice }) => FeedSlice);

  const detectingContent = () => {
    const filterdContent = () => {
      const result = [];
      filter.map((prop) =>
        result.push(
          ...data.filter(
            (item) => (item?.id?.kind || item?.kind) === `youtube#${prop}`
          )
        )
      );
      return result;
    };

    console.log(fetchingState);

    return filterdContent().map((item, idx) => (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        xl={3}
        key={`${item.snippet.channelId}_000${idx}`}
        sx={{
          order: `${item.kind === "youtube#channel" ? 0 : 1}`,
        }}
        type={item.kind.replace("youtube#", "")}
      >
        {(item?.id?.kind || item?.kind) === "youtube#video" && (
          <VideoCard video={item} />
        )}
        {item.kind === "youtube#channel" && <ChannelCard channel={item} />}
        {item.kind === "youtube#playlist" && <PlayListCard playlist={item} />}
      </Grid>
    ));
  };

  const scrollableElement = useRef();

  useScrollToTop(scrollableElement, currentTag);

  return (
    <Box
      ref={scrollableElement}
      sx={
        location === "home"
          ? {
              height: {
                xs: "calc(100vh - (75px + 58px + 77px))",
                sm: "calc(100vh - (75px + 58px))",
              },
              overflowY: "auto",
              p: { xs: 0, sm: "0 10px 0 16px" },
              mr: { xs: "-8px", sm: 0 },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "background.whiteBlackColor",
              },
            }
          : {
              width: "auto",
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "background.whiteBlackColor",
              },
            }
      }
    >
      <Grid container spacing={{ sm: 3 }} mb={2}>
        {fetchingState !== "pending"
          ? detectingContent()
          : Array(15)
              .fill()
              .map((e, idx) => <LoadingComponent key={idx} />)}
      </Grid>
      <Prev_Next_Results />
    </Box>
  );
};

export default Videos;
