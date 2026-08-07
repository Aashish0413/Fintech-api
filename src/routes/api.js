import { Router } from "express";
import authRoutes from "./authRoutes.js"
import transactionRoutes from "./transactionRoutes.js"
import categoryRoutes from "./categoryRoutes.js"
const router = Router();

router.use("/auth", authRoutes);
router.use ("/category", categoryRoutes);
router.use ("/transaction", transactionRoutes);


export default router;
