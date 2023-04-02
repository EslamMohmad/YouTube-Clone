import { Box, Stack, Button, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { sideBarItems } from "../../utils/items";

const NormalSidebar = ({ state }) => {
  const { currentRoute } = useSelector(({ GlobalSlice }) => GlobalSlice);

  const hundlingStyles = () => {
    return state
      ? {
          position: "fixed",
          backgroundColor: "background.primaryColor",
          zIndex: 1,
          px: 2,
        }
      : null;
  };

  return (
    <Box
      sx={{
        overflowY: "auto",
        height: "calc(100vh - 75px)",
        pr: "10px",
        pl: 2,
        ...hundlingStyles(),
        "::-webkit-scrollbar-thumb": {
          backgroundColor: "background.primaryColor",
        },
        ":hover::-webkit-scrollbar-thumb": {
          backgroundColor: "background.whiteBlackColor",
        },
      }}
    >
      {" "}
      <Box sx={{ width: "230px" }}>
        {Object.keys(sideBarItems).map((category, index) => (
          <Stack
            key={category}
            sx={{
              borderBottom: "1px solid",
              borderColor: "border.lightBorder",
              pb: 1.5,
              ":not(:last-of-type)": {
                mb: 1.5,
              },
            }}
          >
            {sideBarItems[category].map((item, idx) => (
              <Button
                variant="text"
                key={item.name}
                sx={{
                  fontSize: "13px",
                  textTransform: "capitalize",
                  color: "white",
                  ":not(:last-of-type)": {
                    mb: 0.5,
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
                    color: `${
                      category === "more from youtube" ? "red" : "white"
                    }`,
                  }}
                >
                  {item.icon}
                </Box>
                <Box
                  sx={{
                    width: "75%",
                    ml: "auto",
                    textAlign: "left",
                    color: "white",
                  }}
                >
                  {item.name}
                </Box>
              </Button>
            ))}
          </Stack>
        ))}
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            color: "white",
            textAlign: "left",
            py: 3,
            px: 3,
          }}
        >
          Copyrights 2022 Eslam.Inc
        </Typography>
      </Box>
    </Box>
  );
};

export default NormalSidebar;
