import { z } from "zod";

export const stepOneSchema = z.object({
  firstName: z.string().min(2, "First name required"),
  lastName: z.string().min(2, "Last name required"),
  dob: z.string().min(1, "Date of birth required"),
});

export const stepTwoSchema = z
  .object({
    email: z
      .string()
      .email("Invalid email"),

    password: z
      .string()
      .min(8, "Minimum 8 characters"),

    confirmPassword: z.string(),
  })

  .refine(
    (data) =>
      data.password === data.confirmPassword,
    {
      message: "Passwords do not match",
      path: ["confirmPassword"],
    }
  );