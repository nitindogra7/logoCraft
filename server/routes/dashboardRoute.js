import express from "express";
const router = express.Router();
import verifyUser from "../middlewares/auth.middleware.js";
import logoCraft from "../controllers/logoCraft.controller.js";

router.get("/dashboard", verifyUser , logoCraft)

export default router;