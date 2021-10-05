// module import
const express = require('express')
const app = express()

// variation assign
const port = 3000

// routing
app.get('/', (req, res) => {
  res.send('hello world!')
})

// server listener
app.listen(port, (req, res) => {
  console.log(`express running on the port ${port}`)
})
