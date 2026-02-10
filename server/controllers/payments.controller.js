import { instance } from "../config/razorpay.config.js";
import crypto from "crypto";
import User from "../models/user.model.js";

export const createOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt ${Date.now()}`,
    };
    const order = await instance.orders.create(options);
    res.status(200).json({
      message: "order created",
      order,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error in creating order",
      success: false,
    });
  }
};

export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      diamonds,
    } = req.body;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({ message: "Payment verification failed" });
    }

    const user = await User.findById(req.user.id);
    const diamondsNum = Number(diamonds);
    if (![200, 450, 1000].includes(diamondsNum)) {
      return res.status(400).json({ message: "diamonds mis-matched" });
    }
    user.credits += diamonds;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
