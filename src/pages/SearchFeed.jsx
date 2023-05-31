import { useEffect, useRef } from "react";
import { Stack, Box } from "@mui/material";
import React from "react";
import SearchedChannel from "../components/SearchPageComponents/SearchedChannel";
import SearchedPlaylist from "../components/SearchPageComponents/SearchedPlaylist";
import SearchedVideo from "../components/SearchPageComponents/SearchedVideo";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../Store/APIs";
import { useParams } from "react-router-dom";
import { toggleSearchBarState } from "../Store/ModalSlice";
import { useScrollToTop } from "../hooks/useScrollToTop";
import Prev_Next_Results from "../components/ReuseableComponents/Prev_Next_Results";
import { setCurrentRoute } from "../Store/GlobalSlice";
import { inputTxt } from "../Store/SearchSlice";
import LoadingComponent from "../components/ReuseableComponents/LoadingComponent";
const SearchFeed = () => {
  const { searchText, searchResults, prevSearchText, fetchSearchResultsState } =
    useSelector(({ SearchSlice }) => SearchSlice);
  const action = useDispatch();

  const { name } = useParams();

  /*
  Array(10)
              .fill()
              .map((e, idx) => <LoadingComponent key={idx} />)
   */

  useEffect(() => {
    if ((searchText || name) && (name || searchText) !== prevSearchText) {
      action(fetchSearchResults(searchText || name));
    }
    action(toggleSearchBarState(false));
    action(setCurrentRoute("search"));
  }, [action, searchText]);

  const scrollableElement = useRef();

  useScrollToTop(scrollableElement, searchText);

  return (
    <Box
      ref={scrollableElement}
      sx={{
        maxWidth: { xs: "100%", sm: "75%", md: "1000px" },
        mx: "auto",
        my: 3,
        height: "100%",
        overflow: "auto",
        height: "calc(100vh - (75px + 40px))",
        px: "16px",
      }}
    >
      <Stack gap={2}>
        {fetchSearchResultsState === "pending"
          ? Array(15)
              .fill()
              .map((e, idx) => <LoadingComponent key={idx} />)
          : searchResults.map((item) => (
              <Box
                key={item.etag}
                sx={{ order: `${item?.id?.kind.includes("channel") ? 0 : 1}` }}
              >
                {item?.id?.kind.includes("video") && (
                  <SearchedVideo key={item.etag} data={item} />
                )}
                {item?.id?.kind.includes("channel") && (
                  <SearchedChannel key={item.etag} data={item} />
                )}
                {item?.id?.kind.includes("playlist") && (
                  <SearchedPlaylist key={item.etag} data={item} />
                )}
              </Box>
            ))}
      </Stack>
      <Prev_Next_Results />
    </Box>
  );
};

export default SearchFeed;
