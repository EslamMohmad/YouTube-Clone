import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const PlayListCard = ({ playlist }) => {
  const {
    id: { playlistId },
    snippet: {
      title,
      channelTitle,
      channelId,
      thumbnails: {
        high: { url },
      },
    },
  } = playlist;

  return (
    <Card sx={{ borderRadius: 0, border: "none" }}>
      <Link to={`/playlist/${channelTitle}/${playlistId}`}>
        <CardMedia
          component="img"
          height="auto"
          image={url}
          alt={`image/${playlistId}`}
        />
      </Link>
      <CardContent
        sx={{ backgroundColor: "#161616", color: "white", minHeight: "100px" }}
      >
        <Link to={`/playlist/${channelTitle}/${playlistId}`}>
          <Typography
            variant="body1"
            sx={{
              mb: 1,
              maxHeight: "48px",
              overflowY: "hidden",
              color: "white",
            }}
          >
            {title}
          </Typography>
        </Link>
        <Link to={`/channel/${channelTitle}/${channelId}`}>
          <Typography
            variant="body2"
            color="gray"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {channelTitle}
            <CheckCircle sx={{ ml: 1, width: "20px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PlayListCard;
