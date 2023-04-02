import { Stack, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ChannelCard = ({ channel }) => {
  const {
    id: { channelId },
    snippet: {
      channelTitle,
      thumbnails: {
        high: { url },
      },
    },
  } = channel;

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      height="100%"
    >
      <Link to={`/channel/${channelTitle}/${channelId}`}>
        <CardMedia
          component="img"
          image={url}
          alt={channel?.title}
          sx={{ width: "120px", borderRadius: "50%", mb: 3 }}
        />
      </Link>
      <Typography
        variant="body1"
        sx={{ display: "flex", alignItems: "center", mb: 1 }}
      >
        <Link
          to={`/channel/${channelTitle}/${channelId}`}
          style={{ color: "white" }}
        >
          {channelTitle}
        </Link>
        <CheckCircle sx={{ color: "darkgray", ml: 1, width: "20px" }} />
      </Typography>
    </Stack>
  );
};

export default ChannelCard;
