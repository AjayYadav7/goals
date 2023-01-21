const Joi = require('joi');
const config = require('config');
const mongoose = require('mongoose');

const LanguaugeSchema = new mongoose.Schema({
  name:{
    type: String,
    maxlength: 50,
    required: true
  },
  title: {
    type: String,
    minlength: 5,
    required: true
  },
  details: {
    type: String,
    required: true,
    minlength:100
  },
  languageType:{
    type: String,
    required: true
  }
})

const Language = mongoose.model('languages', LanguaugeSchema)

function validateLanguage (data) {
  const schema = Joi.object({
    name: Joi.string().max(50).required(),
    title: Joi.string().min(5).required(),
    details: Joi.string().min(100).required(),
    languageType: Joi.string().required()
  })
  return schema.validate(data)
}

exports.validate = validateLanguage;
exports.Language = Language;