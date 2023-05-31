import React, { useEffect, useState } from "react";
import { Box, Avatar, IconButton, Button, Typography } from "@mui/material";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { toggleSearchBarState } from "../../Store/ModalSlice";
import { useDispatch, useSelector } from "react-redux";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useGoogleLogin } from "@react-oauth/google";
import { getUserDetails } from "../../auth/auth";
import AccountOptionsSection from "../ReuseableComponents/AccountOptionsSection";
import { toggleAccountOptions } from "../../Store/AuthSlice";

const Account = () => {
  const { userDetails, accountOptionsState } = useSelector(
    ({ AuthSlice }) => AuthSlice
  );
  const [user, setUser] = useState({});
  const action = useDispatch();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse);
      window.sessionStorage.setItem("userId", codeResponse?.access_token);
      setUser(codeResponse);
    },
    ux_mode: "redirect",
    onError: (error) => console.error("Login Failed:", error),
  });

  useEffect(() => {
    if (window.sessionStorage.userId) {
      action(getUserDetails(window.sessionStorage.userId));
    }
  }, [action, user]);

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
        {window.sessionStorage.userId ? (
          <Avatar
            sx={{ cursor: "pointer" }}
            src={userDetails?.picture}
            onClick={() => action(toggleAccountOptions())}
          />
        ) : (
          <Button
            sx={{
              svg: { pr: 1, color: "text.link" },
              span: { lineHeight: "0px", color: "text.link" },
              ":hover": { backgroundColor: "primary" },
              px: 1.5,
              borderRadius: "25px",
              border: "1px solid",
              borderColor: "border.whiteBlackColor",
            }}
            onClick={login}
          >
            <AccountCircleIcon />
            <Typography variant="caption">sign in</Typography>
          </Button>
        )}
      </Box>
      {userDetails?.id && accountOptionsState && <AccountOptionsSection />}
    </Box>
  );
};

export default Account;
