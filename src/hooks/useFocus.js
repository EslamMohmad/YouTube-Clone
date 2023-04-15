import { useEffect, useRef } from "react";

const useFocus = (state) => {
  const input = useRef();

  useEffect(() => {
    input.current.focus();
  }, [state]);

  return input;
};

export default useFocus;
