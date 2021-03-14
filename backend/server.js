import express from 'express'
import './db/mongoose'
import dotenv from 'dotenv'
// import bodyParser from 'body-parser'

dotenv.config()
const app = express()
app.use(express.urlencoded({ extended: true })); 
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running....')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(
    `server running in ${process.env.NODE_ENV} mode and on ${PORT}`
  )
})
