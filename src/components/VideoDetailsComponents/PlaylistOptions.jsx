import { Box, Typography, IconButton } from "@mui/material";
import React from "react";
import LoopIcon from "@mui/icons-material/Loop";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
const PlaylistOptions = ({
  details: {
    length,
    info: { snippet },
  },
}) => {
  return (
    <Box
      sx={{
        p: "16px 16px 8px 16px",
        backgroundColor: "background.lightBlackColor",
        position: "relative",
      }}
    >
      <Typography variant="h6">{snippet?.title}</Typography>
      <Typography variant="caption" sx={{ ":hover": { color: "white" } }}>
        {snippet?.channelTitle} - <span>1 / {length}</span>
      </Typography>
      <Box sx={{ display: "flex", svg: { color: "white" } }}>
        <IconButton>
          <LoopIcon />
        </IconButton>
        <IconButton>
          <ShuffleIcon />
        </IconButton>
        <IconButton sx={{ ml: "auto" }}>
          <MoreVertIcon />
        </IconButton>
        <IconButton sx={{ position: "absolute", right: "15px", top: "16px" }}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default PlaylistOptions;
