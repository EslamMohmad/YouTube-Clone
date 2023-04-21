import { Box, Typography } from "@mui/material";
import React from "react";
import { toggleVideoMoreComments } from "../../Store/ModalSlice";
import CloseBottomSlider from "../ReuseableComponents/CloseBottomSlider";
import Comments from "../VideoDetailsComponents/Comments";

const ModalMoreVideoComments = ({ comments }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          borderBottom: "1px solid",
          borderColor: "border.lightBorder",
          p: 2,
          mx: "-16px",
          position: "sticky",
          top: "0",
          backgroundColor: "background.lightBlackColor",
          zIndex: 1,
        }}
      >
        <Typography variant="h6">comments</Typography>
        <CloseBottomSlider callback={toggleVideoMoreComments} />
      </Box>
      <Comments comments={comments} />
    </Box>
  );
};

export default ModalMoreVideoComments;
