import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCurrentMedia from "../../hooks/useCurrentMedia";
import { toggleCategoryMeun } from "../../Store/ModalSlice";
import LiteSidebar from "./LiteSidebar";
import NormalSidebar from "./NormalSidebar";
import SlideSidebar from "./SlideSidebar";

const FeedSidebar = () => {
  const { categoryMeunState } = useSelector(({ ModalSlice }) => ModalSlice);

  const sidebarMediaQuery = useCurrentMedia({ area: "down", size: "lg" });

  const action = useDispatch();

  const handlingSidebar = () => {
    if (sidebarMediaQuery) {
      return (
        <>
          <SlideSidebar state={{ categoryMeunState, sidebarMediaQuery }} />
          <LiteSidebar />
        </>
      );
    } else {
      return categoryMeunState ? (
        <NormalSidebar state={sidebarMediaQuery} />
      ) : (
        <LiteSidebar />
      );
    }
  };

  useEffect(() => {
    if (!sidebarMediaQuery) {
      action(toggleCategoryMeun({ category: true, overlay: false }));
    } else {
      action(toggleCategoryMeun({ category: false, overlay: false }));
    }
  }, [action, sidebarMediaQuery]);

  return (
    <Stack
      direction="row"
      sx={{
        flexDirection: "column",
        transition: "0.5s left ease",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {handlingSidebar()}
    </Stack>
  );
};

export default FeedSidebar;
