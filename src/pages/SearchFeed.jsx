import { useEffect } from "react";
import { Stack, Box } from "@mui/material";
import React from "react";
import SearchedChannel from "../components/SearchPageComponents/SearchedChannel";
import SearchedPlaylist from "../components/SearchPageComponents/SearchedPlaylist";
import SearchedVideo from "../components/SearchPageComponents/SearchedVideo";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../Store/APIs";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const { searchText, searchResults, prevSearchText } = useSelector(
    ({ SearchSlice }) => SearchSlice
  );
  const action = useDispatch();

  const { name } = useParams();

  useEffect(() => {
    if ((name || searchText) && (name || searchText) !== prevSearchText) {
      action(fetchSearchResults(name || searchText));
    }
  }, [action, searchText]);

  return (
    <Box
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
        {searchResults.map((item) => (
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
    </Box>
  );
};

export default SearchFeed;
