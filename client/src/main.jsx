import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contextApis/authContext.jsx";
import "./index.css";
import App from "./App.jsx";
import { DashBoardContext } from "./contextApis/dashBoardContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <DashBoardContext>
      <App />
      </DashBoardContext>
    </AuthProvider>
    
  </BrowserRouter>,
);
