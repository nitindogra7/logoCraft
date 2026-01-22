import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes.js"
import connectDb from './config/db.js'
import dashboardRoute from './routes/dashbordRoute.js'

dotenv.config();

const app = express();
app.use(express.json());
connectDb();

app.get("/", async (req, res) => {
  res.send("hey");
});

app.use("/auth" , authRoutes);
app.use("/app" , dashboardRoute)

app.listen(process.env.PORT);
