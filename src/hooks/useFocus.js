import { useEffect, useRef } from "react";

const useFocus = () => {
  //run this hook first time only
  const input = useRef();
  const firstTime = useRef(true);
  useEffect(() => {
    if (firstTime.current) {
      input.current.focus();
      firstTime.current = false;
    }
  });

  return input;
};

export default useFocus;
