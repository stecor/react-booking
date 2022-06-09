const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

// express routing
const app = express()
const port = 8800

// .env connection
dotenv.config()

// try to connect mongoose
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('Connected to MongoDB')
  } catch (error) {
    throw error
  }
}

mongoose.connection.on('disconnected', () => {
  console.log('mongoDB disconnected!')
})

mongoose.connection.on('connected', () => {
  console.log('mongoDB connected!')
})

// GET/POST Method route
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
  connect()
  console.log(`Listening on port ${port}!`)
})
