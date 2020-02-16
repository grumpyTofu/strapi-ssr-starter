const express = require('express')
const next = require('next')
    
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  // if (req.url === ‘/sw.js’) {
  //   server.serveStatic(req, res, path.resolve(‘./static/sw.js’))
  // } else {
  //   handle(req, res)
  // }
  
  // server.all('/', function (req, res, next) {
  //   res.redirect('http://localhost:3000/coss')
  //   next() // pass control to the next handler
  // })

  server.get('*', (req, res) => {
    return handle(req, res)
  })
  
  server.post('/api/test', (req, res) => {
    console.log("Test successful!")
    res.send("Test Successful!")
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Server ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})