const http = require('http')

const server = http.createServer((req, res) => {

    // routes
    // in the real world you dont use this, you use express.
    // because this gets too complex as you add more routes

    if (req.url === '/') {
        res.write('Hello World')
        res.end()
    }

    if (req.url == '/api/courses') {

        var result = {
            asd: "qwe",
            xcv: 3
        }
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(result))
        res.end()
    }

})

server.listen(3313)
console.log('Listening on port 3313...')

