'use strict'

const app = require('./app')

app.listen(process.env.PORT || 3000, () => console.log(`Node.js listening on port ${process.env.PORT || 3000}`))
