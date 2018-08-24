'use strict'

const express = require('express')
const cors = require('cors')
const api = require('./api')

const app = express()

app.use(cors())
app.use('/public', express.static(__dirname + '/public'))
app.use((req, res, next) => {
  console.log(`${req.method} ${req.originalUrl}`)
  next()
})

app.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))

app.use('/api', api)

module.exports = app
