import dotenv from "dotenv";
import express from "express";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

app.use(cors());
app.use(express.json());

import HomeRoutes from "./Routes/Home.js";

app.use("/home", HomeRoutes);

app.listen(PORT, () => {
  console.log("API IS ACTIVE PORT:", PORT);
});
