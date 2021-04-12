const EventEmitter = require('events')

const emitter = new EventEmitter()

// Register a Listener
emitter.on('messageLogged', e => console.log('Listener called', e))

// Raise an event
emitter.emit('messageLogged', { id: 1, url: 'http://' })

// Exercise: Raise: log(data: message)

emitter.on('log', e => console.log('Logging', e.message))

emitter.emit('log', { message: 'qweqwe' })