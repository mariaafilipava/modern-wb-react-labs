import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const location = useLocation();

  return isLoggedIn ? <Outlet /> : <Navigate to={`/login?redirect=${location.pathname}`} />;
};

export default PrivateRoute;