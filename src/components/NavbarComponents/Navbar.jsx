import { Stack, Box, useMediaQuery } from "@mui/material";
import SearchBar from "./SearchBar";
import Menu from "./Menu";
import Account from "./Account";
import { useDispatch, useSelector } from "react-redux";
import SearchBarMobileView from "./SearchBarMobileView";
import { toggleSearchBarState } from "../../Store/ModalSlice";
import { useTheme } from "@emotion/react";
import React, { useEffect } from "react";

const Navbar = () => {
  const { searchBarState } = useSelector(({ ModalSlice }) => ModalSlice);
  const action = useDispatch();
  const theme = useTheme();
  const mobileQuery = useMediaQuery(theme.breakpoints.down("sm"));

  document.body.addEventListener(
    "click",
    () => searchBarState && action(toggleSearchBarState(false))
  );

  useEffect(() => {
    if (!mobileQuery) {
      action(toggleSearchBarState(false));
    }
  }, [action, mobileQuery]);

  return (
    <Stack
      direction="row"
      px={2}
      alignItems="center"
      sx={{
        height: "75px",
        position: "sticky",
        backgroundColor: "#0f0f0f",
        top: "0",
        justifyContent: "space-between",
        zIndex: "2",
        gap: { xs: 1.5, lg: 3 },
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {mobileQuery && searchBarState ? (
        <SearchBarMobileView />
      ) : (
        <>
          <Menu />
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              flexGrow: { xs: 1, md: 0 },
            }}
          >
            <SearchBar />
          </Box>
          <Account />
        </>
      )}
    </Stack>
  );
};

export default Navbar;
