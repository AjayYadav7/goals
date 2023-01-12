const mongoose = require('mongoose');
const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

mongoose.set('strictQuery', true)

mongoose.connect('mongodb://localhost:27017/goalsDatabase')
.then(res => console.log('database connected successfully ...!'))
.catch(error => console.log("error in connecting database...!"))


app.use(express.json())

app.get('/', (req,res) => {
  res.send('<h1>Home page</h1>')
})

app.listen(port , () => {
  console.log(`App listening on PORT ${port}`)
})