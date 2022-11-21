import React from "react";
import { Route, Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ children, isAuthenticated }) => {
  if (isAuthenticated) {
    return children ? children : <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
