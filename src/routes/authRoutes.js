import { Router } from "express";
import {
  login,
  logout,
  me,
  register,
  changePassword,
} from "../controllers/authController.js";
import { validate } from "../middleware/validateBody.js"
import {
  registerValidator,
  loginValidators,
  changePasswordSchema,
} from "../validators/authValidators.js";

const router = Router();

router.post("/register", validate(registerValidator), register);
router.post("/login", validate(loginValidators), login);
router.post("/logout", logout);
router.get("/me", me);
router.post("/change-password", validate(changePasswordSchema), changePassword);

export default router;