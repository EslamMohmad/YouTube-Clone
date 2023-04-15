import React from "react";
import { Box, useTheme, useMediaQuery, Fade } from "@mui/material";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategoryMeun } from "../../Store/ModalSlice";
import { useLocation } from "react-router-dom";
import ModalSidebar from "./ModalSidebar";

export const Overlay = ({ overlayState, sidebarMediaQuery }) => {
  const action = useDispatch();

  return (
    <Fade in={overlayState && sidebarMediaQuery} mountOnEnter unmountOnExit>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "fixed",
          zIndex: 0,
          top: 0,
          left: 0,
          backgroundColor: "#0000007d",
          zIndex: 3,
        }}
        onClick={() =>
          action(toggleCategoryMeun({ category: false, overlay: false }))
        }
      ></Box>
    </Fade>
  );
};

const Modal = () => {
  const {
    ModalSlice: { overlayState, categoryMeunState },
    GlobalSlice: { currentRoute },
  } = useSelector((state) => state);

  const theme = useTheme();

  const sidebarMediaQuery = useMediaQuery(theme.breakpoints.down("lg"));

  const { pathname } = useLocation();

  return createPortal(
    <>
      <Overlay
        overlayState={overlayState}
        sidebarMediaQuery={sidebarMediaQuery}
      />
      {pathname !== "/YouTube-Clone" && (
        <ModalSidebar state={{ categoryMeunState, sidebarMediaQuery }} />
      )}
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
