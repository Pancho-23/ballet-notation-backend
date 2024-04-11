const express = require('express')
const {
  getStep,
  getSteps,
  createStep,
  deleteStep,
  updateStep
} = require('../Controllers/stepControllers')

const router = express.Router()

//GET all steps
router.get('/', getSteps)

//GET single step
router.get('/:id', getStep)

//POST a step
router.post('/', createStep)

//DELETE a step
router.delete('/:id', deleteStep)

//UPDATE a step
router.patch('/:id', updateStep)

module.exports = router