const mongoose = require('mongoose');
const { User } = require('../models/registration')
const config = require('config')
const express = require('express')
const router = express.Router()
const Joi = require('joi')
const bcrypt = require('bcrypt')
const responses = require('../contants');
const { response } = require('express');

router.post('/', async (req,res) => {
  const { error } = validate(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  let user = await User.findOne({email: req.body.email})
  if(!user) return res.status(400).send({status:400,success:false, message:'Invalid email or password...!'})

  const validatePassword = await bcrypt.compare(req.body.password, user.password)
  if(!validatePassword) return res.status(400).send({status:400,message:'invalid email or password...!'})

  const token  = user.generateAuthToken();
  res.header('bearer_token', token).send({status:200,token:token})


})

function validate(req){
  const schema = Joi.object({
    email: Joi.string().min(5).max(255).required(),
    password: Joi.string().min(5).max(1024).required()
  })
  return schema.validate(req)
}

module.exports = router