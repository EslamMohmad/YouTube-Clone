import { Box, IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleVideoMoreComments } from "../../Store/ModalSlice";
import Comment from "./Comment";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const SpcialComment = ({ comment }) => {
  const action = useDispatch();

  return (
    <Box
      sx={{
        backgroundColor: "background.lightBlackColor",
        borderRadius: "10px",
        px: 2,
        position: "relative",
      }}
    >
      <IconButton
        onClick={() => action(toggleVideoMoreComments(true))}
        sx={{
          position: "absolute",
          top: "50%",
          right: "16px",
          transform: "translateY(-50%)",
        }}
      >
        <KeyboardArrowDownIcon />
      </IconButton>
      {comment
        .filter(
          (item) =>
            item?.snippet?.topLevelComment?.snippet?.likeCount > 0 ||
            item?.replies
        )
        .map(
          (item, idx) =>
            idx === 0 && (
              <Comment
                key={item.etag}
                comment={item?.snippet?.topLevelComment?.snippet}
                replies={item?.replies}
                avatarDim={"40px"}
              />
            )
        )}
    </Box>
  );
};

export default SpcialComment;
