const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
  },

  feedback: {
    type: String,
  },

  for: {
    type: String,
  }
}, {timestamps:true})

module.exports = mongoose.model('feedbacks', feedbackSchema, 'feedbacks')
