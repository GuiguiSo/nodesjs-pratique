const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const morgan = require('morgan');


const node_env = 'dev'

const portMin = 3000
const portMax = 4000
const portRandom = Math.random() * (portMax - portMin) + portMin; 
const port = Math.round(portRandom)



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ping', (req, res) => {
    var reponse = "pong"
    res.send({reponse})
})

app.get('/sn', (req, res) => {
    var reponse = "pong"
    res.send({reponse})
})



  
app.listen(port, () => {
  console.log(` listening on port ${port} in ${node_env} mode`)
})
