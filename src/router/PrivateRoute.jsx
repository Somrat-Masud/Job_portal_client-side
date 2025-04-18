import { useContext } from "react";
import AuthContext from "../context/AuthContext/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (user) {
    return children;
  }
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
