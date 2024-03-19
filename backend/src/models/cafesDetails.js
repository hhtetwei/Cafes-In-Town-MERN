const mongoose = require('mongoose')

const Detailschema = new mongoose.Schema({
  images: [{ url: String, public_id: String }],

  reason: {
    type: String,
  },

  d_code: {
    type: String,
  },
})

module.exports = mongoose.model('cafesDetails', Detailschema, 'cafesDetails')
