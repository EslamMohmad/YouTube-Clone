import ReplyIcon from "@mui/icons-material/Reply";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ContentCutIcon from "@mui/icons-material/ContentCut";

export const logo = "https://i.ibb.co/s9Qys2j/logo.png";

export const videoButtonsOption = [
  {
    name: "share",
    icon: <ReplyIcon />,
  },
  {
    name: "download",
    icon: <VerticalAlignBottomIcon />,
  },
  {
    name: "thanks",
    icon: <FavoriteBorderIcon />,
  },
  {
    name: "clip",
    icon: <ContentCutIcon />,
  },
];

export const countingUsers = (amount) => {
  if (amount?.length >= 7) {
    return `${parseInt(amount / 1000000)}M`;
  } else if (amount?.length >= 4) {
    return `${parseInt(amount / 1000)}K`;
  } else {
    return `${+amount}`;
  }
};

export const contentPublishedTime = (time) => {
  const publishedTime = new Date(time);
  const currentTime = new Date();
  if (currentTime.getFullYear() > publishedTime.getFullYear()) {
    return `${currentTime.getFullYear() - publishedTime.getFullYear()} year`;
  } else if (currentTime.getMonth() + 1 > publishedTime.getMonth() + 1) {
    return `${currentTime.getMonth() + 1 - publishedTime.getMonth() + 1} month`;
  } else if (currentTime.getDate() > publishedTime.getDate()) {
    return `${currentTime.getDate() - publishedTime.getDate()} day`;
  } else if (currentTime.getHours() > publishedTime.getHours()) {
    return `${currentTime.getHours() - publishedTime.getHours()} hour`;
  } else {
    return `${currentTime.getMinutes() - publishedTime.getMinutes()} minute`;
  }
};

export const handlingLinkTextSpace = (link) => {
  return link.replace(/\s["/"]/g, "+");
};
