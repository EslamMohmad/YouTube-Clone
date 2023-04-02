import { configureStore } from "@reduxjs/toolkit";
import GlobalSlice from "./GlobalSlice";
import ModalSlice from "./ModalSlice";
import SearchSlice from "./SearchSlice";

const Store = configureStore({
  reducer: { GlobalSlice, ModalSlice, SearchSlice },
});

export default Store;
