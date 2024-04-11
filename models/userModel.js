const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  wrongPoints: {
    type: Number,
    required: true
  },
  starPoints: {
    type: Number,
    required: true
  }


})


//static signup method
userSchema.statics.signup = async function (email, password) {

  //validation
  if (!email || !password) {
    throw Error('All field must be filled.')
  }

  if (!validator.isEmail(email)) {
    throw Error('Email is not valid.')
  }

  if (!validator.isStrongPassword(password)) {
    throw Error('Password not strong enough.')
  }

  const exists = await this.findOne({ email })

  if (exists) {
    throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({ email, password: hash, verified: false, status: 'newbie', wrongPoints: 0, starPoints: 0 })

  return user


}

//statis login method
userSchema.statics.login = async function (email, password) {

  if (!email || !password) {
    throw Error('All field must be filled.')
  }

  const user = await this.findOne({ email })

  if (!user) {
    throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw Error('Incorrect password')
  }

  return user
}

module.exports = mongoose.model('user', userSchema)