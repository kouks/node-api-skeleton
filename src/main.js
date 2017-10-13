import http from 'http'
import express from 'express'
import bodyParser from 'body-parser'

/*
|
| We boot up the http server and listed on a given port.
|
*/

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.server = http.createServer(app)
app.server.listen(8080)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
