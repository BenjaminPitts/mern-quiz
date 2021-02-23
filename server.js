// DEPENDENCIES

// Allow Cross-Origin-Requests
const cors = require('cors')
// Server
const express = require('express')
// MongoDB ORM
const mongoose = require('mongoose')

// Dependency configurations
require('dotenv').config()
const app = express()
const PORT = process.env.PORT
const QUIZ_URI = process.env.QUIZ_URI

// MIDDLEWARE
app.use(express.json()) // use .json(), not .urlencoded()
app.use(cors())

// DATABASE
mongoose.connect(
  QUIZ_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log('the connection with mongod is established at', QUIZ_URI)
  }
)

// Optional, but likely helpful
// Connection Error/Success
// Define callback functions for various events
mongoose.connection.on('error', err => console.log(err.message + ' is mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))

// TODO: Update controllers/routes to your resources
// CONTROLLERS/ROUTES
const quizController = require('./controllers/quiz_controller.js')
app.use('/quiz', quizController)

app.get('/*', (req, res) => {
  res.redirect('/quiz')
})

// LISTEN
app.listen(PORT, () => {
  console.log('🎉🎊', 'Up and running on', PORT, '🎉🎊')
})
