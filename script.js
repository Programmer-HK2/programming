
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req , res) => {
  res.send('This is twitter')
})

app.get('/login', (req, res)=>{
  res.send("<h1>Please Login at HKZ-Programmer.com</h1>")
})

app.get('/youtube', (req , res) =>{
  res.send("HKZ - Programmer")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})