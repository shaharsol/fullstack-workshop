/**
 * Created by assafgannon on 10/29/14.
 */


'use strict';

var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(),
    new (winston.transports.File)({ filename: 'logs/out.log', level: 'debug' })
  ]
});

module.exports = (function(){
  return logger;
})();
