import React from "react";
import { Box, Stack, Avatar, Typography, Button } from "@mui/material";
import { accountOptions } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { logoutFunc } from "../../Store/AuthSlice";

const AccountOptionsSection = () => {
  const { userDetails } = useSelector(({ AuthSlice }) => AuthSlice);
  const action = useDispatch();

  return (
    <Stack
      sx={{
        position: "fixed",
        py: 2,
        right: "24px",
        borderRadius: "15px",
        backgroundColor: "background.lightBlackColor",
        maxHeight: "calc(100vh - 140px)",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          pb: 1.5,
          px: 2,
          borderBottom: "1.5px solid",
          borderColor: "border.lightBorder",
        }}
      >
        <Avatar
          src={userDetails?.picture}
          sx={{ width: "40px", height: "40px" }}
        />
        <Box sx={{ p: { fontSize: "13px" } }}>
          <Typography variant="subtitle2">{userDetails?.name}</Typography>
          <Typography variant="subtitle2">{userDetails?.email}</Typography>
        </Box>
      </Box>
      <Box>
        {Object.keys(accountOptions).map((category, index) => (
          <Stack
            key={category}
            sx={{
              borderBottom: "1px solid",
              borderColor: "border.lightBorder",
              py: 1.5,
              px: 2,
              "& > div:not(:last-of-type)": {
                borderBottom: "1.5px solid",
                borderColor: "border.lightBorder",
              },
            }}
          >
            {accountOptions[category].map((item, idx) => (
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

                  ":hover": { backgroundColor: "action.hover" },
                }}
                onClick={() => item.name === "sign out" && action(logoutFunc())}
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
      </Box>
    </Stack>
  );
};

export default AccountOptionsSection;
