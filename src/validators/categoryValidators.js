import { z } from "zod";
export const createCategoryValidators = z.object({
  name: z.string().trim().min(3, "minimum 3 characters"),
  type: z.enum(["income", "expense"]),
});
