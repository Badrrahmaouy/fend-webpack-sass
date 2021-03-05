var path = require('path')
const express = require('express')
const cors = require('cors')
// const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
const fetch = require('node-fetch')
const bodyParser = require('body-parser')

// inizialize API key
dotenv.config()

const app = express()
app.use(cors())
app.use(express.static('dist'))
// console.log(__dirname)
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// send data received from the page to the API
app.post('/data', async function(req, res) {
    // console.log(req.body.url)
    const evaluation = {}
    const apiURL = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&txt=&url=${req.body.url}&lang=en`
    let response = await fetch(apiURL)
    let data = await response.json()
    // console.log(data)
    evaluation.msg = data.status.msg
    evaluation.polarity = data.score_tag
    evaluation.agreement = data.agreement
    evaluation.subjectivity = data.subjectivity
    evaluation.confidence = data.confidence
    evaluation.irony = data.irony
    res.send(evaluation)
    // console.log(evaluation)
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
