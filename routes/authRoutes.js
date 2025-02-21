import { Router } from "express";
import { loginController } from "../controllers/authController.js";

const router = Router();

router.get("/check", async (req, res) => {});

router.post("/login", loginController);

router.post("/register", async (req, res) => {});

router.post("/register/validate", async (req, res) => {});

router.post("/reset", async (req, res) => {});

router.post("/reset/attempt", async (req, res) => {});

export default router;
