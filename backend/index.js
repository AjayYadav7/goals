const mongoose = require('mongoose');
const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

mongoose.set('strictQuery', true)
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/goalsDatabase')
.then(res => console.log('database connected successfully ...!'))
.catch(error => console.log("error in connecting database...!"))


app.use(express.json())
app.listen(port , () => {
  console.log(`App listening on PORT ${port}`)
})