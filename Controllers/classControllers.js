const Class = require('../models/classModel')
const mongoose = require('mongoose')
const { balletStringToObject } = require('../appFunctionsCommon')

//get all classes
const getClasses = async (req, res) => {
  const classes = await Class.find({}).sort({ createdAt: -1 })

  res.status(200).json(classes)
}

//get a single class
const getClass = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Class NOT FOUND -- NOT VALID ID' })
  }

  const oneClass = await Class.findById(id)

  if (!oneClass) {
    return res.status(404).json({ error: 'Class NOT FOUND' })
  }

  res.status(200).json(oneClass)
}

//post a class
const createClass = async (req, res) => {
  const { master, mounth, day, year, country, classBody } = req.body

  const bodyOfClass = balletStringToObject(classBody)


  try {


    //classes must have at least 13 steps 
    if (bodyOfClass.classBody.length < 13) {
      res.status(401).json({ error: 'The class must contain at least 13 steps.' })
    } else if (master === '' || mounth === '' || day === '' || year === '' || country === '') {
      res.status(401).json({ error: 'All catalog fields must be filled (Master - Mounth - Day - Year - Country).' })
    } else {
      oneClass = await Class.create({
        master,
        mounth,
        day,
        year,
        country,
        classBody
      })

      res.status(200).json(oneClass)
    }




  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


//delete a class
const deleteClass = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Class NOT FOUND -- NOT VALID ID' })
  }

  const oneClass = await Class.findOneAndDelete({
    _id: id
  })

  if (!oneClass) {
    return res.status(404).json({ error: 'Class NOT FOUND' })
  }

  res.status(200).json(oneClass)
}



//patch a given class
const updateClass = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Class NOT FOUND -- NOT VALID ID' })
  }

  const oneClass = await Class.findOneAndUpdate({ _id: id }, { ...req.body })

  if (!oneClass) {
    return res.status(404).json({ error: 'Class NOT FOUND' })
  }

  res.status(200).json(oneClass)
}





module.exports = {
  getClass,
  getClasses,
  createClass,
  deleteClass,
  updateClass
}