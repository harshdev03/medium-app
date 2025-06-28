import { Hono } from 'hono'
import user from './routes/user'
import blog from './routes/blog'
import middleware from './middleware'
import { cors } from 'hono/cors'

const app = new Hono()


app.use('/*', cors({
  origin: 'https://medium-app-pearl.vercel.app',
  credentials: true
}))
app.route('/api/v1/user', user)
app.route('/api/v1/blog', blog)
app.route('/api/v1/' , middleware )


app.get("/", (c) => {
    return c.text("Post here ..")
})

export default app
