import Home from "./pages/home/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import DashBoard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./components/protectedRoutes";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashBoard />{" "}
          </ProtectedRoute>
        }
      />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
