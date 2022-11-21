import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = ({ children, isAuthenticated }) => {
  if (!isAuthenticated) {
    return children ? children : <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PublicRoute;
