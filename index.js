import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bearer from "express-bearer-token";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

app.use(cors());
app.use(express.json());
app.use(bearer());

import { HomeRoutes, AuthRoutes } from "./routes/index.js";

app.use("/home", HomeRoutes);
app.use("/auth", AuthRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server ready at: http://localhost:${PORT}`);
});
