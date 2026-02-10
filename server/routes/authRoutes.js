import express from "express";
import signup from "../controllers/signup.controllers.js";
import login from "../controllers/login.controller.js";
import logoutController from "../controllers/logout.controller.js";
import { refreshTokenController } from "../controllers/refreshToken.controller.js";
const router = express.Router();


router.post("/auth/signup", signup);
router.post("/auth/login", login);
router.post("/auth/logout", logoutController);
router.post("/auth/refresh-token", refreshTokenController);

export default router;
