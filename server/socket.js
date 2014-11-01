/**
 * Created by assafgannon on 10/29/14.
 */
'use strict';

var logger = require('./logger');

module.exports = function(server) {

  //Socket.io
  var io = require('socket.io')(server);

  io.on('connection', function (socket) {

    logger.log('debug', 'Connected socket: %s', socket.id);

    require('./api/remote/remote.controller')(io, socket);

  });

};
