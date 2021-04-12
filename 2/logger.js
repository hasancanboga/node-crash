console.log(__filename)
console.log(__dirname)
var url = "http://mylogger.io/log";

function log(message) {
  // sende and http request
  console.log(message);
}

// if you console.log(module) it has a property called 'exports'

module.exports = log;
