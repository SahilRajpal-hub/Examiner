import mongoose from 'mongoose'

//function to connect database
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`Mongo Db connected to ${conn.connection.port}`)
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

export default connectDB
