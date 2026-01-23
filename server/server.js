import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes.js"
import connectDb from './config/db.js'
import dashboardRoute from './routes/dashboardRoute.js';
import cors from 'cors'
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: ["http://192.168.1.12:5173" , "http://localhost:5173"],
    credentials: true
}));
connectDb();

app.get("/", async (req, res) => {
  res.send("hey");
});

app.use("/auth" , authRoutes);
app.use("/app" , dashboardRoute)

app.listen(process.env.PORT);
