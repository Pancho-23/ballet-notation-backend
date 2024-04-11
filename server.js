const express = require('express');
const mongoose = require('mongoose')
require('dotenv').config()
const classesRoutes = require('./routes/classes')
const stepsRoutes = require('./routes/steps')
const userRoutes = require('./routes/users')


// init app & middleware
const app = express()
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes for classes
app.use('/api/classes', classesRoutes)

//routes for steps
app.use('/api/steps', stepsRoutes)

//routes for users
app.use('/api/users', userRoutes)

//Connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {

    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })



