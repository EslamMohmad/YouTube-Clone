import { useEffect } from "react";
import { Videos, Banner, ChannelTitle } from "../components";
import { Stack, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchChannelVideos, fetchChannelDetails } from "../Store/APIs";
import { toggleCategoryMeun } from "../Store/ModalSlice";
import { setCurrentRoute } from "../Store/GlobalSlice";

const ChannelDetails = () => {
  const { id, name } = useParams();

  const { channelVideos, prevChannelId, channelDetails, fetchingDataState } =
    useSelector(({ ChannelSlice }) => ChannelSlice);

  const action = useDispatch();

  useEffect(() => {
    if (id !== prevChannelId) {
      action(fetchChannelVideos(id));
      channelDetails?.snippet?.title !== name &&
        action(fetchChannelDetails(id));
    }
    action(setCurrentRoute("channel"));
    //to reset state
    action(toggleCategoryMeun({ category: false, overlay: false }));
  }, [action, id]);

  return (
    <Stack>
      <Banner />
      <Box
        sx={{
          mx: { xs: "16px", md: "auto" },
          width: { md: "85%" },
        }}
      >
        <Box sx={{ py: 3 }}>
          <ChannelTitle />
        </Box>
        <Videos
          filter={["video"]}
          location="channel"
          data={channelVideos}
          fetchingState={fetchingDataState}
        />
      </Box>
    </Stack>
  );
};

export default ChannelDetails;
