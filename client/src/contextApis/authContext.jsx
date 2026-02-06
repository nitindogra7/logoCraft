import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "@/api/logoutApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuth(!!token);
    setLoading(false);
  }, []);


  const login = () => setIsAuth(true);
  
  const logout = async () => {
    await logoutApi();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuth(false);
    navigate("/")
  }

  return (
    <AuthContext.Provider value={{login , isAuth, loading, setLoading,  logout }}>
      {children}
    </AuthContext.Provider>
  );
};
