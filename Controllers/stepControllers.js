const Step = require('../models/stepModel')
const mongoose = require('mongoose')

//get all steps
const getSteps = async (req, res) => {
  const steps = await Step.find({}).sort({ createdAt: -1 })

  res.status(200).json(steps)
}

//get a single step
const getStep = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Step NOT FOUND -- NOT VALID ID' })
  }

  const oneStep = await Step.findById(id)

  if (!oneStep) {
    return res.status(404).json({ error: 'Step NOT FOUND' })
  }

  res.status(200).json(oneStep)
}

//post a step
const createStep = async (req, res) => {
  const { master, mounth, day, year, country, stage, kind, stepBody } = req.body

  try {

    if (master === '' || mounth === '' || day === '' || year === '' || country === '' || stage === '' || kind === '') {
      res.status(401).json({ error: 'All catalog fields must be filled (Master - Mounth - Day - Year - Country - Stage - Kind).' })
    } else {
      oneStep = await Step.create({
        master,
        mounth,
        day,
        year,
        country,
        stage,
        kind,
        stepBody
      })

      res.status(200).json(oneStep)
    }



  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


//delete a class
const deleteStep = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Step NOT FOUND -- NOT VALID ID' })
  }

  const oneStep = await Step.findOneAndDelete({
    _id: id
  })

  if (!oneStep) {
    return res.status(404).json({ error: 'Step NOT FOUND' })
  }

  res.status(200).json(oneStep)
}



//patch a given class
const updateStep = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Step NOT FOUND -- NOT VALID ID' })
  }

  const oneStep = await Step.findOneAndUpdate({ _id: id }, { ...req.body })

  if (!oneStep) {
    return res.status(404).json({ error: 'Step NOT FOUND' })
  }

  res.status(200).json(oneStep)
}





module.exports = {
  getStep,
  getSteps,
  createStep,
  deleteStep,
  updateStep
}