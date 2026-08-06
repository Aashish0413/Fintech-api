import { Router } from "express";
import {
  createTransaction,
  deleteTransaction,
  editTransaction,
  getAllTransaction,
  getTransaction,
} from "../controllers/transactionController.js";
const router = Router();

router.gett("/",getAllTransaction);
router.get("/:id",getTransaction);
router.post("/",createTransaction);
router.put("/:id",editTransaction);
router.delete("/:id",deleteTransaction);

export default router;
