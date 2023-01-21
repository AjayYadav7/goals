const mongoose = require('mongoose');
const express  = require('express');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const router = express.Router()
const _ = require('lodash');
const { Language, validate } = require('../models/language');
const { result } = require('lodash');

router.post('/' , [admin, auth],  async(req, res) => {
  console.log("languages",req.body)
  const { error } = validate(req.body)
  if(error) return res.status(400).send(error.details[0].message)

  let language = Language.findOne({name: req.body.name})
  // console.log('lan',language)
  // if(language) return res.status(400).send("Language already registered")

  language = new Language(_.pick(req.body, ['name', 'details', 'title', 'languageType']))
  const result = await language.save()
  res.send({status:200,data:_.pick(language, ['name', 'details', 'title', 'languageType'])})
})

router.get('/', [admin, auth], async(req, res) => {
  const language = await Language
  .find()

  console.log("lan",language)
  res.send(language)
})

module.exports = router