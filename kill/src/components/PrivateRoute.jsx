import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
