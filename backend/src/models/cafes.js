const mongoose = require('mongoose')

const schema = mongoose.Schema({
  name: {
    type: String,
  },

  description: {
    type: String,
  },

  location: [
    {
      type: String,
    },
  ],

  avatar_url: {
    url: String,
    public_id: String,
  },
})

module.exports = mongoose.model('cafes', schema, 'cafes')
