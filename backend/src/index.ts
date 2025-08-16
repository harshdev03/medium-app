import { Hono } from 'hono'
import user from './routes/user'
import blog from './routes/blog'
import middleware from './middleware'
import { cors } from 'hono/cors'

const app = new Hono()

const allowedOrigins = [
  'http://localhost:5173',
  'https://medium.harrsh.xyz',
  'https://harrsh.xyz',
  'https://medium-app-pearl.vercel.app',
]

app.use(
  '/*',
  cors({
    origin: (origin) => {
      if (!origin) return '*' 
      return allowedOrigins.includes(origin) ? origin : allowedOrigins[0]
    },
    credentials: true,
    allowHeaders: ['Authorization', 'Content-Type'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
)


app.options('/*', (c) => {
  return c.text('OK', 204)
})

app.route('/api/v1/user', user)
app.route('/api/v1/blog', blog)
app.route('/api/v1/', middleware)

app.get('/', (c) => c.text('Post here ..'))

export default app
