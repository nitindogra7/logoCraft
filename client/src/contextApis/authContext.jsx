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
      await loginApi(input);
      setIsAuth(true)
    } catch (error) {
      console.log(error);
      setIsAuth(false)
      navigate("/login")
    }
  };

  const signup = async (input) => {
    try {
      await signupApi(input);
      setIsAuth(true)
    } catch (error) {
      console.log(error);
      setIsAuth(false);
      navigate("/singup")
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
      value={{ login, isAuth, loading, setLoading, logout , signup }}
    >
      {children}
    </AuthContext.Provider>
  );
};
