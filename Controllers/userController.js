const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '1d' })
}

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.login(email, password)


    //create token
    const token = createToken(user._id)

    //other properties
    const verified = user.verified;
    const status = user.status;
    const wrongPoints = user.wrongPoints;
    const starPoints = user.starPoints;

    if (user.wrongPoints > 10) {
      res.status(201).json({ error: 'Sorry, this account has been permanently banned due to exceeding the limit of wrong points of the Class Creator Program.' })
    }

    if (user.status === 'banned') {
      res.status(201).json({ error: 'Sorry, this account has been permanently banned.' })
    }


    res.status(200).json({ email, token, verified, status, wrongPoints, starPoints })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}


//signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.signup(email, password)

    //create token
    const token = createToken(user._id)

    //other properties
    const verified = user.verified;
    const status = user.status;
    const wrongPoints = user.wrongPoints;
    const starPoints = user.starPoints;

    res.status(200).json({ email, token, verified, status, wrongPoints, starPoints })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }

}


module.exports = { loginUser, signupUser }