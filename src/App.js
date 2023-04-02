import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Box, ThemeProvider } from "@mui/material";
import { darkTheme } from "./theme/Theme";

import {
  Feed,
  SearchFeed,
  VideoDetails,
  ChannelDetails,
  PlayListDetails,
} from "./pages";
import { Navbar } from "./components";
import Home from "./pages/Home";

const App = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: "#0f0f0f" }}>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />}>
              <Route path="/" element={<Feed />} />
              <Route path="search/:name" element={<SearchFeed />} />
            </Route>
            <Route path="channel/:name/:id" element={<ChannelDetails />} />
            <Route path="video/:name/:id" element={<VideoDetails />} />
            <Route path="playlist/:id" element={<PlayListDetails />} />
          </Routes>
          {children}
        </BrowserRouter>
      </ThemeProvider>
    </Box>
  );
};

export default App;
