import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { toggleVideoMoreInfo } from "../../Store/ModalSlice";
import { contentPublishedTime, countingUsers } from "../../utils/constants";
import CloseBottomSlider from "../ReuseableComponents/CloseBottomSlider";
import VideoInfo from "../VideoDetailsComponents/VideoInfo";
const ModalMoreVideoInfo = ({ videoDetails: { snippet, statistics } }) => {
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
        <Typography variant="h6">description</Typography>
        <CloseBottomSlider callback={toggleVideoMoreInfo} />
      </Box>
      <Box>
        <Typography variant="h6" sx={{ mt: 2 }}>
          {snippet?.title}
        </Typography>
        <Box
          component="ul"
          sx={{
            span: { color: "gray", display: "block", textAlign: "center" },
            "p.MuiTypography-body2": { textAlign: "center" },
            my: 2,
            display: "flex",
            justifyContent: "space-around",
            p: 0,
            pb: 2,
            borderBottom: "1px solid",
            borderColor: "border.lightBorder",
          }}
        >
          <Typography variant="body2">
            {countingUsers(statistics?.likeCount)}
            <span>likes</span>
          </Typography>
          <Typography variant="body2">
            {countingUsers(statistics?.viewCount)}
            <span>views</span>
          </Typography>
          <Typography variant="body2">
            {contentPublishedTime(snippet?.publishedAt)}
            <span>ago</span>
          </Typography>
        </Box>
      </Box>
      <Box>
        {/* <Typography variant="caption">{snippet?.description}</Typography> */}
      </Box>
      <VideoInfo details={snippet} statistics={statistics} />
    </Box>
  );
};

export default ModalMoreVideoInfo;
