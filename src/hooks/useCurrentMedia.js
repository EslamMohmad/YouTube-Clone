import { useTheme, useMediaQuery } from "@mui/material";

const useCurrentMedia = (media) => {
  const theme = useTheme();
  const mediaHook = useMediaQuery(theme.breakpoints[media.area](media.size));
  return mediaHook;
};

export default useCurrentMedia;
