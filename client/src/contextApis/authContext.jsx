import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutApi } from "@/api/logoutApi";
import { loginApi } from "@/api/loginApi";
import { signupApi } from "@/api/signupApi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(() => {
    const token = localStorage.getItem("token");
    return !!token;
  });

  const [loading, setLoading] = useState(false);

  const login = async (input) => {
    try {
      const data = await loginApi(input);
      setIsAuth(true);
      return data; 
    } catch (error) {
      setIsAuth(false);
      throw error; 
    }
  };

 
  const signup = async (input) => {
    try {
      const data = await signupApi(input);
      setIsAuth(true);
      return data;
    } catch (error) {
      setIsAuth(false);
      throw error; 
    }
  };

  const logout = async () => {
    try {
      await logoutApi();
    } catch (error) {
      console.error("Logout API failed:", error);
    }

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsAuth(false);
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ login, isAuth, setIsAuth , loading, setLoading, logout, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};