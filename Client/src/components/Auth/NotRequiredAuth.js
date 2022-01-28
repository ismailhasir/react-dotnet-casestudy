import React from "react";
import { Navigate } from "react-router-dom";

const NotRequiredAuth = (props) => {
  const { children } = props;
  const auth = localStorage.getItem("auth");

  if (auth) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default NotRequiredAuth;
