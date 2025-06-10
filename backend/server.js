import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js'
import cookieParser from 'cookie-parser'

const app = express()
const port = process.env.PORT || 5001

// CORS middleware
app.use((req, res, next) => {
  const allowedOrigins = [
    'http://localhost:3000',
    'https://your-vercel-app.vercel.app',
    'https://jungle-store.vercel.app',
    'https://jungle-store-frontend.vercel.app',
  ]

  const origin = req.headers.origin
  console.log('🔍 Incoming request:', req.method, req.url)
  console.log('🔍 Request origin:', origin)
  console.log('🔍 Origin in allowed list?', allowedOrigins.includes(origin))
  console.log('🔍 All request headers:', req.headers)
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  )
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Credentials', true)

  //  PREFLIGHT_CHECK
  if (req.method === 'OPTIONS') {
    // ✅ TRUE for preflight
    res.sendStatus(200)
  } else {
    next() // This line doesn't execute for OPTIONS   ✅ This executes - continue to API routes
  }
})

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// cookie parser
app.use(cookieParser())

connectDB()

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/upload', uploadRoutes)

app.get('/api/config/paypal', (req, res) => {
  res.send({ clientId: process.env.PAYPAL_CLIENT_ID })
})

// make uploads folder a static folder
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// API only - no frontend serving
app.get('/', (req, res) => {
  res.send('API is running....')
})

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
