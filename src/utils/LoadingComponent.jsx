import React from "react";
import { Grid, Box, Skeleton } from "@mui/material";
const LoadingComponent = () => {
  return (
    <Grid item xs={12} sm={6} md={4} xl={3}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Skeleton variant="rounded" width={"100%"} height={200} />
        <Skeleton variant="text" height={60} />
        <Skeleton variant="text" height={60} />
      </Box>
    </Grid>
  );
};

export default LoadingComponent;
