import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { sideBarItems } from "../../utils/items";
const LiteSidebar = () => {
  const listItemsArr = [...sideBarItems.firstList, sideBarItems.scoundList[0]];

  return (
    <Stack>
      {listItemsArr.map((item) => (
        <Button
          variant="text"
          key={item.name}
          sx={{
            fontSize: "11px",
            textTransform: "capitalize",
            color: "white",
            flexDirection: "column",
            py: 1,
            ":not(:last-of-type)": {
              mb: 1.5,
            },
            ":hover": { backgroundColor: "action.hover" },
          }}
        >
          <Box
            sx={{
              lineHeight: 1,
            }}
          >
            {item.icon}
          </Box>
          <Box
            sx={{
              textAlign: "center",
              color: "white",
            }}
          >
            {item.name}
          </Box>
        </Button>
      ))}
    </Stack>
  );
};

export default LiteSidebar;
