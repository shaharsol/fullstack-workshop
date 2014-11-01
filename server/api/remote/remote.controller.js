/**
 * Created by assafgannon on 11/1/14.
 */
var logger = require('../../logger');




module.exports = function (io, socket) {

  var api = {
    play: function (options) {
      logger.log('debug', 'play', options);
      io.emit('play', options);
    },
    pause: function (options) {
      logger.log('debug', 'pause', options);
      io.emit('pause', options);
    },
    stop: function (options) {
      logger.log('debug', 'stop', options);
      io.emit('stop', options);
    },
    volumeDown: function (options) {
      logger.log('debug', 'volumeDown', options);
      io.emit('volumeDown', options);
    },
    volumeUp: function (options) {
      logger.log('debug', 'volumeUp', options);
      io.emit('volumeUp', options);
    },
    mute: function (options) {
      logger.log('debug', 'mute', options);
      io.emit('mute', options);
    }
  };

  socket.on('play', api.play);
  socket.on('pause', api.pause);
  socket.on('stop', api.stop);
  socket.on('volumeUp', api.volumeUp);
  socket.on('volumeDown', api.volumeDown);
  socket.on('mute', api.mute);

};

