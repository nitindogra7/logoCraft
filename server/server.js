import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("hey");
});

app.listen(process.env.PORT);
