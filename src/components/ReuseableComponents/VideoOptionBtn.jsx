import { Box } from "@mui/material";
import React from "react";

const VideoOptionBtn = ({ children, parent }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "background.lightBlackColor",
        borderRadius: "25px",
        px: 1.8,
        cursor: `${parent === "videoOption" ? "auto" : "pointer"}`,
        userSelect: "none",
        height: "44px",
        "@media (max-width:430px)": {
          height: "35px",
        },
        ":hover": {
          backgroundColor: `${
            parent === "videoOption"
              ? "background.lightBlackColor"
              : "action.hover"
          }`,
        },
        ":active": {
          backgroundColor: `${
            parent === "videoOption"
              ? "background.lightBlackColor"
              : "action.active"
          }`,
        },
        svg: {
          "@media (max-width:430px)": {
            fontSize: "16px",
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default VideoOptionBtn;
