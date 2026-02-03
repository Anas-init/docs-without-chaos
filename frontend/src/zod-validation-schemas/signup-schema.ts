import * as z from "zod";

export const SignupSchema = z
  .object({
    email: z
      .email("Please enter a valid email address.")
      .max(64, "Email must be at most 64 characters."),

    username: z
      .string()
      .min(3, "Username must be at least 3 characters.")
      .max(20, "Username must be at most 20 characters.")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores.",
      ),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .max(100, "Password must be at most 100 characters.")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .regex(/[0-9]/, "Password must contain at least one number.")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character.",
      ),

    confirmPassword: z.string().min(1, "Please confirm your password."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"], // This attaches the error to the specific field
  });
