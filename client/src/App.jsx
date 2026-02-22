import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectedRoute from "./components/protectedRoutes";
import { DashboardProvider } from "./contextApis/dashBoardContext.jsx";
import { AuthProvider } from "./contextApis/authContext";
import ScrollToTop from "./components/ScrollToTop";

const Home = lazy(() => import("./pages/home/Home"));
const Diamonds = lazy(() => import("./pages/landing pages/Diamonds.jsx"));
const History = lazy(() => import("./pages/history/History"));
const Signup = lazy(() => import("./pages/Signup"));
const Login = lazy(() => import("./pages/Login"));
const DashBoard = lazy(() => import("./pages/dashboard/Dashboard"));
const BuyDiamonds = lazy(() => import("./pages/diamonds page/BuyDiamonds"));
const Features = lazy(() => import("./pages/landing pages/Features.jsx"));
const About = lazy(() => import("./pages/landing pages/About.jsx"));

export default function App() {
  return (
    <Suspense fallback={<div className="bg-[#080A0F] h-screen w-full" />}>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/buy-diamonds"
          element={
            <AuthProvider>
              <DashboardProvider>
                <BuyDiamonds />
              </DashboardProvider>
            </AuthProvider>
          }
        />
        <Route path="/pricing" element={
           <AuthProvider>
            <Diamonds />
           </AuthProvider>} />
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
