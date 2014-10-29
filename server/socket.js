/**
 * Created by assafgannon on 10/29/14.
 */
'use strict';


module.exports = function(server) {

  //Socket.io
  var io = require('socket.io')(server);

  io.on('connection', function (socket) {

    console.log('Connected socket: '+socket.id);

  });

};
