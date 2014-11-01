/**
 * Created by assafgannon on 10/29/14.
 */
'use strict';

var logger = require('./logger'),
  remoteController = require('./api/remote/remote.controller');

module.exports = function (server) {

  //Socket.io
  var io = require('socket.io')(server);

  io.on('connection', function (socket) {

    logger.log('debug', 'Connected socket: %s', socket.id);

    remoteController(socket);

  });

};
