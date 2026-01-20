import express from "express";
import signup from "../controllers/signup.controllers.js";
import login from "../controllers/login.controller.js";
const router = express.Router();

//auth routes
router.post("/signup", signup);
router.post("/login", login);

export default router;
