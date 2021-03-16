import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/studentRoutes.js'

// <----- App Configuration ------>
dotenv.config()
connectDB()
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// <----- Routes ------>
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.send('API is running....')
})

// <----- PORT setup ------>
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `server running in ${process.env.NODE_ENV} mode and on ${process.env.PORT}`
  )
})
