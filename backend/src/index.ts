import { Hono } from 'hono'
import user from './routes/user'
import blog from './routes/blog'
import middleware from './middleware'
import { cors } from 'hono/cors'

const app = new Hono()


app.use('/*', cors({
  origin: (origin) => {
    const allowedOrigins = [
      'http://localhost:5173',
      'https://medium.harrsh.xyz',
      'https://harrsh.xyz',
      'https://medium-app-pearl.vercel.app'
    ]
    return allowedOrigins.includes(origin ?? '') ? origin : ''
  },
  credentials: true,
  allowHeaders: ['Authorization', 'Content-Type'],
}))


app.route('/api/v1/user', user)
app.route('/api/v1/blog', blog)
app.route('/api/v1/' , middleware )


app.get("/", (c) => {
    return c.text("Post here ..")
})

export default app
