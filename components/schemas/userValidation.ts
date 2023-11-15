import { z } from "zod";

export const createSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" })
    .max(20, { message: "Name must be at most 50 characters long" }),
  job: z
    .string()
    .min(3, { message: "Job must be at least 3 characters long" })
    .max(20, { message: "Job must be at most 50 characters long" }),
});
