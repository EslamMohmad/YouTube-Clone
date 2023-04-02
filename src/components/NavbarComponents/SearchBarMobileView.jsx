import React from "react";
import { Box, IconButton, Stack } from "@mui/material";
import SearchBar from "./SearchBar";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { toggleSearchBarState } from "../../Store/ModalSlice";
import { useDispatch } from "react-redux";

const SearchBarMobileView = () => {
  const action = useDispatch();
  return (
    <Stack
      sx={{
        justifyContent: "space-between",
        flexDirection: "row",
        width: "100%",
        gap: 1,
      }}
    >
      <IconButton
        sx={{ color: " white" }}
        onClick={() => action(toggleSearchBarState(false))}
      >
        <ArrowBackIcon />
      </IconButton>
      <SearchBar />
      <IconButton sx={{ color: " white" }}>
        <KeyboardVoiceIcon />
      </IconButton>
    </Stack>
  );
};

export default SearchBarMobileView;
