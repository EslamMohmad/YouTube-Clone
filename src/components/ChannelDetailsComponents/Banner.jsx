import React from "react";
import { Box, CardMedia } from "@mui/material";
import { useSelector } from "react-redux";
const Banner = () => {
  const { channelDetails } = useSelector(({ ChannelSlice }) => ChannelSlice);

  const bannerWidth = "1720";

  return (
    <Box>
      <Box
        sx={{
          height: { xs: "35vw", sm: "30vw", md: "20vw" },
          position: "relative",
        }}
      >
        <CardMedia
          component="img"
          image={
            channelDetails?.brandingSettings?.image?.bannerExternalUrl +
            "=w" +
            bannerWidth
          }
          alt="banner"
          height={"100%"}
        />
      </Box>
    </Box>
  );
};

export default Banner;
