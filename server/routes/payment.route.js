import express from "express";
import { createOrder , verifyPayment } from "../controllers/payments.controller.js";
import verifyUser from "../middlewares/auth.middleware.js";

const router = express.Router();

// create razorpay order
router.post("/app/create-order", verifyUser ,  createOrder);

// verify payment & add diamonds
router.post("/app/verify-payment", verifyUser , verifyPayment);

export default router;
