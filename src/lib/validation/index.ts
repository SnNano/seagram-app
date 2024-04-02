import { z } from "zod";


export const signupValidationSchema = z.object({
    name: z.string().min(2, {
        message: "name must be at least 2 characters.",
      }).max(50),
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }).max(50),
    email: z.string().email(),
    password: z.string().min(8, {message:"password must be at least 8 characters."}).max(50),
  
  });
  

export const signinValidationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8, {message:"password must be at least 8 characters."}).max(50),
  
  });
  
export const postValidationSchema = z.object({
    caption: z.string().min(5).max(2200),
    file: z.custom<File[]>(),
    location: z.string().min(2).max(100),
    tags: z.string(),
  
  });

  export const ProfileValidation = z.object({
    file: z.custom<File[]>(),
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    username: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email(),
    bio: z.string(),
  });
  
  