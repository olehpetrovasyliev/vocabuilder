import React, { FC, ReactNode } from "react";
import { useSelector } from "react-redux";

import { Navigate, useLocation } from "react-router-dom";
import { selectIsLoggedIn } from "../helpers/redux/auth/authSelectors";

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  console.log(location);
  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
