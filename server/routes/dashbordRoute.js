import express from "express";
const router = express.Router();
import verifyUser from "../middlewares/auth.middleware.js";

router.get("/logo-craft", verifyUser, async(req, res) => {
    res.status(200).json({ message: "Welcome to the logo craft dashboard" });
    console.log("hey")
})

export default router