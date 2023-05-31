import { Box, Button, Stack } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { sideBarItems } from "../../utils/constants";
const LiteSidebar = () => {
  const listItemsArr = [...sideBarItems.firstList, sideBarItems.scoundList[0]];
  const { currentRoute } = useSelector(({ GlobalSlice }) => GlobalSlice);

  return (
    <Stack
      sx={{
        position: { xs: "fixed", sm: "static" },
        zIndex: "1",
        flexDirection: { xs: "row ", sm: "column" },
        justifyContent: "space-between",
        alignItems: "center",
        bottom: "0",
        width: { xs: "calc(100% - 32px)", sm: "auto" },
        p: { xs: "8px 16px", sm: 0 },
        backgroundColor: "background.primaryColor",
      }}
    >
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
              mb: { xs: "0", sm: 1.5 },
            },
            backgroundColor: `${
              item.name === currentRoute ? "action.hover" : "transparnet"
            }`,
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
