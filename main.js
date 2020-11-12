'use strict'

const {db} = require('./server/db')
const app = require('./server')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`\n\n    studiously serving silly sounds on port ${PORT}   \n\n`))

