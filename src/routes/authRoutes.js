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

/** 
 * * @swagger
 * * tags: 
 * * name: Auth 
 * * description: Authentication API 
 * 
 */

/** 
 * * @swagger 
 * * /api/auth/register:
  * post: 
   * summary: Register a new user 
* tags: [Auth] 
* requestBody: 
* required: true 
* content:
* application/json: 
* schema: 
* type: object 
* required: 
*      - name 
*      - email 
*      - password 
* 
* properties: 
* name: 
* type: string 
* example: Aashish 
* email: 
* type: string 
* format: email 
* example: aashish@gmail.com 
* password: 
* type: string
 * format: password 
 * example: password123 
 * responses: 
 * 201: 
 * description: User registered successfully 
 * 400: 
 * description: Validation error */


router.post("/register", validate(registerValidator), register);

/** 
 * * @swagger 
  * /api/auth/login: 
 * post: 
 * * summary: Login user 
 * * tags: [Auth] * requestBody: 
 * * required: true 
 * * content: 
 * * application/json: 
 * * schema: 
 * * type: object
 *  * required: 
 * * - email 
 * * - password 
 * * properties: 
 * * email: 
 * * type: string 
 * * format: email 
 * * example: aashish@gmail.com 
 * * password: 
 * * type: string 
 * * format: password 
 * example: password123 * responses: * 200:
 * description: Login successful * 401: 
 * * description: Invalid credentials 
 */
router.post("/login", validate(loginValidators), login);
/** 
 * * @swagger 
   * /api/auth/logout:
   * post: 
   * tags: [Auth] 
   * responses: 200: 
   * description: Logout successful */

router.post("/logout", logout);

/**
* @swagger 
 * /api/auth/me: 
* * get: 
* * summary: Get current logged-in user 
* * tags: [Auth] 
* * responses: 
* * 200: 
* * description: Current user information 
* * 401: 
* * description: Unauthorized 
*/
router.get("/me", me);
 /**
 * @swagger
* /api/auth/change-password: 
* * post: 
* * summary: Change user password
*  * tags: [Auth]
*  * requestBody: 
* * required: true 
* * content: 
* * application/json: 
* * schema: 
* * type: object 
* * required: 
* * - oldPassword 
* * - newPassword 
* * properties: 
* * oldPassword: 
* * type: string 
* * format: password 
* * example: oldpassword123 
* * newPassword: 
* * type: string 
* * format: password 
* * example: newpassword123 
* * responses: 
* * 200: 
* * description: Password changed successfully 
* * 400: * description: Invalid password 
* * 401: * description: Unauthorized 
* */
router.post("/change-password", validate(changePasswordSchema), changePassword);

export default router;