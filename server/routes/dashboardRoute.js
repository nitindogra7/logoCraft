import express from "express";
import verifyUser from "../middlewares/auth.middleware.js";
import { generateLogo } from "../controllers/logoCraft.controller.js";
import dashboard from "../controllers/dashboard.controller.js";

const router = express.Router();

// Dashboard route
router.get("/app/dashboard", verifyUser, dashboard);
// Logo generation route
router.post("/app/logo-craft", verifyUser ,generateLogo);

export default router;
