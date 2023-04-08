import React from "react";
import { useLocation } from "react-router-dom";

const PageNotFound = () => {
  const x = useLocation();

  console.log(x);

  return <div>PageNotFound</div>;
};

export default PageNotFound;
