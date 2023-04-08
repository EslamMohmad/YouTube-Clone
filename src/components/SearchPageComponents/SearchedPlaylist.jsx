import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import {
  contentPublishedTime,
  handlingLinkTextSpace,
} from "../../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPlaylistDetails } from "../../Store/GlobalSlice";
import { useNavigate } from "react-router-dom";
import usePrevState from "../../hooks/usePrevState";

const SearchedPlaylist = ({ data }) => {
  const action = useDispatch();

  const prevState = usePrevState(data?.id?.playlistId);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: { xs: "auto", md: "220px" },
        gap: 2.5,
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          overflow: "hidden",
          flexGrow: 1,
          maxWidth: { xs: "unset", md: "400px" },
          height: { xs: "200px", sm: "300px", md: "auto" },
        }}
      >
        <Link
          to={handlingLinkTextSpace(
            `/YouTube-Clone/video/${data?.snippet?.channelTitle}?id=${data?.id?.playlistId}#playlist`
          )}
          onClick={() => action(setPlaylistDetails(data))}
        >
          <CardMedia
            src={data?.snippet?.thumbnails?.high?.url}
            component="img"
            width="100%"
            height="100%"
          />
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { md: "45%" },
        }}
      >
        <Typography variant="h6" color="white">
          <Link
            to={handlingLinkTextSpace(
              `/YouTube-Clone/video/${data?.snippet?.channelTitle}?id=${data?.id?.playlistId}#playlist`
            )}
            onClick={() => action(setPlaylistDetails(data))}
          >
            {data?.snippet?.title}
          </Link>
        </Typography>

        <Typography variant="caption" color="gray">
          {data?.snippet?.description}
        </Typography>

        <Typography
          variant="body2"
          color="gray"
          sx={{ ":hover": { color: "white" }, m: "16px 0 4px 0" }}
        >
          <Link
            to={handlingLinkTextSpace(
              `/YouTube-Clone/channel/${data?.snippet?.channelTitle}/${data?.snippet?.channelId}`
            )}
          >
            {data?.snippet?.channelTitle}
          </Link>
        </Typography>

        <Typography variant="caption" color="gray">
          {contentPublishedTime(data?.snippet?.publishTime)}
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchedPlaylist;
