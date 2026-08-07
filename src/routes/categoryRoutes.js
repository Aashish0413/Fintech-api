import { Router } from "express";
import {
  createCategory,
  deleteCategory,
  editCategory,
  getCategory,
} from "../controllers/categoryController.js";
import { protect } from "../middleware/ authMiddleware.js";
const router = Router();
/** 
 * @swagger 
 * tags: 
 * * name: Categories 
 * * description: Category management API 
 */

/** 
  * @swagger 
  * * /api/categories/{id}: 
  * * get: 
  * * summary: Get category by ID 
  * * tags: [Categories] * security: 
  * * - bearerAuth: [] 
  * * parameters: 
  * * - in: path 
  * * name: id 
  * * required: true 
  * * schema: 
  * * type: string 
  * * description: Category ID 
  * * responses: 
  * * 200: 
  * * description: Category retrieved successfully 
  * * 401: 
  * * description: Unauthorized 
  * * 404: 
  * description: Category not found 
  * */
router.get("/:id", protect, getCategory);
/** 
 * @swagger 
 * * /api/categories: 
 * * post: 
 * * summary: Create a new category 
 * * tags: [Categories] 
 * * security: 
 * * - bearerAuth: [] 
 * * requestBody: 
 * * required: true 
 * * content: 
 * * application/json:
 * schema: 
 * * type: object 
 * * required: 
 * * - name 
 * * properties:
 *  * name: 
 * * type: string 
 * * example: Food 
 * * description: 
 * * type: string 
 * * example: Food and restaurant expenses
 *  * responses: 
 * * 201: 
 * * description: Category created successfully 
 * * 400: * description: Validation error 
 * * 401: 
 * * description: Unauthorized 
 * */
router.post("/", protect, createCategory);
/** 
 * @swagger 
 * /api/categories/{id}: 
 * put: 
 * summary: Update a category 
 * tags: [Categories] 
 * security: 
 * - bearerAuth: [] 
 * parameters: 
 * - in: path 
 * name: id 
 * required: true 
 * schema: 
 * type: string 
 * description: Category ID 
 * requestBody: 
 * required: true 
 * content: 
 * application/json:
  * schema: 
  * type: object 
  * properties: 
  * name: 
  * type: string 
  * example: Food 
  * description: 
  * type: string 
  * example: Updated category description 
  * responses: 
  * 200: 
  * description: Category updated successfully 
  * 401: 
  * description: Unauthorized 
  * 404: 
 * description: Category not found 
 */
router.put("/:id", protect, editCategory);

/** 
 * @swagger
  * /api/categories/{id}:
   * delete: 
  * summary: Delete a category 
  * tags: [Categories]
   * security:
    * - bearerAuth: [] 
    * parameters: 
    * - in: path * name: id 
    * required: true 
    * schema: 
    * type: string 
    * description: Category ID 
    * responses:
    * 200: 
    * description: Category deleted successfully 
   * 401: 
   * description: Unauthorized 
   * 404: 
   * description: Category not found 
   */
router.delete("/:id", protect, deleteCategory);

export default router;
