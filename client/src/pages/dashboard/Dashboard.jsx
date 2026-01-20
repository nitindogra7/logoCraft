
import DashboardNav from "./components/DashboardNav";
import DashboardContent from "./components/DashboarContent";
export default function DashBoard() {
  return (
    <>
      <div className="max-h-dvh overflow-x-hidden">
        <DashboardNav />
        <DashboardContent />
      </div>
    </>
  );
}
