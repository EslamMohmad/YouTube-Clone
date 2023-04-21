import { Box } from "@mui/material";
import React from "react";
import useCurrentMedia from "../../hooks/useCurrentMedia";
import Comment from "./Comment";

const Comments = ({ comments }) => {
  const mobileView = useCurrentMedia({ area: "down", size: "sm" });

  return (
    <Box sx={{ px: `${mobileView ? "16px" : 0}` }}>
      {comments.map((item) => (
        <Comment
          key={item.etag}
          comment={item?.snippet?.topLevelComment?.snippet}
          replies={item?.replies}
          avatarDim={"40px"}
        />
      ))}
    </Box>
  );
};

export default Comments;
