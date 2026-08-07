import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  editCategory,
  getCategory,
} from "../controllers/categoryController.js";
import { protect } from "../middleware/ authMiddleware.js";
const router = Router();

router.get("/:id", protect, getCategory);
router.post("/", protect, createCategory);
router.put("/:id", protect, editCategory);
router.delete("/:id", protect, deleteCategory);

export default router;
