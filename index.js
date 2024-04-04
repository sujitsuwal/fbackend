require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/testing', (req, res) => {
  res.send('the test is successful')
})

app.get('/youtube', (req, res) => {
  res.send('the youtube is successful')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})