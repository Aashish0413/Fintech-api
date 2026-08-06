import { z } from "zod";
export const transactionValidators = z.object({
  title: z.string().min(2, "title is required"),
  amount: z.float64().max(100, "please enter at least 100 rupees"),
  type: z.enum(["income", "expense"]),
  note: z.string(4, "At least 4 characters is required"),
});
