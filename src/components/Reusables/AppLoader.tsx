import React from "react";
import ReactLoading from "react-loading";

const AppLoader = ({ color = "#fff" }: { color?: string }) => {
  return <ReactLoading type="spin" width={30} height={30} color={color} />;
};

export default AppLoader;
