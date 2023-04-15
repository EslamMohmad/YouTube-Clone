import { useEffect } from "react";
import { Stack, Box } from "@mui/material";
import { FeedSidebar } from "../components";
import { Outlet } from "react-router-dom";
import { setCurrentRoute } from "../Store/GlobalSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const action = useDispatch();

  useEffect(() => {
    action(setCurrentRoute("home"));
  }, [action]);

  return (
    <Stack
      flexDirection="row"
      sx={{ height: "calc(100vh - (75px))", overflow: "hidden" }}
    >
      <FeedSidebar />
      <Box
        sx={{
          width: "calc(100% - 270px)",
          flexGrow: 1,
        }}
      >
        <Outlet />
      </Box>
    </Stack>
  );
};

export default Home;
