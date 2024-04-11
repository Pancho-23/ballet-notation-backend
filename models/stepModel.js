const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stepSchema = new Schema({
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
  stage: {
    type: String,
    required: true
  },
  kind: {
    type: String,
    required: true
  },
  stepBody: {
    type: String,
    required: true
  }
}, { timestamps: true })


module.exports = mongoose.model('step', stepSchema)