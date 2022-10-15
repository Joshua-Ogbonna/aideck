import React from "react";
import { Navigate, Outlet } from "react-router-dom";

import { user } from "../../assets/data";

export const PrivateRoute = () => {
  return user.role ? <Outlet /> : <Navigate to="/login" />;
};

export const PublicRoute = () => {
  return !user.role ? <Outlet /> : <Navigate to="/dashboard" />;
};

export const AdminRoute = () => {
    return user && user?.role === "admin" ? <Outlet /> : <Navigate to="/dashboard" /> 
}
