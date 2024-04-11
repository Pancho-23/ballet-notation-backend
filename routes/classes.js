const express = require('express')
const {
  getClass,
  getClasses,
  createClass,
  deleteClass,
  updateClass
} = require('../Controllers/classControllers')

const router = express.Router()

//GET all classes
router.get('/', getClasses)

//GET single class
router.get('/:id', getClass)

//POST a class
router.post('/', createClass)

//DELETE a class
router.delete('/:id', deleteClass)

//UPDATE a class
router.patch('/:id', updateClass)

module.exports = router