// OS module

const os = require('os')

var totalMemory = os.totalmem()

var freeMemory = os.freemem()

// console.log(`Total Memory ${totalMemory}`)

// console.log(`Total Memory ${freeMemory}`)


//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// filesystem module

const fs = require ('fs')

// const files = fs.readdirSync('./')
// console.log(files)

fs.readdir('./', function(err, files){
    if(err) console.log('Error', err)
    else console.log('Result', files)
})
