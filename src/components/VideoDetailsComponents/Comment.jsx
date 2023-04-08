import React, { useState } from "react";
import { Stack, Avatar, Typography, Link, Button } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import LikesCounter from "../ReuseableComponents/LikesCounter";
import { contentPublishedTime } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Comment = ({ comment, replies, avatarDim }) => {
  const [repliesState, setRepliesState] = useState(false);
  const navTo = useNavigate();
  return (
    <Stack
      sx={{ py: 1.5, a: { color: "text.link" } }}
      flexDirection="row"
      gap={2}
    >
      <Avatar
        src={comment?.authorProfileImageUrl}
        sx={{ width: avatarDim, height: avatarDim, cursor: "pointer" }}
        onClick={() =>
          navTo(
            `/YouTube-Clone/channel/${comment?.authorDisplayName}/${comment?.authorChannelId?.value}`
          )
        }
      />
      <Stack gap={0.2}>
        <Typography variant="body2">
          <span
            style={{ paddingRight: "5px", cursor: "pointer" }}
            onClick={() =>
              navTo(
                `/YouTube-Clone/channel/${comment?.authorDisplayName}/${comment?.authorChannelId?.value}`
              )
            }
          >
            {comment?.authorDisplayName}
          </span>
          <span
            style={{
              color: "gray",
              fontSize: "12px",
            }}
          >
            {contentPublishedTime(comment?.publishedAt)}
          </span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ wordBreak: "break-all" }}
          dangerouslySetInnerHTML={{
            __html: comment?.textDisplay,
          }}
        ></Typography>
        <Stack flexDirection="row" gap={2} alignItems="center" sx={{ py: 1 }}>
          <LikesCounter
            likes={+comment?.likeCount}
            parentComponent={"comment"}
          />
          <Typography variant="body2">replay</Typography>
        </Stack>
        {replies?.comments.length && (
          <Stack flexDirection="row" variant="body2">
            <Button
              sx={{ textTransform: "capitalize" }}
              onClick={() => setRepliesState(!repliesState)}
            >
              {repliesState ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              {
                <Link variant="body2" underline="none">
                  {replies?.comments.length} replies
                </Link>
              }
            </Button>
          </Stack>
        )}
        {replies?.comments.length &&
          repliesState &&
          replies?.comments.map((reply) => (
            <Comment
              key={reply.etag}
              comment={reply?.snippet}
              avatarDim={"25px"}
            />
          ))}
      </Stack>
    </Stack>
  );
};

export default Comment;
