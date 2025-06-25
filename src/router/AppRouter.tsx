import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import MenuPage from "../pages/MenuPage/MenuPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import React from "react";

type PrivateRouteProps = {
  children: React.ReactElement;
};

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const location = useLocation();
  return isLoggedIn ? children : <Navigate to={`/login?redirect=${location.pathname}`} />;
};

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/menu" element={<MenuPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route
      path="/order"
      element={
        <PrivateRoute>
          <OrderPage />
        </PrivateRoute>
      }
    />
    <Route path="*" element={<Navigate to="/" />} />
  </Routes>
);

export default AppRouter;