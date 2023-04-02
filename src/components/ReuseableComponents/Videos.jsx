import { VideoCard, ChannelCard, PlayListCard } from "..";
import { Grid, Box } from "@mui/material";
import { useSelector } from "react-redux";
import LoadingComponent from "../../utils/LoadingComponent";

const Videos = ({ filter, location, data }) => {
  const { fetchingDataState } = useSelector(({ GlobalSlice }) => GlobalSlice);

  const detectingContent = () => {
    const filterdContent = () => {
      const result = [];
      filter.map((prop) => {
        result.push(
          ...data.filter(
            (item) => (item?.id?.kind || item?.kind) === `youtube#${prop}`
          )
        );
      });
      return result;
    };

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

  return (
    <Box
      sx={
        location === "home"
          ? {
              height: "calc(100vh - (75px + 58px))",
              overflowY: "auto",
              px: 2,
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
        {fetchingDataState !== "pending"
          ? detectingContent()
          : Array(10)
              .fill()
              .map((e, idx) => <LoadingComponent key={idx} />)}
      </Grid>
    </Box>
  );
};

export default Videos;
