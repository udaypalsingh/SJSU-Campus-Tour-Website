const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const buildingRouter = require('./routes/building-router')

const app = express()
const apiPort = 4040

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Welcome to SJSU Buldings database')
})

app.use('/api', buildingRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
