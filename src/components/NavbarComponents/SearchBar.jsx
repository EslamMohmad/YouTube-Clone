import { useState } from "react";
import { Paper, IconButton, Stack, Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { inputTxt } from "../../Store/SearchSlice";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [focusState, setFocusState] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const { prevSearchText } = useSelector(({ SearchSlice }) => SearchSlice);

  const action = useDispatch();

  const navTo = useNavigate();

  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        flexGrow: { xs: 1, sm: 0 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #3a3a3a",
          borderColor: "border.lightBorder",
          borderRadius: "20px 0 0 20px ",
          overflow: "hidden",
          pl: "10px",
          borderColor: `${
            focusState ? "border.blueBorder" : "border.lightBorder"
          }`,
          flexGrow: { xs: 1, md: 0 },
        }}
      >
        {focusState && <Search sx={{ color: "white" }} />}

        <Paper
          component="input"
          value={inputValue ? inputValue : prevSearchText}
          sx={{
            border: "none",
            width: { xs: "100%", md: "450px" },
            maxWidth: "500px",
            minWidth: { xs: "unset", sm: "130px" },
            outline: "none",
            backgroundColor: "black",
            borderRadius: "0",
            py: "11.5px",
            pl: "10px",
            fontSize: "15px",
          }}
          type="text"
          placeholder="Search"
          onFocus={() => setFocusState(!focusState)}
          onBlur={() => setFocusState(!focusState)}
          onChange={({ target }) => setInputValue(target.value)}
        />
      </Box>
      <IconButton
        type="submit"
        disableRipple={true}
        sx={{
          color: "white",
          width: { xs: "50px", sm: "70px" },
          borderRadius: "0 20px 20px 0",
          backgroundColor: "background.lightBlackColor",
          border: "1px solid ",
          borderColor: "border.lightBorder",
          borderLeft: "none",
          ":hover": { backgroundColor: "background.lightBlackColor" },
          ":active": { backgroundColor: "action.active" },
        }}
        onClick={() => {
          (inputValue || prevSearchText) &&
            navTo(`search/${prevSearchText || inputValue}`);
          action(inputTxt(prevSearchText || inputValue));
        }}
      >
        <Search />
      </IconButton>
    </Stack>
  );
};

export default SearchBar;
