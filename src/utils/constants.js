import ReplyIcon from "@mui/icons-material/Reply";
import VerticalAlignBottomIcon from "@mui/icons-material/VerticalAlignBottom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import HomeIcon from "@mui/icons-material/Home";
import CameraIcon from "@mui/icons-material/Camera";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SensorsIcon from "@mui/icons-material/Sensors";
import VideogameAssetIcon from "@mui/icons-material/VideogameAsset";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import YouTubeIcon from "@mui/icons-material/YouTube";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import AlbumIcon from "@mui/icons-material/Album";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import FeedbackIcon from "@mui/icons-material/Feedback";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import LogoutIcon from "@mui/icons-material/Logout";
import PaidIcon from "@mui/icons-material/Paid";
import BarChartIcon from "@mui/icons-material/BarChart";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import TranslateIcon from "@mui/icons-material/Translate";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LanguageIcon from "@mui/icons-material/Language";
import KeyboardIcon from "@mui/icons-material/Keyboard";

export const logo = "https://i.ibb.co/s9Qys2j/logo.png";

export const accountOptions = {
  first: [
    { icon: <AccountBoxIcon />, name: "your channel" },
    { icon: <PlayCircleFilledIcon />, name: "youtube studio" },
    { icon: <SwitchAccountIcon />, name: "switch account" },
    { icon: <LogoutIcon />, name: "sign out" },
  ],
  secound: [
    { icon: <PaidIcon />, name: "pirchases and memberships" },
    { icon: <BarChartIcon />, name: "your data in youtube" },
  ],
  third: [
    { icon: <NightlightRoundIcon />, name: "appearance : device theme" },
    { icon: <TranslateIcon />, name: "language : english" },
    { icon: <AdminPanelSettingsIcon />, name: "restricted mode : off" },
    { icon: <LanguageIcon />, name: "location : egypt" },
    { icon: <KeyboardIcon />, name: "keyboard shortcuts channel" },
  ],
  fourth: [{ icon: <SettingsIcon />, name: "settings" }],
  fiveth: [
    { icon: <HelpIcon />, name: "help" },
    { icon: <FeedbackIcon />, name: "send feedback" },
  ],
};

export const sideBarItems = {
  firstList: [
    { icon: <HomeIcon />, name: "home" },
    { icon: <CameraIcon />, name: "shorts" },
    { icon: <SubscriptionsIcon />, name: "subscriptions" },
  ],
  scoundList: [
    { icon: <VideoLibraryIcon />, name: "library" },
    { icon: <HistoryIcon />, name: "History" },
    { icon: <SlideshowIcon />, name: "your videos" },
    { icon: <WatchLaterIcon />, name: "watch later" },
    { icon: <ExpandMoreIcon />, name: "show more" },
  ],
  explore: [
    { icon: <WhatshotIcon />, name: "trending" },
    { icon: <MusicNoteIcon />, name: "music" },
    { icon: <SensorsIcon />, name: "live" },
    { icon: <VideogameAssetIcon />, name: "gaming" },
    { icon: <EmojiEventsIcon />, name: "sports" },
  ],
  "more from youtube": [
    { icon: <YouTubeIcon />, name: "youtube premium" },
    { icon: <VideoChatIcon />, name: "youtube studio" },
    { icon: <AlbumIcon />, name: "youtube music" },
    { icon: <ChildCareIcon />, name: "youtube kids" },
  ],
  lastList: [
    { icon: <SettingsIcon />, name: "settings" },
    { icon: <FlagIcon />, name: "report history" },
    { icon: <HelpIcon />, name: "help" },
    { icon: <FeedbackIcon />, name: "send feedback" },
  ],
};

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

export const feedTags = [
  "most popular",
  "mixes",
  "gaming",
  "music",
  "live",
  "elzero web shool",
  "js mastery",
  "code",
  "react",
  "web",
  "movie",
  "sport",
  "fashion",
  "gym",
  "comedy",
  "history",
  "new to you",
  "eduction",
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
  return link.replace(/\s["/"]/gi, "");
};
