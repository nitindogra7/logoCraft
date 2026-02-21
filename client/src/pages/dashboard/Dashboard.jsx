import { useContext } from "react";
import DashboardNav from "./components/DashboardNav";
import { DashBoardContext } from "@/contextApis/dashBoardContext";
import DashboardContent from "./components/DashboarContent";
export default function DashBoard() {
  const {response , setResponse , user } = useContext(DashBoardContext)
  return (
    <>
      <div className="max-h-dvh overflow-x-hidden">
        <DashboardNav user={user} />
        <DashboardContent response={response} setResponse={setResponse} />
      </div>
    </>
  );
}
