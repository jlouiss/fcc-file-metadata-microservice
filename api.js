'use strict'

const router = require('express').Router()
const multer = require('multer')

const upload = multer({ dest: process.env.UPLOAD_DIRECTORY || __dirname + '/upload' })

router.post('/fileanalyse', upload.single('upfile'), (req, res) => {
  const { file } = req

  if (!file) res.json({ "error": "An error occurred while parsing the file. Please retry." })

  const { originalname: name, mimetype: type, size } = file
  res.json({ name, type, size })
})

module.exports = router
