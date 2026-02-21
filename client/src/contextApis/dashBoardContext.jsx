import { createContext, useEffect, useState } from "react";
import { dashboardApi } from "@/api/dashboardApi";

export const DashBoardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await dashboardApi();
        setResponse(data);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DashBoardContext.Provider value={{ response, setResponse, loading , user : response?.userData}}>
      {children}
    </DashBoardContext.Provider>
  );
};

