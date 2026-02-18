import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./components/protectedRoutes";
import { DashboardProvider } from "./contextApis/dashBoardContext.jsx";

const Home = lazy(() => import("./pages/home/Home"));
const History = lazy(() => import("./pages/history/History"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const DashBoard = lazy(() => import("./pages/dashboard/Dashboard"));
const BuyDiamonds = lazy(() => import("./pages/diamonds page/BuyDiamonds"));

export default function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/buy-diamonds"
          element={
            <DashboardProvider>
              <BuyDiamonds />
            </DashboardProvider>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardProvider>
                <DashBoard />
              </DashboardProvider>
            </ProtectedRoute>
          }
        />
        <Route
          path="/history"
          element={
            <ProtectedRoute>
              <DashboardProvider>
                <History />
              </DashboardProvider>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
}
