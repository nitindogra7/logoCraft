import { createContext, useContext, useEffect, useState } from "react";
import { dashboardApi } from "@/api/dashboardApi";
import { AuthContext } from "./authContext";

export const DashBoardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const { isAuth, loading } = useContext(AuthContext);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (loading) return;
    if (!isAuth) {
      loading;
      return;
    }
    const fetchData = async () => {
      try {
        const data = await dashboardApi();
        setResponse(data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchData();
  }, [isAuth, loading]);

  if (loading) return <div className="h-dvh w-full text-5xl flex justify-center items-center font-instrument-serif">loading...</div>;

  return (
    <DashBoardContext.Provider value={{ response, setResponse }}>
      {children}
    </DashBoardContext.Provider>
  );
};
