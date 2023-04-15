import React from "react";
import { Slide, Box } from "@mui/material";
import NormalSidebar from "./NormalSidebar";
import { useSelector } from "react-redux";

const SlideSidebar = ({ state: { categoryMeunState, sidebarMediaQuery } }) => {
  const { currentRoute } = useSelector(({ GlobalSlice }) => GlobalSlice);
  return (
    <Slide
      direction="right"
      in={categoryMeunState}
      onClick={(e) => e.stopPropagation()}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 4,
          transform: `${
            !categoryMeunState
              ? "translateX(-285px) !important"
              : "translateX(0px) !important"
          }`,
          transition: "transform .5s ease !important",
          backgroundColor: "background.primaryColor",
        }}
      >
        <NormalSidebar state={sidebarMediaQuery} />
      </Box>
    </Slide>
  );
};

export default SlideSidebar;
