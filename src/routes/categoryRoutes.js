import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  editCategory,
  getCategory,
} from "../controllers/resourceController.js";
const router = Router();

router.get("/:id",getCategory);
router.post("/",createCategory);
router.put("/:id",editCategory);
router.delete("/:id",deleteCategory);

export default router;
