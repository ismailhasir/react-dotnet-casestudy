import React from "react";
import { Navigate } from "react-router-dom";

const RequiredAuth = (props) => {
  const { children } = props;
  const auth = localStorage.getItem("auth");

  if (auth) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
};

export default RequiredAuth;
