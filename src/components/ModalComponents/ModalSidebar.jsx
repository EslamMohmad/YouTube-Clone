import { Box } from "@mui/material";
import React from "react";
import SlideSidebar from "../FeedPageComponents/SlideSidebar";

const ModalSidebar = ({ state }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        left: `${state.categoryMeunState ? "0" : "-270px"}`,
        top: "75px",
        zIndex: 4,
        transition: "0.5s ease left",
      }}
    >
      <SlideSidebar state={{ ...state }} />
    </Box>
  );
};

export default ModalSidebar;
