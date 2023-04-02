import React from "react";
import { Box, IconButton, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategoryMeun } from "../../Store/ModalSlice";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "./logo.svg";
const Menu = () => {
  const {
    ModalSlice: { categoryMeunState, overlayState },
    GlobalSlice: { currentRoute },
  } = useSelector((state) => state);

  const action = useDispatch();

  const navToFeedPage = useNavigate();

  const theme = useTheme();

  const sidebarMediaQuery = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Box sx={{ display: "flex", gap: 1.5 }}>
      <IconButton
        sx={{ svg: { color: "white" } }}
        onClick={() =>
          action(
            toggleCategoryMeun({
              category: !categoryMeunState,
              overlay:
                currentRoute === "home"
                  ? sidebarMediaQuery && !overlayState
                  : !overlayState,
            })
          )
        }
      >
        <MenuIcon />
      </IconButton>

      <Box
        onClick={() => navToFeedPage(`/`)}
        sx={{
          width: "90px",
          height: "45px",
          cursor: "pointer",
          fill: "white",
        }}
      >
        <Logo />
      </Box>
    </Box>
  );
};

export default Menu;
