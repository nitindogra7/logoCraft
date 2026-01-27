import express from "express";
import signup from "../controllers/signup.controllers.js";
import login from "../controllers/login.controller.js";
import logoutController from "../controllers/logout.controller.js";
import { refreshTokenController } from "../controllers/refreshToken.controller.js";
const router = express.Router();

//auth routes
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logoutController);
router.post("/refresh-token", refreshTokenController);

export default router;
