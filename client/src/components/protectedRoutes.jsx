import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "@/contextApis/authContext.jsx";

export default function ProtectedRoute({ children }) {
  const { isAuth, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>; 

  return isAuth ? children : <Navigate to="/login" replace />;
}
