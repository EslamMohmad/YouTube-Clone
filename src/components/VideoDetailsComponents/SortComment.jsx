import React, { useState } from "react";
import { Stack, Box, Typography } from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";

const SortComment = () => {
  const [sortState, setSortState] = useState(false);
  const [sortCuurOpt, setSortCuurOpt] = useState("top comment");
  const sortOption = ["top comment", "newest first"];

  return (
    <Stack
      flexDirection="row"
      gap={1}
      alignItems="center"
      sx={{ position: "relative", cursor: "pointer" }}
      onClick={() => setSortState(!sortState)}
    >
      <SortIcon />
      <Box>
        <Typography variant="body1">sort by</Typography>
      </Box>
      {sortState && (
        <Box
          sx={{
            backgroundColor: "background.lightBlackColor",
            borderRadius: "5px",
            overflow: "hidden",
            position: "absolute",
            right: { xs: "-20vw", sm: "-140px" },
            top: "0",
            width: "115px",
          }}
        >
          {sortOption.map((opt) => (
            <Box
              key={opt}
              sx={{
                p: 1.5,
                ":hover": { backgroundColor: "action.hover" },
                cursor: "pointer",
                backgroundColor: `${
                  sortCuurOpt === opt ? "action.active" : "transparent"
                }`,
              }}
              onClick={() => setSortCuurOpt(opt)}
            >
              <Typography variant="body1" fontSize="14px">
                {opt}
              </Typography>
            </Box>
          ))}
        </Box>
      )}
    </Stack>
  );
};

export default SortComment;
