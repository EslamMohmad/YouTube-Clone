import { useLocation } from "react-router-dom";

const useLocationDetails = () => {
  const location = useLocation();
  return {
    ...location,
    hash: location.hash.slice(1),
    search: location.search.replace("?id=", ""),
  };
};

export default useLocationDetails;
