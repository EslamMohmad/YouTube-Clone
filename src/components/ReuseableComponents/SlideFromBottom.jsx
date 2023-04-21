import { Box, Slide } from "@mui/material";
import React from "react";

const SlideFromBottom = ({ children, state }) => {
  return (
    <Slide direction="up" in={state} mountOnEnter unmountOnExit>
      <Box
        sx={{
          backgroundColor: "background.lightBlackColor",
          height: {
            xs: "calc(100vh - (60vw + 75px))",
            sm: "calc(100vh - (50vw + 75px))",
          },
          position: "fixed",
          top: {
            xs: "calc(60vw + 75px)",
            sm: "calc(50vw + 75px)",
          },
          width: "calc(100% - (16px + 8px))",
          overflowY: "auto",
          p: "0 16px 16px",
        }}
      >
        {children}
      </Box>
    </Slide>
  );
};

export default SlideFromBottom;
