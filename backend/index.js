const mongoose = require('mongoose');
const express = require('express');
const app = express();
const registrations = require('./routes/registrations');
const auth = require('./routes/auth');
const port = process.env.PORT || 4000;

mongoose.set('strictQuery', true)

mongoose.connect('mongodb://localhost:27017/goalsDatabase')
.then(res => console.log('database connected successfully ...!'))
.catch(error => console.log("error in connecting database...!"))


app.use(express.json())
app.use('/api/auth', auth)
app.use('/api/registrations', registrations)
app.listen(port , () => {
  console.log(`App listening on PORT ${port}`)
})