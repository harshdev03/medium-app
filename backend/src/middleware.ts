import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { bearerAuth } from "hono/bearer-auth";
import { verify } from "hono/jwt";

const  middleware = new Hono<{
        Bindings:{
                DATABASE_URL : string,
                JWT_SECRET : string
        }
}>()

middleware.use('/blog/*' , async (c , next) => {
    const prisma = new PrismaClient({
        datasourceUrl : c.env.DATABASE_URL,

    }).$extends(withAccelerate())

    const header =  c.req.header("Authorization")
    if(!header){
        return c.json({msg : "Invalid credentails"})
    }
    
    const decoded = await verify(header , c.env.JWT_SECRET)
    if(decoded.id){
        next()
    }else{
        return c.json({msg : "Invalid credentails"}, 404)
    }

        
    
    
})





export default middleware