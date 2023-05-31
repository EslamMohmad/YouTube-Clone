import React, { useEffect } from "react";
import { Box, useTheme, useMediaQuery, Fade } from "@mui/material";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCategoryMeun,
  toggleVideoMoreComments,
  toggleVideoMoreInfo,
} from "../../Store/ModalSlice";
import { useLocation } from "react-router-dom";
import ModalSidebar from "./ModalSidebar";
import ModalMoreVideoInfo from "./ModalMoreVideoInfo";
import SlideFromBottom from "../ReuseableComponents/SlideFromBottom";

import ModalMoreVideoComments from "./ModalMoreVideoComments";

export const Overlay = ({ overlayState }) => {
  const action = useDispatch();

  return (
    <Fade in={overlayState} mountOnEnter unmountOnExit>
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
    ModalSlice: {
      overlayState,
      categoryMeunState,
      videoMoreInfo,
      videoMoreComments,
      screenScrollableState,
    },

    VideoSlice: { videoDetails, videoComments },
  } = useSelector((state) => state);

  const theme = useTheme();

  const sidebarMediaQuery = useMediaQuery(theme.breakpoints.down("lg"));

  const mobileViewMoreInfo = useMediaQuery(theme.breakpoints.down("sm"));

  const { pathname } = useLocation();

  const action = useDispatch();

  useEffect(() => {
    document.body.style.overflow = `${
      screenScrollableState ? "visible" : "hidden"
    }`;
    document.body.style.height = `${screenScrollableState ? "auto" : "100vh"}`;
  }, [screenScrollableState]);

  useEffect(() => {
    !mobileViewMoreInfo &&
      !screenScrollableState &&
      action(toggleVideoMoreInfo(false));
  }, [mobileViewMoreInfo]);

  return createPortal(
    <>
      <Overlay overlayState={overlayState} />
      {(pathname.includes("channel") || pathname.includes("video")) && (
        <ModalSidebar state={{ categoryMeunState, sidebarMediaQuery }} />
      )}
      {pathname.includes("video") && mobileViewMoreInfo && (
        <SlideFromBottom state={videoMoreInfo} callback={toggleVideoMoreInfo}>
          <ModalMoreVideoInfo videoDetails={videoDetails} />
        </SlideFromBottom>
      )}
      {pathname.includes("video") && mobileViewMoreInfo && (
        <SlideFromBottom
          state={videoMoreComments}
          callback={toggleVideoMoreComments}
        >
          <ModalMoreVideoComments comments={videoComments} />
        </SlideFromBottom>
      )}
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
