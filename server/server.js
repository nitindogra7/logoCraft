import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoute from "./routes/dashboardRoute.js";
import paymentRoute from "./routes/payment.route.js";
import connectDb from "./config/db.js";

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(
  cors({
    origin: "https://app.nitindogra.space",
    credentials: true,
  })
);


// Connect to DB
connectDb();

// Routes
app.get("/", (req, res) => {
  res.send("working");
});
app.use("/auth", authRoutes);
app.use("/app", dashboardRoute);
app.use("/app", paymentRoute);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
