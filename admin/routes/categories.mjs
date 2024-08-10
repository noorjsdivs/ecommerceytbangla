import { Router } from "express";
import { categories } from "../constants/index.mjs";

const router = Router();

router.get("/", (req, res) => {
  res.send(categories);
});

export default router;
