import React from "react";
import { Box } from "@mui/material";

const Video = ({ src }) => {
  return (
    <Box
      sx={{
        iframe: {
          height: { xs: "60vw", sm: "50vw", lg: "35vw" },
          width: "100%",
        },
        mx: { xs: "-24px", lg: 0 },
        mb: 1,
      }}
      dangerouslySetInnerHTML={{
        __html: src,
      }}
    ></Box>
  );
};

export default Video;
