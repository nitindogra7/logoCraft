import { createContext, useContext, useEffect, useState } from "react";
import { dashboardApi } from "@/api/dashboardApi";
import { AuthContext } from "./authContext"; // adjust path

export const DashBoardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const { isAuth, loading } = useContext(AuthContext);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    if (loading) return;
    if (!isAuth) {
      loading
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

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <DashBoardContext.Provider value={{ response, setResponse }}>
      {children}
    </DashBoardContext.Provider>
  );
};
