import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";

const CloseBottomSlider = ({ callback }) => {
  const action = useDispatch();
  return (
    <IconButton
      onClick={() => action(callback(false))}
      sx={{
        color: "white",
      }}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseBottomSlider;
