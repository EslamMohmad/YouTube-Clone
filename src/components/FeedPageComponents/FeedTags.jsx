import { Stack, Button, Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentTag } from "../../Store/GlobalSlice";
import { feedTags } from "../../utils/items";
const FeedTags = () => {
  const {
    FeedPage: { currentTag },
  } = useSelector(({ GlobalSlice }) => GlobalSlice);

  const action = useDispatch();

  return (
    <Box
      sx={{
        height: "40px",
        pb: 1,
        m: "0 0 10px 16px",
        overflow: "auto",
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "transparent",
        },
        ":hover::-webkit-scrollbar-thumb": {
          backgroundColor: "background.whiteBlackColor",
        },
      }}
    >
      <Stack gap={1} flexDirection="row" sx={{ pr: 1, height: "100%" }}>
        {feedTags.map((item) => (
          <Button
            key={item}
            variant="contained"
            sx={{
              minWidth: "fit-content",
              backgroundColor: `${
                item === currentTag ? "white" : "background.lightBlackColor"
              }`,
              color: `${item === currentTag ? "black" : "white"}`,
              textTransform: "capitalize",
              whiteSpace: "nowrap",
              ":hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
            onClick={() => action(setCurrentTag(item))}
          >
            {item}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default FeedTags;
