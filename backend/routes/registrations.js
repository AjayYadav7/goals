const { User, validate } = require('../models/registration')
const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const _ = require('lodash')
const bcrypt = require('bcrypt')

const response = {
  status:'xyz',
  success:true,
  result:''
}

router.post('/', async (req, res) => {
  const { error } = validate(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  let user = await User.findOne({email: req.body.email})
  if(user) return res.status(400).send({status:400, message:'User already registered!'})

  user = new User(_.pick(req.body, ["firstName", "lastName", "email", "password", "phone", "gender", "isAdmin"]))
  const salt = await bcrypt.genSalt(10)
  user.password = await bcrypt.hash(user.password, salt)
  await user.save()

  const token = user.generateAuthToken()
  res.header('bearer_token', token).send(_.pick(user, ["firstName", "lastName", "email", "phone", "gender", "isAdmin"]))

})

module.exports = router