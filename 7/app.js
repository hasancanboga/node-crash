const http = require('http')

const server = http.createServer()
// server actually extends EventEmitter

server.on('connection', socket => {
    console.log('New Connection...')
})

server.listen(3313)

console.log('Listening on port 3313...') // go to localhost:3313 after running app.js, it will log
