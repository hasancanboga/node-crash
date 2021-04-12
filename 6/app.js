const Logger = require('./logger');
const logger = new Logger()

logger.on('messageLogged', function () {
    console.log('Listener called', { data: 3313 })
})


logger.log('message')
