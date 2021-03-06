const express = require('express')
const cors = require('cors')

const projects = require('./projects.json')
const about = require('./about.json')

const app = express()

app.use(cors())

app.get('/', (req,res) => {
    res.send('Hello home route')
})

app.get('/projects', (req,res) => {
    res.send(projects)
})

app.get('/about', (req,res) => {
    res.send(about)
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))