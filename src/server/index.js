var path = require('path')
const express = require('express')
const cors = require('cors')
// const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv')
const fetch = require('node-fetch')
const bodyParser = require('body-parser')

// inizialize API key
dotenv.config()
console.log(`Your API Key is ${process.env.API_KEY}`)

const app = express()
app.use(cors())
app.use(express.static('dist'))
console.log(__dirname)
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

// get text submitted in the page
const input = {}
app.post('/data', function(req, res) {
    input.data = req.body
    console.log(input)
    res.send(input)
})

// send data received from the page to the API
const apiURL = `https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&of=json&txt=${input.data}&lang=en`
fetch(apiURL, {
    method: 'post',
    body: JSON.stringify(input),
    headers: {
        'Content-Type': 'application/json'
    } 
}) .catch (err => console.log('error', err))
.then(res => res.json())
// .then(json => console.log(json))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })
