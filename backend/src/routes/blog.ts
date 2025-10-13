import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { verify } from "hono/jwt";
import { createBlogSchema , updateBlogSchema } from "@harshchalwadi/medium-app";


const blog = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();


interface PostType {
  title: string;
  content: string;
}

interface UpdateType {
  id: number;
  title: string;
  content: string;
}



blog.use('/*', async (c, next) => {
  const header = await c.req.header("Authorization");

  if (header?.startsWith("Bearer ")) {
    const token = header.split(" ")[1];
    const decoded = await verify(token, c.env.JWT_SECRET);

    if (decoded && decoded.id) {
      c.set("userId", decoded.id as string);
    }
    return await next();
  } else {
    return c.json({ msg: "Invalid token" }, 404);
  }
});


blog.post("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());  

  const body = await c.req.json();
  const parsed = createBlogSchema.safeParse(body);
  const authorId = c.get("userId");

  if (!parsed.success) {
    return c.json({ msg: "Invalid blog" }, 400);
  }

  try {
    const { title, content  }: PostType = parsed.data;

    const blog = await prisma.post.create({
      data: {
        title,
        content,
        authorId: parseInt(authorId), 
      }
    });

    return c.json({ msg: "Blog created successfully", blog }, 201);

  } catch (e) {
    return c.json({ msg: "Invalid credentials" }, 404);
  }
});


blog.put("/", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const body = await c.req.json();
  const parsed = updateBlogSchema.safeParse(body);

  if (!parsed.success) {
    return c.json({ msg: "Invalid blog" }, 400);
  }

  try {
    const { id, title, content }: UpdateType = parsed.data;

    const blog = await prisma.post.update({
      where: { id: Number(id) },
      data: {
        title,
        content,
      }
    });

    return c.json({ msg: "Updated the blog", blog }, 200);

  } catch (e) {
    return c.json({ msg: "Invalid credentials" }, 404);
  }
});


blog.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  try {

    const blogs = await prisma.post.findMany({
      select:{
        title : true,
        id : true, 
        content : true,
        publishedDate : true,
        author:{
          select:{
            name : true
          }
        }
      }
    });
    return c.json({ blogs }, 200);
    
  } catch (e) {
    return c.json({ msg: "Failed to fetch blogs" }, 500);
  }
});


blog.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL
  }).$extends(withAccelerate());

  const id = Number(c.req.param("id"));

  try {
    const blog = await prisma.post.findUnique({
      where: {
        id
      }, 
      select:{
        id : true,
        title : true,
        content : true,
        publishedDate : true,
        author:{
          select:{
            name :true
          }
        },
      }
    });

    return c.json({ blog }, 200);

  } catch (e) {
    return c.json({ msg: "Invalid credentials" }, 404);
  }
});




export default blog;