import { z } from "zod"

export const signupSchema = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(1),
});

export const signinSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1), 
});

export const createBlogSchema = z.object({
    title: z.string(),
    content: z.string(),
    publishedDate : z.date()
});

export const updateBlogSchema = z.object({
    id: z.number(),
    title: z.string(),
    content: z.string(),
    publishedDate : z.date()
    
});


export type SignupType =  z.infer<typeof signupSchema>
export type SigninType =  z.infer<typeof signupSchema>
export type CreateBlogType = z.infer<typeof createBlogSchema>
export type UpdateBlogType = z.infer<typeof updateBlogSchema>
