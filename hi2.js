const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('hello world')
  })

app.get('/hi', function (req, res) {
    res.send('well come to viet nam')
  })

app.listen(port,(console.log(`sever live in ${port}`)))