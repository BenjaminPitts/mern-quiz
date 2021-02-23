const express = require('express')
// TODO: rename express Router to your resource
const quiz = express.Router()
// TODO: rename your Model to your resource
// TODO: make sure you are requiring the correct file
const Quiz = require('../models/quiz.js')

// TODO: rename each router to your resource for each route and rename each model for all 5 routes

// CREATE
// TODO: rename router to your resource
quiz.post('/', (req, res) => {
  // TODO: Update Contact to your resource
  Quiz.create(req.body, (error, createdQuestion) => {
    if (error) {
      res.status(400).json({ error: error })
    }
    res.status(200).send(createdQuestion)
  })
})

// READ
// TODO: rename router to your resource
quiz.get('/', (req, res) => {
  // TODO: Update Contact to your resource
  Quiz.find({}, (error, foundQuestion) => {
    if (error) {
      res.status(400).json({ error: error })
    }
    res.status(200).json(foundQuestion)
  })
})

// UPDATE
// TODO: rename router to your resource
quiz.put('/:id', (req, res) => {
  // TODO: Update Contact to your resource
  Quiz.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, updatedQuestion) => {
      if (err) {
        res.status(400).json({ error: err.message })
      }
      res.status(200).json(updatedQuestion)
    }
  )
})

// DELETE
// TODO: rename router to your resource
quiz.delete('/:id', (req, res) => {
  // TODO: Update Contact to your resource
  Quiz.findByIdAndRemove(req.params.id, (error, deletedQuestion) => {
    if (error) {
      res.status(400).json({ error: error })
    }
    res.status(200).json(deletedQuestion)
  })
})

// Handle 404
// TODO: rename router to your resource
quiz.get('/*', (req, res) => {
  res.status(404).json({ error: 'page not found' })
})

module.exports = quiz
