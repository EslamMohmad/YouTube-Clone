// import { createContext, useState, useEffect } from "react";
// import { fetchFromAPI } from "../utils/fetchFromAPI";

// export const GlobalContext = createContext();
// const GlobalContextProvider = ({ children }) => {
//   const [selectedCategory, setselectedCategory] = useState("Elzero Web School");
//   const [videos, setVideos] = useState([]);
//   const [channelVideos, setChannelVideos] = useState([]);
//   const [param, setParam] = useState({});

//   const shardValues = {
//     selectedCategory,
//     videos,
//     channelVideos,
//     setselectedCategory,
//     setVideos,
//     setParam,
//   };

//   useEffect(() => {
//     fetchFromAPI(
//       `search?part=snippet&maxResults=50&q=${selectedCategory}`
//     ).then((data) => setVideos(data.items));
//   }, [selectedCategory]);

//   useEffect(() => {
//     if (param.hasOwnProperty("id")) {
//       fetchFromAPI(
//         `search?part=snippet&channelId=${param.id}&maxResults=50`
//       ).then((data) => setChannelVideos(data.items));
//     }
//   }, [param.id]);

//   return (
//     <GlobalContext.Provider value={shardValues}>
//       {children}
//     </GlobalContext.Provider>
//   );
// };

// export default GlobalContextProvider;
