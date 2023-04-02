import React from "react";
import { Stack, Typography } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const LikesCounter = ({ likes, parentComponent }) => {
  const likesCounterHandler = () => {
    return likes > 999 ? `${likes.toString()[0]}k` : likes;
  };

  return (
    <Stack
      flexDirection="row"
      gap={2}
      alignItems="center"
      sx={{
        svg: {
          fontSize: "20px",
          ":hover": { color: "red" },
          ":active": { transform: "scale(0.8)" },
          cursor: "pointer",
        },
      }}
    >
      <ThumbUpIcon />
      <Typography
        variant="body2"
        sx={{ alignSelf: "self-end", m: "auto", ml: "-7px" }}
      >
        {likesCounterHandler()}
      </Typography>
      {parentComponent !== "comment" && <span>|</span>}
      <ThumbDownIcon />
    </Stack>
  );
};

export default LikesCounter;
