import { useState } from "react";
import { Paper, IconButton, Stack, Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { inputTxt } from "../../Store/SearchSlice";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import useFocus from "../../hooks/useFocus";

const SearchBar = () => {
  const [focusState, setFocusState] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { prevSearchText, searchText } = useSelector(
    ({ SearchSlice }) => SearchSlice
  );

  const input = useFocus(focusState);

  const action = useDispatch();

  const navTo = useNavigate();

  const inputValueHandler = () => {
    return (
      inputValue &&
      prevSearchText !== inputValue &&
      (navTo(`YouTube-Clone/search/${inputValue}`),
      action(inputTxt(inputValue)))
    );
  };

  return (
    <Stack
      sx={{
        flexDirection: "row",
        alignItems: "center",
        flexGrow: { xs: 1, sm: 0 },
      }}
      onFocus={() => setFocusState(true)}
      onBlur={() => setFocusState(false)}
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
          ref={input}
          value={inputValue ?? prevSearchText}
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
          onInput={({ target }) => setInputValue(target.value)}
          onKeyDown={(e) => e.key === "Enter" && inputValueHandler()}
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
        onClick={() => inputValueHandler()}
      >
        <Search />
      </IconButton>
    </Stack>
  );
};

export default SearchBar;
