const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const endpoints = require('./endpoints')

let server
const setupServer = () => {
  dotenv.config()

  app.use(cors())
  app.use(bodyParser.json())
  // Add endpoints iteratively
  Object.entries(endpoints).map(([key, values]) => {
    values.forEach((value) => {
      app[key](value.path, value.function)
    })
  })

  // Make sure our Server is alive and well
  app.get('/heartbeat', (req, res) => {
    res.send('Thump Thump...... Thump Thump!')
  })

  server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
  return server
}

module.exports = server || setupServer()
