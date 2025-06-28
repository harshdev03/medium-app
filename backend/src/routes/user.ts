import { Hono } from "hono";
import { z } from "zod";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";
import { signinSchema , signupSchema } from "@harshchalwadi/medium-app";

const user = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();


interface UserType {
  name: string;
  password: string;
  email: string;
}

user.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const parsed = signupSchema.safeParse(body);

  if (!parsed.success) {
    return c.json({ msg: "Invalid credentials" }, 400);
  }

  const { name, email, password }: UserType = parsed.data;

  try{
    
    const user = await prisma.user.create({
      data: {
        name : name,
        email: email,
        password : password,
      },
    });
      const token = await sign(
        { id: user.id, email: user.email },
        c.env.JWT_SECRET
    );
    
    return c.json({ msg: "User created successfully", token : token }, 201);

  }catch(e){

    return c.json({ msg: "User not found" }, 404);
  }

  
});



user.post("/signin", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const parsed = signinSchema.safeParse(body);
  
  if (!parsed.success) {
    return c.json({ msg: "Invalid credentials" }, 400);
  }
  
  const { email, password } = parsed.data;
  try {

    const user = await prisma.user.findUnique({
      where: {
        email,
        password
      },
    });

    if (!user || user.password !== password) {
      return c.json({ msg: "Invalid Credentials" }, 400);
    }

    const token = await sign(
  { id: user.id, email: user.email },
  c.env.JWT_SECRET
)
    return c.json({token : token})


  } catch (e) {
    return c.json({ msg: "Internal Server Error" }, 500);
  }
});



export default user;
