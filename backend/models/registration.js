const express = require('express');
const Joi = require('joi');
const config = require('config')
const mongoose = require('mongoose');
const { string } = require('joi');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  firstName:{
    type:String,
    required: true,
    minlength:3,
    maxlength:50,
  },
  lastName:{
    type: String,
    required:true,
    minlength:3,
    maxlength:50,
  },
  password:{
    type:String,
    required:true,
    // match:'',
    minlength:5,
    maxlength:1024
  },
  email:{
    type:String,
    required:true,
  },
  isAdmin:Boolean,
  gender:{
    type:[String],
    enum: ['male','female','transgender','neutral']
  },
  phone:{
    type:Number,
  }
})

userSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({_id:this._id, isAdmin: this.isAdmin}, config.get('jwtPrivateKey'))
  return token
}

const User = mongoose.model('Registrations', userSchema)

function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(50).required(),
    lastName: Joi.string().min(3).max(50).required(),
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required(),
    isAdmin: Joi.boolean(),
    gender: Joi.string(),
    phone: Joi.number()
  })

  return schema.validate(user)
}

exports.User = User;
exports.validate = validateUser;