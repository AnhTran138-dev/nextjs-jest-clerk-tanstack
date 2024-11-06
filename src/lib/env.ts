import { z } from "zod";

export const envSchema = z.object({
  NEXT_PUBLIC_BE_URL: z.string().url(),
});

export const env = envSchema.parse({
  NEXT_PUBLIC_BE_URL: process.env.NEXT_PUBLIC_BE_URL,
});
