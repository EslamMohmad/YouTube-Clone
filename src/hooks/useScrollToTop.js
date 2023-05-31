import { useEffect } from "react";

export const useScrollToTop = (targetElement, state) => {
  useEffect(() => {
    targetElement.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [targetElement, state]);
};
