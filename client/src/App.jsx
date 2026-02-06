import Home from "./pages/home/Home";
import History from "./pages/history/History";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import DashBoard from "./pages/dashboard/Dashboard";
import ProtectedRoute from "./components/protectedRoutes";
import { Routes, Route } from "react-router-dom";
import BuyDiamonds from "./pages/diamonds page/BuyDiamonds";

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
      <Route path="/history" element={<History />}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/buy-diamonds" element={<BuyDiamonds />} />
    </Routes>
  );
}
