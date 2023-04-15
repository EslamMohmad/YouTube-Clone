import { useEffect } from "react";

export const useScrollToTop = (state) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
