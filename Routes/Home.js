import { Router } from "express";

const router = Router();

router.get("/", async (req, res) => {
  try {
    return res.json("Hello World");
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
