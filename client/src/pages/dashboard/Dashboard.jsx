import { useState, useEffect } from "react";
import { dashboardApi } from "@/api/dashboardApi";
import DashboardNav from "./components/DashboardNav";
import DashboardContent from "./components/DashboarContent";
export default function DashBoard() {
  const [response, setResponse] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const data = await dashboardApi();
      setResponse(data);
    }
    fetchData();
  }, []);

  if (!response) return <p>Loading...</p>;
  return (
    <>
      <div className="max-h-dvh overflow-x-hidden">
        <DashboardNav response={response} />
        <DashboardContent response={response} />
      </div>
    </>
  );
}
