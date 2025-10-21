import { z } from 'zod';

export const signUpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export const projectSchema = z.object({
  name: z.string().min(1, 'Project name is required'),
  description: z.string().optional(),
});

export const schemaSchema = z.object({
  name: z.string().min(1, 'Schema name is required'),
  tables: z.array(z.any()).default([]),
  relationships: z.array(z.any()).default([]),
});

export const apiSchema = z.object({
  name: z.string().min(1, 'API name is required'),
  description: z.string().optional(),
  endpoints: z.array(z.any()).default([]),
});

export type SignUpInput = z.infer<typeof signUpSchema>;
export type SignInInput = z.infer<typeof signInSchema>;
export type ProjectInput = z.infer<typeof projectSchema>;
export type SchemaInput = z.infer<typeof schemaSchema>;
export type ApiInput = z.infer<typeof apiSchema>;
