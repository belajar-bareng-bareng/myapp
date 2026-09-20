require('dotenv').config()

const express = require('express');
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/greeting", (req, res) => {
  const name = req.query.name
  res.send(`Hallo ${name}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
