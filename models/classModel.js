const mongoose = require('mongoose')

const Schema = mongoose.Schema

const classSchema = new Schema({
  master: {
    type: String,
    required: true
  },
  mounth: {
    type: String,
    required: true
  },
  day: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  classBody: {
    type: String,
    required: true
  }
}, { timestamps: true })


module.exports = mongoose.model('class', classSchema)