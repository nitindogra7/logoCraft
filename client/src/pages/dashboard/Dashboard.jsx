import { useContext } from "react";
import { DashBoardContext } from "@/contextApis/DashBoardContext";
import DashboardNav from "./components/DashboardNav";
import DashboardContent from "./components/DashboarContent";
export default function DashBoard() {
  const {response , setResponse } = useContext(DashBoardContext)
  return (
    <>
      <div className="max-h-dvh overflow-x-hidden">
        <DashboardNav response={response}  />
        <DashboardContent response={response} setResponse={setResponse} />
      </div>
    </>
  );
}
