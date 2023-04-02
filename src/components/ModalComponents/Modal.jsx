import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleCategoryMeun } from "../../Store/ModalSlice";
import { useLocation } from "react-router-dom";
import ModalSidebar from "./ModalSidebar";

export const Overlay = () => {
  const action = useDispatch();

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        position: "fixed",
        zIndex: 0,
        top: 0,
        left: 0,
        backgroundColor: "#0000007d",
      }}
      onClick={() =>
        action(toggleCategoryMeun({ category: false, overlay: false }))
      }
    ></Box>
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
      {overlayState && <Overlay />}
      {currentRoute !== "home" && (
        <ModalSidebar state={{ categoryMeunState, sidebarMediaQuery }} />
      )}
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
