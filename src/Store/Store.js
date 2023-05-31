import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./GlobalSlice";
import ModalSlice from "./ModalSlice";
import SearchSlice from "./SearchSlice";
import AuthSlice from "./AuthSlice";
import FeedSlice from "./FeedSlice";
import ChannelSlice from "./Channelslice";
import VideoSlice from "./VideoSlice";

const Store = configureStore({
  reducer: {
    GlobalSlice,
    ModalSlice,
    SearchSlice,
    AuthSlice,
    FeedSlice,
    ChannelSlice,
    VideoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default Store;
