import { Box, Avatar, IconButton } from "@mui/material";
import React from "react";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { toggleSearchBarState } from "../../Store/ModalSlice";
import { useDispatch } from "react-redux";
const Account = () => {
  const action = useDispatch();

  return (
    <Box
      sx={{
        svg: {
          color: "white",
        },
        "button:hover": { backgroundColor: "background.whiteBlackColor" },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
        }}
      >
        <IconButton
          onClick={() => action(toggleSearchBarState(true))}
          sx={{ display: { xs: "block", sm: "none" }, fontSize: "0" }}
        >
          <SearchIcon />
        </IconButton>
        <IconButton>
          <VideoCallIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <Avatar
          sx={{ width: "37px", height: "37px" }}
          src={require(`../../imgs/account.jpg`)}
        />
      </Box>
    </Box>
  );
};

export default Account;
